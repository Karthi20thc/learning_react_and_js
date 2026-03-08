// solved in first attempt
const solution = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];

                // update LHS first
                arr[j] = arr[j + 1];

                // move temp to RHS 
                arr[j + 1] = temp
            }
        }
    }

    return arr;
}

const arr = [23, 4, 78, 45, 21, 1];
console.log(solution(arr))