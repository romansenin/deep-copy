# deep-copy

This is a [script](./deepCopy.js) I had an inspiration to write that contains a deep copy function structure. Since the [`.slice()`](https://www.w3schools.com/jsref/jsref_slice_array.asp) method and the [`spread`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) operator copy only the first level, they are effective with reference types that contain only primitive values. This is an attempt to solve that (I realize I could acheive this with JSON.parse(JSON.stringify(object)) but decided to strike out on my own and get some practice 😁). One obvious limitation in this appraoch is call stack capacity (since I am using recursion), but for sufficiently non-complex reference structures (e.g. a trivial amount of nested arrays/objects), which should be the majority, this should be a good solution.

## Usage:

```js
const original = [[{ obj: { id: 1 } }], 2, 3];
const copy = makeCopy(original);

copy[0][0].obj.id = 2; // modify copy

console.log(copy[0][0].obj.id); // logs 2
console.log(original[0][0].obj.id); // logs 1
```
