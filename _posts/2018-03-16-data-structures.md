---
title: "Master the Fundamentals of Data Structures"
excerpt: ""
coverImage: "/blog/assets/data-structures-cover.jpg"
date: "2018-03-16"
ogImage:
  url: "/blog/assets/data-structures-cover.jpg"
categories: ["basic", "data-structure"]
pin: true
---

## Array

### in-place

in-place algorithm is an algorithm that operates directly on the input data structure **without requiring extra space** proportional to the input size.

[Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) `splice(start, deleteCount, item1)`

## Set (ES6)

A Set is a collection of unique values. It ensures that no duplicate values are stored.

```
const set = new Set();

// Add values
set.add(1);
set.add(2);
set.add(2); // Duplicate, ignored

console.log(set); // Output: Set(2) { 1, 2 }

// Check for existence
console.log(set.has(1)); // true
console.log(set.has(3)); // false

// Remove a value
set.delete(1);
console.log(set); // Output: Set(1) { 2 }

// Iterate over a Set
for (const value of set) {
  console.log(value);
}

// Get size
console.log(set.size);

// Clear all values
set.clear();
```

## Map (ES6)

A Map is a collection of key-value pairs. Unlike objects, Map keys can be of any type (primitives, objects, functions, etc.).

```
const map = new Map();

// Add key-value pairs
map.set('name', 'Alice');
map.set(1, 'one');
map.set(true, 'yes');

// Access values by key
console.log(map.get('name')); // Alice
console.log(map.get(1)); // one

// Check for a key
console.log(map.has('name')); // true
console.log(map.has('age')); // false

// Get size
console.log(map.size);

// Delete a key-value pair
map.delete(1);

// Iterate over a Map
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// Clear all entries
map.clear();
```

## Linked List

## Stack

## Queue

## Tree Graph

## Hash Table

## Heap

## Trie
