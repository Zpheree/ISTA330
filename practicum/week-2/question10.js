/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var digits = (""+n).split("");

    max_val = Math.max(...digits)
    min_val = Math.min(...digits)

return max_val - min_val
};

let test = maxMinusMin(472)
console.log(test)