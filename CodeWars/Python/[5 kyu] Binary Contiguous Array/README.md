# [Binary Contiguous Array](https://www.codewars.com/kata/60aa29e3639df90049ddf73d)

## Description:

An array consisting of 0s and 1s, called a binary array, is given as an input.

Task
Find the length of the longest contiguous subarray which consists of equal numbers of 0s and 1s.

Example
```
s = [1,1,0,1,1,0,1,1]
         |_____|
            |
         [0,1,1,0]

         length = 4
Note
0 <= length(array) < 120 000
```

## Sample Tests:
```
describe("Fixed Test Cases", () => {
  function test([input, output], number) {
    it(`Test-${number + 1}`, () => {
      assert.strictEqual(binarray(input), output);
    });
  }
  
  [[[0,1], 2],
   [[0], 0],
   [[1,1,0,1,1,0,1,1], 4],
   [[0,1,1,0,1,1,1,0,0,0], 10],
   [[0,0,1,1,1,0,0,0,0,0], 6]].forEach(test);
});
```