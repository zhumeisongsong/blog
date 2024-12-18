---
title: "Key Principles of Clean Code"
excerpt: "Here are some key principles of clean code I usually follow. The examples are written in typescript."
coverImage: "/blog/assets/clean-code-cover.jpg"
date: "2024-12-22"
ogImage:
  url: "/blog/assets/clean-code-cover.jpg"
categories: ["clean"]
pin: true
---

[Atrae Engineers Advent Calendar 2024](https://adventar.org/calendars/10486) (22nd)

In software development, clean code is a set of principles that guide the creation of code that is easy to understand, maintain, and modify.

`Good software systems begin with clean code.` On the one hand, if the bricks aren’t well made, the architecture of the building doesn’t matter much. On the other hand, you can make a substantial mess with well-made bricks. This is where the SOLID principles come in.

Here are some key principles of clean code I usually follow.

The examples are written in typescript.

## Meaningful Naming

Use descriptive and clear names for variables, functions, and classes.

✅ Good:

```typescript
const totalAmount = 150;
function getUserProfile(userId: string): UserProfile { ... }
```

❌ Bad:

```typescript
const x = 150;
function getData(id: string) { ... }
```

## Avoid Magic Numbers and Strings

Use constants instead of hard-coded values.

✅ Good:

```typescript
const MAX_LOGIN_ATTEMPTS = 5;

if (attempts > MAX_LOGIN_ATTEMPTS) {
  lockAccount();
}
```

❌ Bad:

```typescript
if (attempts > 5) {
  lockAccount();
}
```

## Function and Class Size

Keep functions and classes small. Each should do one thing well.

✅ Good:

```typescript
function calculateTotal(cartItems: Item[]): number {
  return cartItems.reduce((total, item) => total + item.price, 0);
}

function checkStock(item: Item): boolean {
  return item.stock > 0;
}

function sendInvoice(total: number): void {
  console.log(`Invoice sent for ${total} dollars.`);
}

function processOrder(cartItems: Item[], user: User): void {
  const total = calculateTotal(cartItems);
  if (checkStock(cartItems)) {
    sendInvoice(total);
  }
}
```

❌ Bad:

```typescript
function processOrder(cartItems: Item[], user: User): void {
  // Calculate total
  // check stock
  // send invoice
  //etc. (too many tasks in one function)
}
```

## Single Responsibility Principle (SRP)

A class or function should have only one reason to change.

✅ Good:

- Order: Handles only order data and total calculation.
- OrderRepository: Handles saving orders to the database.
- OrderMailer: Handles sending emails.

```typescript
// Class to represent an order
class Order {
  items: string[];
  totalAmount: number;

  constructor(items: string[], totalAmount: number) {
    this.items = items;
    this.totalAmount = totalAmount;
  }

  calculateTotal(): number {
    return this.totalAmount;
  }
}

// Class to handle saving orders to the database
class OrderRepository {
  save(order: Order): void {
    console.log("Order saved to database.");
  }
}

// Class to handle sending order confirmation emails
class OrderMailer {
  sendConfirmation(order: Order): void {
    console.log("Order confirmation email sent.");
  }
}

// Usage
const order = new Order(["item1", "item2"], 100);
const repository = new OrderRepository();
const mailer = new OrderMailer();

repository.save(order);
mailer.sendConfirmation(order);
```

❌ Bad:

```typescript
class Order {
  items: string[];
  totalAmount: number;

  constructor(items: string[], totalAmount: number) {
    this.items = items;
    this.totalAmount = totalAmount;
  }

  calculateTotal(): number {
    // Calculate the total amount
    return this.totalAmount;
  }

  saveToDatabase(): void {
    // Save the order to the database
    console.log("Order saved to database.");
  }

  sendOrderConfirmationEmail(): void {
    // Send a confirmation email
    console.log("Order confirmation email sent.");
  }
}
```

## Avoid Deep Nesting

Refactor deeply nested code for clarity.

✅ Good:

```typescript
if (!user) return;
if (!user.isActive) return;

sendEmail(user.email);
```

❌ Bad:

```typescript
if (user) {
  if (user.isActive) {
    sendEmail(user.email);
  }
}
```

## DRY (Don't Repeat Yourself)

Avoid duplicating code; create reusable functions.

✅ Good:

```typescript
const TAX_RATE = 0.1;

function calculateTax(amount: number): number {
  return amount * TAX_RATE;
}
```

❌ Bad:

```typescript
function calculateProductTax(amount: number): number {
  return amount * 0.1;
}

function calculateServiceTax(amount: number): number {
  return amount * 0.1;
}
```

## Immutability

Prefer immutability for data structures where possible.

✅ Good:

```typescript
const user = { ...oldUser, isActive: true };
```

❌ Bad:

```typescript
oldUser.isActive = true;
```

## Comment with Purpose

Comments should explain "why," not "what." Avoid redundant comments.

✅ Good:

```typescript
// Check if the user has a valid subscription before allowing access
if (user.hasActiveSubscription) { ... }
```

❌ Bad:

```typescript
// Check if user.hasActiveSubscription is true
if (user.hasActiveSubscription) { ... }
```

## KISS (Keep It Simple, Stupid)

Strive for simplicity in your code. Avoid unnecessary complexity.

✅ Good:

```typescript
function isEligibleForDiscount(user: User): boolean {
  return user.purchases >= 5;
}
```

❌ Bad:

```typescript
function isEligibleForDiscount(user: User): boolean {
  if (user.purchases >= 5) {
    return true;
  } else {
    return false;
  }
}
```

## Favor Composition Over Inheritance

Instead of creating deep inheritance hierarchies, compose behavior by combining smaller, reusable components.

✅ Good:

```typescript
class Engine {
  start(): void {
    console.log("Engine started");
  }
}

class Car {
  constructor(private engine: Engine) {}

  drive(): void {
    this.engine.start();
    console.log("Car is driving");
  }
}

const engine = new Engine();
const car = new Car(engine);
car.drive();
```

❌ Bad:

```typescript
class Vehicle {
  start(): void {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  drive(): void {
    this.start();
    console.log("Car is driving");
  }
}
```

## Avoid Side Effects

Functions should avoid changing external states or variables unless absolutely necessary. Aim for pure functions that depend only on their inputs and return consistent outputs.

✅ Good:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

❌ Bad:

```typescript
let total = 0;
function addToTotal(amount: number): void {
  total += amount;
}
```

## Least Surprise

Code should behave in a way that matches the expectations of other developers. Avoid unexpected behavior or unconventional practices.

✅ Good:

```typescript
const isUserActive = user.isActive();
```

❌ Bad:

```typescript
const isUserActive = checkIfUserIsDead(); // Misleading name
```

## Encapsulate Conditionals

Replace complex conditional logic with clear functions that express the intent of the condition.

✅ Good:

```typescript
function isEligibleForDiscount(user: User): boolean {
  return user.hasMembership && user.purchases >= 5;
}

if (isEligibleForDiscount(user)) {
  applyDiscount();
}
```

❌ Bad:

```typescript
if (user.hasMembership && user.purchases >= 5) {
  applyDiscount();
}
```

## Avoid Boolean Flags in Function Parameters

Boolean flags often indicate that a function is trying to do multiple things, violating the Single Responsibility Principle.

✅ Good:

```typescript
function sendEmail(email: string): void {
  console.log(`Sending email to ${email}`);
}

function sendSms(phoneNumber: string): void {
  console.log(`Sending SMS to ${phoneNumber}`);
}
```

❌ Bad:

```typescript
function sendNotification(contact: string, isEmail: boolean): void {
  if (isEmail) {
    console.log(`Sending email to ${contact}`);
  } else {
    console.log(`Sending SMS to ${contact}`);
  }
}
```

Above are the principles of clean code that I usually follow. These principles are applicable not only in TypeScript, any programming language can apply these principles.

I am still in the process of updating my own practices. Keep refining your practices, and happy coding! 🚀
