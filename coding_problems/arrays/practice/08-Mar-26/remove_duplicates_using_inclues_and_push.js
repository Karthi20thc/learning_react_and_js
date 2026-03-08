// solved with AI help
const removeDuplicates = (arr) => {
    let result = [];

    for (let ele of arr) {

        // if there is no ele in my result, then only push
        if (!result.includes(ele)) {
            result.push(ele)
        }
    }

    return result
}

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr))


// Remember we are not in loop, .includes loops internally.
// const arr = [1, 2, 2, 3, 4, 4, 5];
// console.log(arr.includes(5)) // true