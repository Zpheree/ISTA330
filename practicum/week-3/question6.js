/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    let current;
    let next;
     
    for (let i = 0; i < input.length; i++) {
        current = input[input];
        console.log(current)
        for (let x = i + 1; x < input.length; x++) {
            next = input[x];
            console.log(next)

            
        }
    }
};