const solution = (val) => {

    for (let i = 2; i < val; i++) {
        if (val % i === 0) {
            return false
        }
    }
    return true;
}

const val = 72;
console.log(solution(val))