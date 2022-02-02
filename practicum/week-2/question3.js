/*
An array of integers, input, is given.
A pair (i, j) is called an ordered pair if input[i] < input[j] and i < j.
Return the number of ordered pairs.
Example:
input: [4, 2, 6, 9]
output: 5
There are 5 ordered pairs: (4, 6), (4, 9), (2, 6), (2, 9), (6, 9)
*/

var numberOfOrderedPairs = function(input) {
    let result = 0;
    let temp = [];
    
    for (let element of input) {
        let i = 1;
        while (i < input.length) {
            if (element < input[i]) {
                temp.push(element, input[i]);
            }
            i++;
        }
    }
    
    return temp.length / 2
};

/* let test = numberOfOrderedPairs([4,2,6,9])
console.log(test) */