// const solution = (val) => {
//    const valArr = val.split(" ");
//    const result = [];

//    for(let word of valArr){
//         // ! .join operates on array, but final result is char, we do not need .join()
//        result.push(word.split("")[0].toUpperCase().join(""))
//    }

//    return result;

// }

// const val = "explain anagram in a string";
// console.log("explain".split("")[0].toUpperCase())
// console.log(solution(val))


// final solution 

const solution = (val) => {
    const valArr = val.split(" ");
    const result = [];

    for (let word of valArr) {
        const Finalcapital = word.split("")[0].toUpperCase() + word.slice(1)
        result.push(Finalcapital)
    }

    return result;

}

const val = "explain anagram in a string";
// console.log("explain".split("")[0].toUpperCase())
console.log(solution(val))