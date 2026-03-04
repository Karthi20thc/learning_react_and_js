// Forward looping -1
for (let char of str) {
    console.log(char)
}

// Forward looping -2

for (let i = 0; i < str.length - 1; i++) {
    console.log(str[i])
}


// reverse looping 
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}