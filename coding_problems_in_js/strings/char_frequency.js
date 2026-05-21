// const charFrequency = (str) => {
//     const freq = {};

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];

//         if (freq[char]) {
//             freq[char]++;
//         } else {
//             freq[char] = 1;
//         }
//     }

//     return freq;
// };

// console.log(charFrequency("aabbccdaa"));


// Rewriting if logic
const charFrequency = (str) => {
    const freq = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (!freq[char]) {
            freq[char] = 1;
        }
        else {
            freq[char] = freq[char] + 1
        }
    }

    return freq;
};

console.log(charFrequency("kkart"));
