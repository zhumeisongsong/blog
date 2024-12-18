---
title: "Events vs Commands, What's the Difference?"
excerpt: ""
coverImage: "/blog/assets/events-commands-cover.jpg"
date: "2024-02-27"
ogImage:
  url: "/blog/assets/events-commands-cover.jpg"
categories: ["basic"]
pin: true
---

![alt text](/blog/assets/commands-events/image.png)

| Characteristic       | Command                                            | Event                                                   |
| -------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| Definition           | A **request** to the system to perform an action   | A **notification** that an action has occurred          |
| Behavior             | Initiates action, must be handled, can fail        | Notifies outcome, may or may not be handled             |
| Temporal Aspect      | Future-oriented, indicates something should happen | Past-oriented, indicates something has already happened |
| Initiator and Target | Clear initiator, one-to-one relationship           | Implicit initiator, one-to-many relationship            |
| Design Purpose       | To change the system’s state                       | To inform that the system’s state has changed           |
| Idempotency          | Typically not idempotent                           | Typically idempotent                                    |

## What do the words mean?

![alt text](/blog/assets/commands-events/image-1.png)

## When do they happen?

![alt text](/blog/assets/commands-events/image-2.png)

![alt text](/blog/assets/commands-events/image-3.png)

## Who are they for?

![alt text](/blog/assets/commands-events/image-4.png)

## Direction of control and dependency

![alt text](/blog/assets/commands-events/image-5.png)

## Example third party provider

![alt text](/blog/assets/commands-events/image-6.png)

## References

https://www.youtube.com/watch?v=vS7sCJ1uezY
