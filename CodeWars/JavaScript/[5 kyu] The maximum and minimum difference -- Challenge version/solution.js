/*
  Proof of Concept: Decorate & Sort
  No need to Undecorate

  That is, decorate arr1 with label 'A' and
           decorate arr2 with label 'B'
  EG: arr1:[1, 2] and arr2:[3, 4]
  ==>
  arr1: [ 'A', 1 ], [ 'A', 2 ], 
  arr2: [ 'B', 3 ], [ 'B', 4 ],
  
  Then combine both arrays and use Merge Sort to sort
  Although the sort is actually irrelevant; rather as a 'proof of concept' 
  I am using 'the divide and conquer approach' of mergesort
  to work out the least minimum value.
*/

let max;
let min;
let arr1_max_value, arr1_min_value;
let arr2_max_value, arr2_min_value;

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex][0] === right[rightIndex][0]) { // same label, same array
      if (left[leftIndex][1] <  right[rightIndex][1]) {
          merged.push(left[leftIndex]);
          leftIndex++;
      } else {
           merged.push(right[rightIndex]);
           rightIndex++;
      }
      continue;
    }

    // Different labels, hence two different arrays
    // Check for a lesser minimum difference
    let difference = Math.abs(left[leftIndex][1] -  right[rightIndex][1]);

    if (difference < min) {
      min = difference;
    }
    
    if (left[leftIndex][1] <  right[rightIndex][1]) {
          merged.push(left[leftIndex]);
          leftIndex++;
    } else {
           merged.push(right[rightIndex]);
           rightIndex++;
    }
  }
  
  for (let i = leftIndex; i < left.length; i++) {
    for (let j = 0; j < right.length; j++) {
      if (left[i][0] !== right[j][0]) {
        // Different labels, hence two different arrays
        // Check for a lesser minimum difference
        let difference = Math.abs(left[i][1] - right[j][1]);
        if (difference < min) {
            min = difference;
        }
      }
    }
  }
  
  // Whatever is left over, check for a smaller minimum difference
  for (let i = rightIndex; i < right.length; i++) {
    for (let j = 0; j < left.length; j++) {
      if (right[i][0] !== left[j][0]) {
        // Different labels, hence two different arrays
        // Check for a lesser minimum difference
        let difference = Math.abs(right[i][1] -  left[j][1]);

        if (difference < min) {
            min = difference;
        }
      }
    }
  } 

  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


function maxAndMin(arr1,arr2){
  max = Number.MIN_VALUE;
  min = Number.MAX_VALUE;
  arr1_min_value = arr2_min_value = Number.MAX_VALUE;
  arr1_max_value = arr2_max_value = Number.MIN_VALUE;
  const newarr = [];
  for (let i = 0; i < arr1.length; i++) {
    // Decorate with a 'A'
    newarr.push(['A', arr1[i]])

    // Determine arr1's largest value
    if (arr1[i] > arr1_max_value) {
        arr1_max_value = arr1[i];
    }

    // Determine arr1's smallest value
    if (arr1[i] < arr1_min_value) {
        arr1_min_value = arr1[i];
    }    
  }
  for (let i = 0; i < arr2.length; i++) {
    // Decorate with a 'B'
    newarr.push(['B', arr2[i]])
    
    // Determine arr2's largest value
    if (arr2[i] > arr2_max_value) {
        arr2_max_value = arr2[i];
    }

    // Determine arr2's smallest value    
    if (arr2[i] < arr2_min_value) {
        arr2_min_value = arr2[i];
    } 
  }  

  mergeSort(newarr);
  // Determine the greatest maximum difference
  let diff1 = arr1_max_value - arr2_min_value;
  let diff2 = arr2_max_value - arr1_min_value;
  max = Math.max(diff1, diff2);
  return [max, min];
}