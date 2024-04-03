# Type vs Interface


| TH | when to use | limit | TH | TH |
| ---- | ---- | ---- | ---- | ---- |
| type | use it by default | no | TD | TD |
| interface | need to use `extends`; working with objects that `inherit` from each other;| can't express unions, mapped types, or conditional type; Interfaces with the same name in the same scope merge their declarations, leading to unexpected bugs; | TD | TD |


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
````
  {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@nx/typescript'],
      rules: {
        'no-redeclare': 'error',
      },
    },
````
 