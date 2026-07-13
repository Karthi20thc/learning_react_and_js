let str = "hello";
str[0] = 'i';
console.log(str) //hello


const str = "hello";
str[0] = 'i';
console.log(str) //hello

// JavaScript strings are immutable, meaning their characters cannot be changed directly. Any modification creates a new string instead.

// solution - convert string to array

console.log(str.split("")) // [ 'h', 'e', 'l', 'l', 'o' ]
console.log({ ...str }) // { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }
console.log([...str]) // [ 'h', 'e', 'l', 'l', 'o' ]