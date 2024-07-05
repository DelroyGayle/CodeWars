function maxSum(arr,range){
  
    let max = -Infinity;
   
    for (let [a, b] of range) {
      // Generate the range
      const entire_range = Array(b - a + 1).fill(a).map((x, y) => x + y);
      let sum = 0;
      for (let index of entire_range) {
         sum += arr[index];
      }
      max = Math.max(max, sum);
    }
     return max;
   }
