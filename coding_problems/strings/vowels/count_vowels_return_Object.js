//! attempt -1 Failed
// const countVowels = (str) => {
//     let obj = {};
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     for (let char of str) {


//         if (char in obj) {
//             obj[char] = obj[char] + 1
//         }
//         else {
//             obj[char] = 0
//         }
//     }

//     return obj
// }

// console.log(countVowels("aees"))

// expected output - {a:1,e:2}

// attempt -2

const countVowels = (str) => {
    let obj = {};
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str) {

        if (obj[char]) {
            obj[char] = obj[char] + 1
        }
        else if (vowels.includes(char)) {
            obj[char] = 1
        }
    }

    return obj
}

console.log(countVowels("aaaees"))

// expected output - {a:1,e:2}