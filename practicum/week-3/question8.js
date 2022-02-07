/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    for (let element of input) {
        var count = 0;
        input.forEach(i => (i === element && count++)); 
        if (element == count) {
            return element
        }
    }
    return -1
};

/*console.log(d_integer([3,5,3,9,6,45,86,9]))*/