/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
    var newArray = [];
    for(var i = 0; i < M.length + 1; i++) {
        newArray.push([]);
    }

    for(var i = 0; i < M.length; i++) {
        for(var j = 0; j < M.length + 1; j++) {
            newArray[j].push(M[i][j]);
        }
    }
    return newArray;  
};

console.log(transpose([[1,2,3],[4,5,6]]))