# [The maximum and minimum difference -- Challenge version](https://www.codewars.com/kata/583c592928a0c0449d000099/)

## Description:
Given two arrays of integers(arr1,arr2). Your task is to find a pair of numbers (an element in arr1, and another element in arr2), so that their difference is as big as possible (absolute value).
<br>
Then you should find a pair of numbers, so that their difference is as small as possible. 
<br>
Return the maximum and minimum difference values by an array: [  max difference,  min difference  ]

```
For example:

Given arr1 = [3,10,5], arr2 = [20,7,15,8]
should return [17,2] because 20 - 3 = 17, 10 - 8 = 2
```

## Note:

arr1 and arr2 contain only integers (positive, negative or 0);<br>
arr1 and arr2 may have different lengths, however they always have at least one element;<br>
All inputs are valid.<br>
**This is a challenge version, Please optimize your algorithm to avoid time out**

## About testcases

```
Basic test: 5 testcases
Random test1: 100 testcases, arr1 and arr2 contains 1-20 elements
Random test2: 300 testcases, arr1 and arr2 contains 10000 elements
```

## Some Examples
```
maxAndMin([3,10,5],[20,7,15,8]) === [17,2]
maxAndMin([3],[20]) === [17,17]
maxAndMin([3,10,5],[3,10,5]) === [7,0]
maxAndMin([1,2,3,4,5],[6,7,8,9,10]) === [9,1]
```

## My Approach

As a *Proof of Concept* I chose to use the *Merge Sort algorithm* which has a time complexity of *O(n log n)*.<br>
I *decorated* the sort beforehand by labelling *arr1* with 'A' and labelling *arr2* with 'B'.

```
  EG: arr1:[1, 2] and arr2:[3, 4]
  ==>
  arr1: [ 'A', 1 ], [ 'A', 2 ], 
  arr2: [ 'B', 3 ], [ 'B', 4 ],
```
The *Proof of Concept* was to use the *divide and conquer approach of mergesort* in order to produce the least minimum value.
