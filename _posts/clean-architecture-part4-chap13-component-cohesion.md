---
title: "Clean Architecture Part4. Chap13. Component Cohesion"
excerpt: ""
coverImage: "/blog/assets/clean-architecture-13-cover.jpg"
date: "2018-08-24"
ogImage:
  url: "/blog/assets/clean-architecture-13-cover.jpg"
categories: ["clean", "architecture"]
ping: true
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

## CRP: The Common Reuse Principle

Classes are seldom reused in isolation. More typically, reusable classes collaborate with other classes that are part of the reusable abstraction. The CRP states that these classes **belong together** in the same component. In such a component we would expect to see classes that have lots of dependencies on each other.

A simple example might be a container class and its associated iterators. These classes are reused together because they are tightly coupled to each other. Thus they ought to be in the same component.

```
The following are all built-in JavaScript iterators:

- The Array Iterator returned by Array.prototype.values(), Array.prototype.keys(), Array.prototype.entries(), Array.prototype[Symbol.iterator](), TypedArray.prototype.values(), TypedArray.prototype.keys(), TypedArray.prototype.entries(), TypedArray.prototype[Symbol.iterator](), and arguments[Symbol.iterator]().
- The String Iterator returned by String.prototype[Symbol.iterator]().
- The Map Iterator returned by Map.prototype.values(), Map.prototype.keys(), Map.prototype.entries(), and Map.prototype[Symbol.iterator]().
- The Set Iterator returned by Set.prototype.values(), Set.prototype.keys(), Set.prototype.entries(), and Set.prototype[Symbol.iterator]().
- The RegExp String Iterator returned by RegExp.prototype[Symbol.matchAll]() and String.prototype.matchAll().
- The Generator object returned by generator functions.
- The Segments Iterator returned by the [Symbol.iterator]() method of the Segments object returned by Intl.Segmenter.prototype.segment().
- The Iterator Helper returned by iterator helper methods such as Iterator.prototype.filter() and Iterator.prototype.map().
```

It also tells us which classes **not to keep together** in a component. 

When one component uses another, a dependency is created between the components. Perhaps the using component uses only one class within the used component—but that still doesn’t weaken the dependency. The using component still depends on the used component.Because of that dependency, every time the used component is changed, the using component will likely need corresponding changes. Even if no changes are necessary to the using component, it will likely still need to be **recompiled, revalidated, and redeployed**. This is true even if the using component doesn’t care about the change made in the used component.

Thus when we depend on a component, we want to make sure **we depend on every class in that component**. Put another way, we want to make sure that the classes that we put into a component are inseparable—that it is impossible to depend on some and not on the others.

 The CRP tells us more about which classes shouldn’t be together than about which classes should be together. The CRP says that classes that are not **tightly bound** to each other should not be in the same component.

### Relation to ISP

The CRP is the generic version of the ISP. 

The ISP advises us not to depend on **classes** that have **methods** we don’t use. 

The CRP advises us not to depend on **components** that have **classes** we don’t use.

SO, **don’t depend on things you don’t need**.

### The Tension Diagram for Component Cohesion

## Conclusion

