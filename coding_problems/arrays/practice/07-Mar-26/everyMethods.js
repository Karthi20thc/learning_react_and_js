// Array.prototype.every(): Checks if all elements in the array pass the test. It returns false if it finds a failing element and stops iterating immediately (short-circuits on false). Otherwise, it returns true

const solution = (arr) => {
    return arr.every((e) => e === 4)
}

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(solution(arr))