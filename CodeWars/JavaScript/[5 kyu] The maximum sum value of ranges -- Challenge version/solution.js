function maxSum(array,ranges) {
  
    const cumulativeArray = array.reduce(function(accum, element) {
        if (accum.length > 0)
                  element += accum[accum.length - 1];
        accum.push( element);
        return accum;
    }, []);
    
    let max = -Infinity;
    cumulativeArray.unshift(0);
  
    for (let [rangeStart, rangeEnd] of ranges) {
            max = Math.max(max, cumulativeArray[rangeEnd+ 1] - 
                                cumulativeArray[rangeStart]);
    }
    return max;
  }
