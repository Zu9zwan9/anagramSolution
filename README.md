# anagram-solver

Checks whether two strings are anagrams of each other. Case-insensitive, no dependencies.

```bash
node index.js listen silent   # true
node index.js brake BAKER     # true
```

```js
const { anagramCheck } = require('./index.js');
anagramCheck('Dusty', 'study'); // true
```

## How it works

It counts each character in both strings and compares the counts. That's O(n) time, versus O(n log n) for the sort-and-compare approach. Spaces and punctuation count as characters, so `"a b"` and `"ab "` match but `"ab!"` and `"abc"` don't.

## Tests

```bash
npm test
```

The tests use Node's built-in runner (`node:test`). They cover case folding, length mismatch, repeated letters, empty input and non-letter characters.
