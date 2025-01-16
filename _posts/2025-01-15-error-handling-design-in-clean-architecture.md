---
title: "Error Handling Design in Clean Architecture"
excerpt: ""
coverImage: "/blog/assets/error-handling-design-cover.jpg"
date: "2025-01-15"
ogImage:
  url: "/blog/assets/error-handling-design-cover.jpg"
categories: ["clean-architecture", "back-end", "nestjs"]
pin: true
---

In a Clean Architecture design, error handling is crucial to maintain separation of concerns between the various layers. In the context of NestJS, here's how error handlers can be structured for each layer:

## Summary

At the beginning, here is a summary of the error-handling design in Clean Architecture.

Don't thank me. 😉

| Error Type          | Description                                                                          | When to Use                                                                                                                             | Example                                                    |
| ------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| DomainError         | Represents violations of business rules or domain logic.                             | Use when the error reflects a violation of business rules or logic.                                                                     | `Email already exists`                                     |
|                     |                                                                                      |                                                                                                                                         | `User not found` (if part of the business logic)           |
|                     |                                                                                      |                                                                                                                                         | `Insufficient funds` (if it violates business constraints) |
| ValidationError     | Represents errors due to invalid input or failed validation checks.                  | Use when input data is invalid or fails validation checks, such as incorrect format or missing fields.                                  | `Invalid email format`                                     |
|                     |                                                                                      |                                                                                                                                         | `Password too weak`                                        |
|                     |                                                                                      |                                                                                                                                         | `Required field missing`                                   |
|                     |                                                                                      |                                                                                                                                         | `Password too weak`                                        |
|                     |                                                                                      |                                                                                                                                         | `Required field missing`                                   |
| ApplicationError    | Represents errors that occur during application flow, often due to external factors. | Use for errors in the application layer that don't fall under domain logic or infrastructure errors but still disrupt the process flow. | `User not found` (in case it's due to an empty database)   |
|                     |                                                                                      |                                                                                                                                         | `Unauthorized access`                                      |
|                     |                                                                                      |                                                                                                                                         | `Invalid token`                                            |
|                     |                                                                                      |                                                                                                                                         | `Insufficient permissions`                                 |
| InfrastructureError | Represents errors related to external dependencies or infrastructure failures.       | Use when there's an issue with external systems, such as databases, APIs, or file systems.                                              | `Database connection failed`                               |
|                     |                                                                                      |                                                                                                                                         | `Failed to fetch data from external API`                   |
|                     |                                                                                      |                                                                                                                                         | `File not found`                                           |
|                     |                                                                                      |                                                                                                                                         | `Network timeout`                                          |
| UnknownError        | Represents any error that doesn't fit into the above categories.                     | Use when an error occurs that doesn't fit any specific error type or is an unexpected exception.                                        | `Unhandled exception`                                      |
|                     |                                                                                      |                                                                                                                                         | `Unknown error occurred`                                   |

## Domain Layer

### Responsibilities

Core business rules and invariants.

### Error Handling

- Define `DomainError` for domain-specific invariants.
- Avoid dependencies on HTTP or other infrastructure-specific constructs.
- Throw exceptions when domain rules are violated.

### Example

```typescript
//  NestJS
export class DomainError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DomainError";
  }
}

export class User {
  constructor(public readonly email: string, public readonly name: string) {
    if (!this.isValidEmail(email)) {
      throw new DomainError("Invalid email format");
    }
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
```

## Application Layer (Use Cases)

### Responsibilities

Orchestrating business rules and application-specific workflows.

### Error Handling

- Throw specific `ApplicationError` instances when application-level validation fails.
- Ensure exceptions raised here are meaningful for the domain or interface-adapter layers.

### Example

In `CreateUserUseCase`, we can throw `DomainError` when the email is already in use.

```typescript
//  NestJS
import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { User } from "../../domain/user.entity";
import { DomainError } from "../../common/errors";

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(email: string, name: string): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new DomainError("Email already exists");
    }

    const newUser = new User(email, name);
    await this.userRepository.save(newUser);

    return newUser;
  }
}
```

## Infrastructure Layer

### Responsibilities

Communication with external systems (e.g., databases, APIs).

### Error Handling

- Translate infrastructure-related errors into application-level or domain-level exceptions.
- **Database errors**: connection errors, query errors, save errors, etc.
- **Network errors**: connection errors, timeout errors, etc.
- **File operation errors**: read/write errors, etc.
- **External service errors**: request errors, response errors, etc.

We could define `InfrastructureError` to wrap all infrastructure-related errors.

```typescript
//  NestJS
export class InfrastructureError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InfrastructureError";
  }
}
```

### Example

By using Mongoose, we can define the `UserDocument` and `UserSchema` to represent the user data in the database.

```typescript
//  NestJS
import { Schema, Document, model } from "mongoose";

export interface UserDocument extends Document {
  email: string;
  name: string;
}

const UserSchema = new Schema<UserDocument>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

export const UserModel = model<UserDocument>("User", UserSchema);
```

In UserRepository, we can throw `InfrastructureError` and `DomainError`:

```typescript
//  NestJS
import { Injectable } from "@nestjs/common";
import { UserModel, UserDocument } from "./user.schema";
import { DomainError, InfrastructureError } from "../../common/errors";

@Injectable()
export class UserRepository {
  async findByEmail(email: string): Promise<UserDocument | null> {
    try {
      return await UserModel.findOne({ email }).exec();
    } catch (error) {
      throw new InfrastructureError("Failed to connect to database");
    }
  }

  async save(user: User): Promise<UserDocument> {
    try {
      const newUser = new UserModel(user);
      return await newUser.save();
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate key error
        throw new DomainError("Email already exists");
      }
      throw new InfrastructureError("Failed to save data to database");
    }
  }
}
```

## Interface-Adapter Layer (Controllers)

### Responsibilities

Handling HTTP requests and transforming errors into HTTP responses.

### Error Handling

- Use NestJS `@ExceptionFilter` to catch and transform domain or application errors into appropriate HTTP responses.
- Map custom exceptions (e.g., `DomainError`, `ApplicationError`) to HTTP status codes and error messages.

### Example

```typescript
//  NestJS
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";

@Catch()
export class GlobalErrorFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (exception instanceof DomainError) {
      response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: exception.message,
      });
    } else if (exception instanceof ApplicationError) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: exception.message,
      });
    } else {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Internal Server Error",
      });
    }
  }
}
```
