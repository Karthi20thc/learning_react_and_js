const countVowels = (str) => {

    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // for (let char of str) {
    //     if (vowels.includes(char)) {
    //         count++;
    //     }
    // }

    for (let i = 0; i < str.length - 1; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("aeiou"));