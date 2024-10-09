---
title: "React Performance Optimization: Debounce, Throttle Optimization for Frequently Triggered Callbacks"
excerpt: ""
coverImage: "/blog/assets/hello-world/cover.jpg"
date: "2020-07-01"
ogImage:
  url: "/blog/assets/hello-world/cover.jpg"
categories: ['react']
pin: true
---

In the search component, the search callback is triggered when the content in the input is modified.
When the component can process the search results quickly, the user does not feel the input delay.
However, in the actual scenario, the list page of the middle and backend application is very complex, and the component's Render on the search result will cause the page to lag, which obviously affects the user's input experience.

## The [useDebounce](https://github.com/xnimorz/use-debounce#simple-values-debouncing) + useEffect approach is generally used in search scenarios to get data.

Example reference: [debounce-search](https://codesandbox.io/s/debounce-search-btuyxd)

```
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

import "./styles.css";

export default function App() {
  const [text, setText] = useState("Hello");
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    // search api
  }, [debouncedValue]);

  return (
    <div>
      <input
        defaultValue={"Hello"}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>Actual value: {text}</p>
      <p>Debounce value: {debouncedValue}</p>
    </div>
  );
}
```

## Why is `debounce` used in the search scenario instead of `throttle`?

throttle is a special scenario of debounce, throttle gives `maxWait parameter` to debounce, see `useThrottleCallback`.

debounce is more suitable to be used in the `search scenario`, which only needs to `respond to the last input of the user`, not to the intermediate input of the user.

And throttle is more suitable for scenarios that require real-time response to the user:

- resizing by dragging and dropping
- zooming in and out by dragging and dropping
- e.g. window's resize event...

In the scenario of real time user response, if the callback time is small, you can even use `requestAnimationFrame` instead of throttle.
