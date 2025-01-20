---
title: "Algorithms: Graph Traversal"
excerpt: ""
coverImage: "/blog/assets/algorithms-cover.jpg"
date: "2018-03-20"
ogImage:
  url: "/blog/assets/algorithms-cover.jpg"
categories: ["basic", "algorithm"]
pin: true
---

## Depth-First Search (DFS)

## Breadth-First Search (BFS)

Core:

- queue: first-come-first-served tool that ensures each level is processed in order.
- Level-by-level search

Example: Find a friend.

```
1 - 2 - 3
|    |
4    5

function bfs(graph: Map<number, number[]>, start: number): void {
  const queue: number[] = []; // Use a queue to store nodes to be processed
  const visited: Set<number> = new Set(); // Record nodes that have been visited

  queue.push(start); // Add the starting node to the queue
  visited.add(start); // Mark the starting node as visited

  while (queue.length > 0) {
    const current = queue.shift()!; // Remove the first node from the queue，! is non-null assertion operator

    // Get all neighbors of the current node
    for (const neighbor of graph.get(current) || []) {
      if (!visited.has(neighbor)) { // If the neighbor has not been visited
        queue.push(neighbor); // Add it to the queue
        visited.add(neighbor); // Mark it as visited
      }
    }
  }
}

// Example: Graph represented as an adjacency list
const graph = new Map([
  [1, [2, 4]], // Node 1 is connected to 2 and 4
  [2, [3, 5]], // Node 2 is connected to 3 and 5
  [3, []],     // Node 3 has no neighbors
  [4, []],     // Node 4 has no neighbors
  [5, []],     // Node 5 has no neighbors
]);

bfs(graph, 1); // Output order: 1, 2, 4, 3, 5


```
