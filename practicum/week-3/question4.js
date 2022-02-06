/*
Given an array of integers, 
return true if the array contains any duplicates.
Your function should return true 
if any value appears at least twice 
in the array, 
and it should return false 
if every element is distinct.
 
Example:
 input: [19,1,1,23,23,4,3,23,1,2]
 output: true
*/

var hasDuplicates = function(input) {
    let val_in_array = [];
    
    for (let i = 0; i < input.length; i++) {
        let val = input[i];
				
        if (val_in_array.indexOf(val) !== -1) {
        	return true
        }
        val_in_array.push(val)
    }
    return false
};

/*console.log(hasDuplicates([19,1,23,4,3,2]))*/
