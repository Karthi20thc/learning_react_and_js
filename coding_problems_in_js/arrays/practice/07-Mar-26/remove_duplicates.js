const removeDuplicates = (arr) => {
    // create new obj
    // loop the array
    // obj holds the frequency
    // loop the obj and return the keys

    let obj = {};

    for (let ele of arr) {

        if (!obj[ele]) {
            obj[ele] = 1
        }
        else {
            obj[ele] = obj[ele] + 1
        }
    }

    // convert string to int
    const result = Object.keys(obj).map((e, i) => {
        return parseInt(e)
    })

    return result

}



const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr))