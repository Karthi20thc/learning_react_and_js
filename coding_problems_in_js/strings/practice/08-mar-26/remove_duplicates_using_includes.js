const solution = (val) => {
    let result = '';
    for (let char of val) {
        if (!result.includes(char)) {
            result = result + char;
        }
    }

    return result
}

const val = "abbdbdb";
console.log(solution(val))