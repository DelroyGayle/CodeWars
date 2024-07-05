# [Longest sequence with zero sum](https://www.codewars.com/kata/52b4d1be990d6a2dac0002ab/)

## Description:

Write a method that takes an array of signed integers, and returns the longest contiguous subsequence of this array that has a total sum of elements of exactly 0.

If more than one equally long subsequence has a zero sum, return the one starting at the highest index.

```
For example:
maxZeroSequenceLength([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11]) should return
[92, -115, 17, 2, 2, 2], because this is the longest zero-sum sequence in the array.
```

## Sample Tests:
```
@test.describe("Example")
def test_group():
    @test.it("test case")
    def test_case():
        test.assert_equals(max_zero_sequence([1, 2, -3, 7, 8, -16]), [1, 2, -3])
        test.assert_equals(max_zero_sequence([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11]), [92, -115, 17, 2, 2, 2])
        test.assert_equals(max_zero_sequence([25, -35, 12, 6, 92, -115, 17, 2, 2, 2, -7, 2, -9, 16, 2, -11]), [92, -115, 17, 2, 2, 2])
```