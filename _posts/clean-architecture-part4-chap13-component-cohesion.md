---
title: "Clean Architecture Part4. Chap13. Component Cohesion"
excerpt: ""
coverImage: "/blog/assets/hello-world/cover.jpg"
date: "2018-08-24"
ogImage:
  url: "/blog/assets/hello-world/cover.jpg"
categories: ["clean"]
---

Which classes belong in which components? 

Here are three principles of component cohesion are:

## REP: The Reuse/Release Equivalence Principle

The classes and modules that are formed into a component must belong to **a cohesive group**.  There must be **some overarching theme or purpose** that those modules all share.

The granule of reuse is the granule of release.One of the oldest promises of the object-oriented model is software reuse.

Reuse/Release components' basic requirements:
- tracked through a **release process**
- are given **release numbers**

For:
- without release numbers, there would be no way to ensure that all the reused components are compatible with each other
- software developers need to know when new releases are coming, and which changes those new releases will bring
- the release process must produce the appropriate notifications and release documentation so that users can make informed decisions about when and whether to integrate the new release.

Weakness:
- It is hard to precisely explain the glue that holds the classes and modules together into a single component.
- The weakness of this principle is more than compensated for by the strength of the CCP and the CRP. In a negative sense.

## CCP: The Common Closure Principle

Gather together those things that change at the same times and for the same reasons. Separate those things that change at different times or for different reasons.

A component should not have multiple reasons to change.

For most applications, maintainability is more important than reusability. ` If the code in an application must change, you would rather that all of the changes occur in one component, rather than being distributed across many components.` If changes are confined to a single component, then we need to  `redeploy only the one changed` component. 

If two classes are so tightly bound, either physically or conceptually, that they always change together, then they belong in the same component.

## CRP: The Common Reuse Principle
