/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    let type = 0;
  let i = 0;
  while (input[i] == input[i+1] && i < input.length){
    i++;
  }
  if (i == input.length) {
    return true;
  }
  if (input[i] < input[i+1]) {
    while (i < input.length) {
      if (input[i] > input[i+1]) {
        return false;
      }
      i++;
    }
  } else {
    while (i < input.length) {
      if (input[i] < input[i+1]) {
        return false;
      }
      i++;
    }
  }
  return true;
};

/*console.log([12,6,2,2,2,0]);*/