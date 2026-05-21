const solution = (arr) => {
    return arr.reduce((acc, currentvalue, index) => {
        return acc + currentvalue
    }, 0)

}


const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(solution(arr))