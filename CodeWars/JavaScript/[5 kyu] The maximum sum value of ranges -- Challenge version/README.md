# [The maximum sum value of ranges -- Challenge version](https://www.codewars.com/kata/the-maximum-sum-value-of-ranges-challenge-version/)

## Description

Given a list of integers *A*, for each pair of integers (first, last) in list ranges, calculate the sum of the values in *A* between indices first and last (both inclusive), and return the greatest resulting sum.

## Example

```
A = [1, -2, 3, 4, -5, -4, 3, 2, 1]
ranges = [(1, 3), (0, 4), (6, 8)]

result = 6

For ranges[0] = (1, 3) the sum is A[1] + A[2] + A[3] = 5
For ranges[1] = (0, 4) the sum is A[0] + A[1] + A[2] + A[3] + A[4] = 1
For ranges[2] = (6, 8) the sum is A[6] + A[7] + A[8] = 6
The greatest sum is 6
```

## Notes

The list of ranges will never be empty;<br>
This is a challenge version, **you should implement an efficient algorithm to avoid timing out;**<br>

## About random testcases

<br>
Small tests: 100 testcases<br>
each integers-list : 5-100 elements<br>
each ranges-list : 1-6 elements<br>

<br>
Big tests: 100 testcases<br>
each integers-list : 100000 elements<br>
each ranges-list : 10000 elements<br>
