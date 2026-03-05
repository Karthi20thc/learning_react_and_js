// my own 
const removeDuplicates = (arr) => {
    let obj = {};

    for (let e of arr) {

        if (!obj[e]) {
            obj[e] = 1;
        }
        else {
            obj[e] = obj[e] + 1
        }
    }

    // loop the object

    const result = Object.keys(obj).map((e, i) => {
        return parseInt(e)
    })

    return result

}


const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr))

