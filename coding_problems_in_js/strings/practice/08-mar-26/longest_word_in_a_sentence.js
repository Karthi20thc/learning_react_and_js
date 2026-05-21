// froze after 
// const solution = (val) => {
//     valArr = val.split(" ")
//     let obj = {};

//     for (let i = 0; i < valArr.length - 1; i++) {
//         obj[i] = valArr[i].length
//     }


//     return obj; //{ '0': 7, '1': 7, '2': 2, '3': 1 }
// }

// const val = "explain anagram in a string";
// console.log(solution(val))

//! solved with AI help
const solution = (val) => {
    valArr = val.split(" ")
    let longestWord = ''

    for (let word of valArr) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }

    return longestWord;
}

const val = "explain anagram in a string";
console.log(solution(val))