---
title: "Clean Architecture Part4. Chap13. Component Cohesion"
excerpt: ""
coverImage: "/blog/assets/clean-architecture-13-cover.jpg"
date: "2019-06-27"
ogImage:
  url: "/blog/assets/clean-architecture-13-cover.jpg"
categories: ["clean"]
pin: true
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

The CCP prompts us to **gather together in one place all the classes that are likely to change for the same reasons**.
If two classes are so tightly bound, **either physically or conceptually**, that they always change together, then they belong in the same component. This minimizes the workload related to releasing, revalidating, and redeploying the software. 

This is the Single Responsibility Principle restated for components. Just as the SRP says that a class should not contain multiples reasons to change, so the Common Closure Principle (CCP) says that a component **should not have multiple reasons** to change.

For most applications, **maintainability** is more important than reusability.

If the code in an application must change, you would rather that all of the changes occur in one component, rather than being distributed across many components. **If changes are confined to a single component, then we need to redeploy only the one changed component.** Other components that don’t depend on the changed component do not need to be revalidated or redeployed.

This principle is closely associated with the Open Closed Principle (OCP). Indeed, it is “closure” in the OCP sense of the word that the CCP addresses. **The OCP states that classes should be closed for modification but open for extension**. Because 100% closure is not attainable, closure must be strategic. We design our classes such that they are closed to the most common kinds of changes that we expect or have experienced.

### Similarity With SRP

As stated earlier, the CCP is **the component form** of the SRP. 

The SRP tells us to separate methods into different classes, if they change for different reasons. 

The CCP tells us to separate classes into different components, if they change for different reasons.

Both principles can be summarized by the following sound bite:

Gather together those things that change at the same times and for the same reasons. Separate those things that change at different times or for different reasons.

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

## The Tension Diagram for Component Cohesion

The three cohesion principles tend to fight each other. 

The REP and CCP are **inclusive** principles: Both tend to make components larger. 

The CRP is an **exclusive** principle, driving components to be smaller. 

It is the tension between these principles that good architects seek to resolve.

![tension diagram](/blog/assets/clean-architecture/13-tension-diagram.png)

A good architect finds a position in that tension triangle that meets the current concerns of the development team, but is also aware that those concerns will change over time. 

For example, early in the development of a project, the CCP is much more important than the REP, because **develop-ability** is more important than **reuse**.

Generally, projects tend to start on the **right** hand side of the triangle, where the only sacrifice is reuse. As the project matures, and other projects begin to draw from it, the project will slide over to the **left**. This means that the component structure of a project can vary with time and maturity.

 It has more to do with the way that project is **developed and used**, than with what the project actually does.

## Conclusion

In choosing the classes to group together into components, we must consider the opposing forces involved in **reusability and develop-ability**.

Balancing these forces with the needs of the application is nontrivial. Moreover, the balance is almost always dynamic. That is, the partitioning that is appropriate today might not be appropriate next year. 

As a consequence, the composition of the components will likely jitter and evolve with time as the focus of the project changes from develop-ability to reusability.

## References

https://github.com/leewaiho/Clean-Architecture-zh/blob/master/docs/ch13.md
