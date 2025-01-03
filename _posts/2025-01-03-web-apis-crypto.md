---
title: "Crypto: randomUUID() Method"
excerpt: "Here are some key principles of clean code I usually follow. The examples are written in typescript."
coverImage: "/blog/assets/crypto-random-uuid-cover.jpg"
date: "2024-12-22"
ogImage:
  url: "/blog/assets/clean-code-cover.jpg"
categories: ["web-apis", "web-development", "basic"]
pin: true
---

The Web Crypto API is an interface allowing a script to use cryptographic primitives in order to build systems using cryptography.

The `randomUUID()` method of the [Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Crypto) interface is used to generate a v4 [UUID](https://developer.mozilla.org/en-US/docs/Glossary/UUID) using a cryptographically secure random number generator.

crypto.randomUUID() is primarily a **browser-based API**, available in modern web browsers. It is part of the Web Cryptography API, and its use is restricted to environments that support it, such as browsers.

However, it is **not available natively in Node.js (backend JavaScript environment)** without polyfills or external libraries.
