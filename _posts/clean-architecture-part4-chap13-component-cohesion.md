---
title: "Clean Architecture Part4. Chap13. COMPONENT COHESION"
excerpt: ""
coverImage: "/blog/assets/hello-world/cover.jpg"
date: "2018-08-24"
ogImage:
  url: "/blog/assets/hello-world/cover.jpg"
---

Which classes belong in which components? The three principles of component cohesion are:

## REP: The Reuse/Release Equivalence Principle

The granule of reuse is the granule of release.

`software reuse—a fulfillment of one of the oldest promises of the object-oriented model.`

Reuse/Release components' basic requirements:
- tracked through a `release process`
- are given `release numbers`
-  `when` new releases are coming
- `which changes` those new releases will bring
-  produce the appropriate notifications and release documentation

The classes and modules that are formed into a component must belong to `a cohesive group`. There must be `some overarching theme or purpose` that those modules all share.

The advice is weak because it is `hard to precisely explain` the glue that holds the classes and modules together into a single component.

## CCP: The Common Closure Principle

Gather together those things that change at the same times and for the same reasons. Separate those things that change at different times or for different reasons.

A component should not have multiple reasons to change.

For most applications, maintainability is more important than reusability. ` If the code in an application must change, you would rather that all of the changes occur in one component, rather than being distributed across many components.` If changes are confined to a single component, then we need to  `redeploy only the one changed` component. 

If two classes are so tightly bound, either physically or conceptually, that they always change together, then they belong in the same component.

## CRP: The Common Reuse Principle
