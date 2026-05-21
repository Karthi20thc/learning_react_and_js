// Array.prototype.some(): Checks if at least one element in the array passes the test. It returns true if it finds a passing element and stops iterating immediately (short-circuits on true). Otherwise, it returns false.

const solution = (arr) => {
    return arr.some((e) => e === 9)
}

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(solution(arr))