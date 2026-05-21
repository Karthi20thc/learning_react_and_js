const solution = (arr) => {
    // return new Set(arr) // Set(5) { 1, 2, 3, 4, 5 }

    return [...new Set(arr)]
}

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(solution(arr))