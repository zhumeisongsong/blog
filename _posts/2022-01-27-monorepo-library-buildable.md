---
title: "Should a Library in a Monorepo Be Buildable or Not?"
excerpt: ""
coverImage: "/blog/assets/monorepo-library-buildable-cover.jpg"
date: "2022-01-27"
ogImage:
  url: "/blog/assets/monorepo-library-buildable-cover.jpg"
categories: ["monorepo", "architecture"]
pin: true
---

## Advantages of Buildable Libraries

### Improved Build Efficiency

Each library can be built independently, leveraging caching or incremental build mechanisms (e.g., Nx or Bazel), avoiding the need to rebuild the entire project. This is especially helpful for large monorepos.

### Clear Dependency Management

Built libraries generate explicit outputs (e.g., .js files or .d.ts files). Downstream modules depend only on the build artifacts rather than the source code, reducing the risk of tight coupling.

### Independence and Reusability

Buildable libraries are easier to publish as npm packages, facilitating reuse in other projects or teams.

Clear interfaces (e.g., TypeScript types) promote better maintenance of boundaries between modules.

### Simplified CI/CD

Each library can have its own tests and be published independently, making CI/CD pipelines more efficient.

## Disadvantages of Buildable Libraries

### Increased Initial Complexity

Each library requires its own build tool configuration (e.g., vite, webpack, or tsc), potentially increasing maintenance overhead.

More build scripts to manage and debug.

I think in nx it's OK.

### Potential Redundancy

If multiple modules depend on the same buildable library, duplicate build artifacts might be generated, increasing build time and package size.

### Reduced Development Experience

Frequent manual builds of libraries for other modules to use can degrade the development experience.

Additional management of build caches and dependency updates is required.

## Advantages of Non-Buildable Libraries

### Simpler Setup

Libraries don’t require independent build configurations or toolchains, reducing project complexity.
Developers can directly reference source code without waiting for build outputs to update.

### Faster Iteration During Development

When modules change frequently and are tightly coupled, non-buildable libraries are more convenient.
Debugging is more straightforward because there is no build step, and changes take effect immediately.

### Avoiding Redundant Build Artifacts

All code is bundled together only at the application level, reducing duplicate dependencies and build time.

## Disadvantages of Non-Buildable Libraries

### Build Efficiency Issues

In large monorepos, every change may trigger a rebuild of the entire dependency chain, significantly increasing build time.

### Increased Dependency Coupling

Non-buildable libraries often rely on direct source code references, creating tighter coupling between modules and making maintenance and debugging harder.

### Limited Publishing Capabilities

Non-buildable libraries cannot be easily published to npm or shared outside the monorepo.

## Recommendations

**When to Choose Buildable Libraries**

The project is large, and dependencies between modules are complex.

The library needs to be published to npm or reused across multiple projects.

Incremental builds or caching are necessary for improving build efficiency.

Strict management of module interfaces and dependencies is required.

**When to Choose Non-Buildable Libraries**

The project is small, and build times are acceptable.

The library is primarily used within the monorepo and doesn’t need to be published separately.

Modules frequently interact during development, so prioritizing development speed over build efficiency makes sense.

**A Hybrid Strategy**

In many cases, a mixed approach can combine the strengths of both:

- Set core or highly reusable libraries (e.g., utility libraries, foundational components) as buildable to facilitate publishing and independent builds.
- Keep project-specific or frequently-changing modules non-buildable to reduce development complexity.

If you are using Nx, it provides robust support for both buildable and non-buildable libraries, making it easy to switch as needed.
