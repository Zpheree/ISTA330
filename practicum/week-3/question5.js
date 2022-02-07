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
    let ascendOrder = A.sort((a,b) => a - b);
    console.log(ascendOrder);
    let descendOrder = A.sort((a,b) => b - a);
    console.log(descendOrder);
    if (A != ascendOrder && A != descendOrder) {
        return false;
    } else {
        return true;
    }
};

console.log([12,6,2,2,2,0]);