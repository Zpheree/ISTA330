/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    result = [];
    
    for (let element of input) {
        count = 0;
        i = 1;
        
        while (i < input.length) {
            if (input[i - 1] > element) {
                if (input[i - 1] % 2 == 0) {
                    count++;
                }
            result.push(count)
            }
            i++;
        }
    }
    return result
};

/*let test = biggerAndEven([23, 44, 12, 4])
console.log(test)*/