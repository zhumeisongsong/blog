---
title: "Large Scale System Architecture"
excerpt: ""
coverImage: "/blog/assets/hello-world/cover.jpg"
date: "2024-01-05"
ogImage:
  url: "/blog/assets/hello-world/cover.jpg"
categories: ["architecture"]
pin: true
---

## Application Core organization

### Application Layer

Contain:

- **Application Services** (and their interfaces)
- The **Ports** & **Adapters** (and ORM interfaces, search engines interfaces, messaging interfaces etc.)
- The respective Handlers for the Commands and Queries belong when using **CQRS**
- The triggering of Application Events which represent some outcome of a use case, side effect of a use case: 
    - sending emails
    - notifying a 3rd party API
    - sending a push notification
    - starting another use case that belongs to a different component of the application
    - show popup layout (front-end)
    - redirect to another page (front-end)

#### Application Services and/or Command Handlers 

contains:

- Use a repository to find one or several entities
- Tell those entities to do some domain logic
- Use the repository to persist the entities again, effectively saving the data changes

The Command Handlers can be used in two different ways:

- Contain the actual logic to perform the use case
- Can be used as mere wiring pieces in our architecture, receiving a Command and simply triggering logic that exists in an Application Service.

#### Use Cases

- Reusable business logics
- Are the processes in **Application Core**
- Can be triggered by by one or several **UIs (applications)**
- Are defined in the **Application Layer**
- Provided by DDD () and used by the Onion Architecture

### Domain Layer

contains:

- The data
- The logic to manipulate that data

They are:

- Specific to the Domain itself
- Independent and completely unaware of the Application Layer
- Independent of the business processes that trigger this domain logic

#### Domain Services

#### Domain Model

In the very center, depending on nothing outside it. 

Contains:

- Business objects that represent something in the domain
  - Entities
  - Value Objects (like taskExecutionStatus, address etc.)
  - Enums (like gender etc.)
  - Any objects used in the Domain Model
- Domain Events
  - When an entity changes, a Domain Event is triggered
  - Carry those changes with
  - To be used in Event Sourcing

## References

https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/
