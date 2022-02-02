/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    a_letters = [];
    b_letters = [];
    count = 0;

    for (let letter of A) {
        a_letters.push(letter);
    }
    for (let letter of B) {
        b_letters.push(letter);
    }

    for (let letter1 of a_letters) {
        for (let letter2 of b_letters) {
            if (letter1 === letter2)
                count ++;
        }
    
    }
    return count;
};

/* let test = howManyCommon('te', 'TTTER')
console.log(test) */