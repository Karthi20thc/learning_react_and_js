const solution = (arr) => {

    let smallest = Infinity;

    for (let e of arr) {
        if (smallest > e) {
            smallest = e
        }
    }

    return smallest

}

// find the smallest
const arr = [10, 5, 20, 8, 15];
console.log(solution(arr))