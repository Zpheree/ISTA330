/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
	let arr = []

 	for (let i = 0; i < n; i++) {
  	let row = [1]

  	for (let x = 1; x < i; x++) {
      row.push(arr[i - 1][x - 1] + arr[i - 1][x])
    }

    if (i > 0) {
    	row.push(1)
    }

    arr.push(row)
  }
  return arr
};

/*console.log(PascalTriangle(5))*/