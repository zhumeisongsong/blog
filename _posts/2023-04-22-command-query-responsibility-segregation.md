---
title: "Command and Query Responsibility Segregation"
excerpt: ""
coverImage: "/blog/assets/hello-world/cover.jpg"
date: "2023-04-22"
ogImage:
  url: "/blog/assets/hello-world/cover.jpg"
---

## Benefits
- `Separation of concerns.` The model separates the read and write operations into separate models.
- `Scalability.` The read and write operations can be scaled independently.
- `Flexibility.` The model allows for the use of different data stores for read and write operations.
- `Performance.` The model allows for the use of different data stores optimized for read and write operations.

## In nest.js
Commands
- change the application state
- task-based, rather than data centric
- 


https://docs.nestjs.com/recipes/cqrs
