/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
        let x = Math.max.apply(Math, input);
        let index = input.indexOf(x);

        if (index > -1) {
                input.splice(index, 1);
        }

        for (let element of input) {
                if (x > (element * 2)) {
                        continue
                } else {
                        return false
                }
        }
        return true
};

/*let test = largestNumberIsAtLeastTwice([3,2,1,5])
console.log(test)*/