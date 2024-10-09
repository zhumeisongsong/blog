---
title: "Type vs Interface"
excerpt: ""
coverImage: "/blog/assets/type-interface-cover.jpg"
date: "2021-06-10"
ogImage:
  url: "/blog/assets/type-interface-cover.jpg"
---

### Type

**When to use**: use it by default.

### Interface

**When to use**: need to use `extends`; working with objects that `inherit` from each other.

**Limit**: can't express unions, mapped types, or conditional type; interfaces with the same name in the same scope merge their declarations, leading to unexpected bugs.

### TypeScript performance wiki recommends using interfaces for object inheritance.

```
type WithId = {
  id: string;
};

type User = WithId & {
  name: string;
};
```

This is perfectly fine code, but it's slightly less optimal. The reason is to do with the speed at which TypeScript can check your types.

### When two interfaces with the same name are declared in the same scope, they merge their declarations

We could add ESLint to your project and turn on the no-redeclare rule.

nx:

```
  {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@nx/typescript'],
      rules: {
        'no-redeclare': 'error',
      },
  }
```
