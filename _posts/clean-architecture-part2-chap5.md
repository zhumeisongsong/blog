---
title: "Clean Architecture Part2. Chap5. Object-Oriented Programming"
excerpt: ""
coverImage: "/blog/assets/hello-world/cover.jpg"
date: "2019-05-15"
ogImage:
  url: "/blog/assets/hello-world/cover.jpg"
categories: ["clean"]
---

The basis of a good architecture is the understanding and application of the principles of object-oriented design (OO).

## Encapsulation 封装

## Inheritance 继承

## Polymorphism 多态

The UNIX operating system requires that every `IO device driver` provide five standard functions:5 `open`, `close`, `read`, `write`, and `seek`. The signatures of those functions must be identical for every IO driver.

The `FILE` data structure contains five pointers to functions. In our example, it might look like this:

```
struct FILE {
  void (*open)(char* name, int mode);
  void (*close)();
  int (*read)();
  void (*write)(char);
  void (*seek)(long index, int mode);
};
```

The IO driver for the console will define those functions and load up a `FILE` data structure with their addresses—something like this:

```
#include "file.h"

void open(char* name, int mode) {/*...*/}
void close() {/*...*/};
int read() {int c;/*...*/ return c;}
void write(char c) {/*...*/}
void seek(long index, int mode) {/*...*/}

struct FILE console = {open, close, read, write, seek};
```

`Getchar()` simply calls the function pointed to by the read pointer of the FILE data structure pointed to by STDIN.

```
extern struct FILE* STDIN;

int getchar() {
  return STDIN->read();
}
```

This simple trick is the basis for all polymorphism in OO. 

The bottom line is that polymorphism is **an application of pointers to functions**. The problem with explicitly using pointers to functions to create polymorphic behavior is that pointers to functions are dangerous. OO imposes discipline on **indirect transfer of control**.

### The Power of Polymorphism

### Dependency Inversion

## Conclusion

OO is the ability, through the use of polymorphism, to gain **absolute control over every source code dependency** in the system.

It allows the architect to create a plugin architecture：

- In **which modules that Contain high-level policies** are independent of **modules that contain low-level details**.
- **The low-level details** are relegated to plugin modules that can be deployed and developed **independently** from **the modules that contain high-level policies**.

## References

https://github.com/leewaiho/Clean-Architecture-zh/blob/master/docs/ch5.md
