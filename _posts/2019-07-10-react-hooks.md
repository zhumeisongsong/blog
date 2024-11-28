---
title: React Hooks Principles
excerpt: ""
coverImage: "/blog/assets/react-hooks-cover.jpg"
date: "2019-12-25"
ogImage:
  url: "/blog/assets/react-hooks-cover.jpg"
categories: ["react"]
pin: true
---

React hooks are a new feature introduced in React 16.8. They allow you to use state and other React features without writing a class.

The principles of hooks are based on `closures` and `state management`.

Below are the core principles of Hooks:

## Re-rendering of Function Components

Every time the components are re-rendered,  React sequentially invokes Hooks in the order they are called in the component code.



## Store Hook State

React uses a global array or linked list structure to store the state of each component (e.g., the state managed by useState or useReducer). During every render, React maintains a pointer to the Hook storage corresponding to the current component.

Since function components are pure functions, React relies on the order of Hook calls to maintain their correctness.

## Closures' Characteristics

Such as `useState` and `useEffect`, leverage JavaScript's closures' characteristics to retain state within the function's context. On each render, Hooks create new closures, but they can still access the state variables from the previous render. (async)

## Lazy computations

Some Hooks (e.g., `useMemo` and `useCallback`) use caching to avoid unnecessary computations. React re-calculates/creates a new object/function only when the dependencies change.
