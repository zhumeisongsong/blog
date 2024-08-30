# Chapter 6: Objects and Data Structures
There is a reason that we keep our variables private. We don’t want anyone else to depend on them. We want to keep the freedom to change their type or implementation on a whim or an impulse. Why, then, do so many programmers automatically add getters and setters to their objects, exposing their private variables as if they were public?

## Data Abstraction

## Data/Object Anti-Symmetry 数据/对象的反对称性

## The Law of Demeter 

## Data Transfer Objects

## Conclusion
`Objects` expose behavior and hide data.（对象暴露行为，隐数据。） This makes it easy to add new kinds of objects without changing existing behaviors. It also makes it hard to add new behaviors to existing objects. 
`Data structures` expose data and have no significant behavior.（数据结构暴露数据，没有明显的行为。） This makes it easy to add new behaviors to existing data structures but makes it hard to add new data structures to existing functions.
In any given system we will sometimes want `the flexibility to add new data types` , and so we prefer `objects` for that part of the system. Other times we will want `the flexibility to add new behaviors`, and so in that part of the system we prefer `data types and procedures`. Good software developers understand these issues without prejudice and choose the approach that is best for the job at hand.