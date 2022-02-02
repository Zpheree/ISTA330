/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    
    let sortedInput = input.sort(function(a, b){a - b})
    len = sortedInput.length / 2

    if (len % 2 == 0) {
        x = input[len - 1]
        y = input[len]

        return (x + y) / 2
    } else {
        x = len - 0.5

        return input[x]
    }
};

/*let test = median([1,2,3,4,5,6,7,8])
console.log(test) */