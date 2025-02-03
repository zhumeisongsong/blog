---
title: "Crypto: randomUUID() Method"
excerpt: ""
coverImage: "/blog/assets/crypto-random-uuid-cover.jpg"
date: "2025-01-03"
ogImage:
  url: "/blog/assets/crypto-random-uuid-cover.jpg"
categories: ["web-apis", "web-development", "basic"]
pin: true
---

The Web Crypto API is an interface allowing a script to use cryptographic primitives in order to build systems using cryptography.

The `randomUUID()` method of the [Crypto](https://developer.mozilla.org/en-US/docs/Web/API/Crypto) interface is used to generate a v4 [UUID](https://developer.mozilla.org/en-US/docs/Glossary/UUID) using a cryptographically secure random number generator.

crypto.randomUUID() is primarily a **browser-based API**, available in modern web browsers. It is part of the Web Cryptography API, and its use is restricted to environments that support it, such as browsers.

~~However, it is **not available natively in Node.js (backend JavaScript environment)** without polyfills or external libraries.~~

Nodejs v14.17.0+ supports `crypto.randomUUID()` natively.

```
const crypto = require('crypto');
const uuid = crypto.randomUUID();
console.log(uuid);
```
