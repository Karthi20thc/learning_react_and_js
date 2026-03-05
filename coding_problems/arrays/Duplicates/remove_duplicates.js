const arr = [1, 2, 2, 3, 4, 4, 5];

const unique = [];

for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (isDuplicate === false) {
        // unique[unique.length] = arr[i]; // manual push
        unique.push(arr[i])
    }
}

console.log(unique); // [1, 2, 3, 4, 5]
