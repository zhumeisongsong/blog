---
title: "Large Scale System Architecture"
excerpt: ""
coverImage: "/blog/assets/large-scale-system-architecture-cover.jpg"
date: "2024-01-05"
ogImage:
  url: "/blog/assets/large-scale-system-architecture-cover.jpg"
categories: ["architecture"]
pin: true
---

## What Does a Software Architect Really Do

- Selecting a worthy challenge (aimed at creating value)
- Complicating simple matters in thought (managing risks and preparing for the future)
- Simplifying complex matters in action (delivering quality products while controlling costs)
- Articulating complexity in a simple manner (ensuring successful knowledge transfer)

## Application Core organization

### :cat2: Application Layer

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

**Core Concept: Application Services and/or Command Handlers**

contains:

- Use a repository to find one or several entities
- Tell those entities to do some domain logic
- Use the repository to persist the entities again, effectively saving the data changes

The Command Handlers can be used in two different ways:

- Contain the actual logic to perform the use case
- Can be used as mere wiring pieces in our architecture, receiving a Command and simply triggering logic that exists in an Application Service.

**Core Concept: Use Cases**

- Reusable business logics
- Are the processes in **Application Core**
- Can be triggered by by one or several **UIs (applications)**
- Are defined in the **Application Layer**
- Provided by DDD () and used by the Onion Architecture

### :cat2: Domain Layer

contains:

- The data
- The logic to manipulate that data

They are:

- Specific to the Domain itself
- Independent and completely unaware of the Application Layer
- Independent of the business processes that trigger this domain logic

**Core Concept: Domain Services**

It could: 

- Receiving a set of entities and performing some business logic on them
- Some domain logic that involves different entities and it does not belong in the entities themselves
- Can use other Domain Services and Domain Model objects
- Reusable in multiple Application Services
- Knows nothing about the classes in the Application Layer

**Core Concept: Domain Model**

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

![Hexagonal](/blog/assets/architecture/hex-pie.jpg)

## References

https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/
