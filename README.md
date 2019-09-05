# deep-copy

This is a [script](./deepCopy.js) I had an inspiration to write that contains a deep copy function structure. Since the [`.slice()`]() method and the [`spread`]() operator copy only the first level, they are effective with reference types that contain only primitive values. This is an attempt to solve that (I am aware of the JSON.parse() method but decided to re-invent the wheel so to speak). One obvious limitation in this appraoch is call stack capacity (since I am using recursion), but for sufficiently non-complex reference structures (e.g. a trivial amount of nested arrays/objects) this should be a good solution.

## Usage:
```js
const original = [[{ obj: { id: 1 } }], 2, 3];
const copy = makeCopy(original);

copy[0][0].obj.id = 2; // modify copy

console.log(copy[0][0].obj.id); // logs 2
console.log(original[0][0].obj.id); // logs 1
```

