const solution = (arr) => {
    let largest = 0;

    for (let e of arr) {
        if (e > largest) {
            largest = e
        }
    }

    return largest;

}

// find the largest
const arr = [10, 5, 20, 8, 15];
console.log(solution(arr))