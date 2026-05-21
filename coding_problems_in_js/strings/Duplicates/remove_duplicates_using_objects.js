const duplicates = (str) => {
    let obj = {}

    for (let char of str) {
        if (!obj[char]) {
            obj[char] = 1
        }
        else {
            obj[char] = obj[char] + 1

        }
    }

    // now from obj reutn key alone

    return Object.keys(obj).join("");
}

console.log(duplicates("aabbcc"));

// flow
// 1. create frequency obj
// 2. 