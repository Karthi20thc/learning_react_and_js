//  slice method - we can use both on array and string.
const arr = [10, 20, 30, 40, 50];
const str = "hello";

const result = arr.slice(1, 4);

console.log(result); // [20, 30, 40]
console.log(arr);    // [10, 20, 30, 40, 50]

//slice: Extract a portion of an array.

// on arrays
console.log(arr.slice(0)) // [10, 20, 30, 40, 50]
console.log(arr.slice(1)) // [ 20, 30, 40, 50 ]
console.log(arr.slice(1, 2)) // [ 20 ]

console.log(arr.splice(1)) // [ 20, 30, 40, 50 ]

// on strings
console.log(str.slice(0)) // hello
console.log(str.slice(1)) // ello
//console.log(str.splice(1)) // can not operate



