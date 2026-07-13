const solution = (val) => {
    let obj = {};

    for (let char of val) {

        if (!obj[char]) {
            obj[char] = 1
        }
        else {
            obj[char] = obj[char] + 1
        }
    }

    return Object.keys(obj).join("")
    // .toUpperCase()
}

const val = "abbdbdb";