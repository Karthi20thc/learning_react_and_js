const solution = (val) => {
    let reversed = '';

    for (let i = val.length - 1; i >= 0; i--) {
        reversed = reversed + val[i]
    }

    return reversed;
}

const val = "car was";
console.log(solution(val))