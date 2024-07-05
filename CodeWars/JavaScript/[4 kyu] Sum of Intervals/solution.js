function sumIntervals(intervals) {
  
    const [sum, finalStart, finalEnd] = intervals.sort(compareFn)
                                                 .reduce(calculateSum, null);
    return sum + finalEnd - finalStart; 
  }
  
  // Sort the intervals in descending order
  function compareFn(interval1, interval2) {
    const [interval1_start, interval1_end] = interval1;
    const [interval2_start, interval2_end] = interval2;
    
    // Begin by sorting using the intervals' start values
    const diff = interval1_start - interval2_start;
    if (diff) {
      return diff;
    }
    
    // Followed by using
    return interval2_start - interval2_end;
  }
  
  function within(value, start, end) {
      // Is 'value' within the range of start ... end?
      return (start <= value && value <= end);
  }
  
  
  function calculateSum(accum, current, index, array) {
    // First iteration: set up accum
    if (index === 0) {
      return [0, array[index][0], array[index][1]];
    }
      
    let [sum, accum_start, accum_end] = accum;
    const [current_start, current_end] = current;
    
    // Check whether interval 'current' fits within interval 'accum'
    if (within(current_start, accum_start, accum_end) &&
             within(current_end, accum_start, accum_end)) {
                return [sum, accum_start, accum_end];
    }  
    
    // Check whether interval 'current' overlaps into interval 'accum'
    if (within(current_start, accum_start, accum_end)) {
                return [sum, accum_start, current_end];
    }
    
    // Otherwise update the sum and accum
    sum += accum_end - accum_start;
    accum_start = current_start;
    accum_end = current_end;
    return [sum, accum_start, accum_end]
  }