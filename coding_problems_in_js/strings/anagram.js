// An anagram in a string is a word or phrase formed by rearranging the exact same characters of another word, using all original characters exactly once. Two strings are anagrams if they have the same characters with identical frequencies, even if the order differs, such as "listen" and "silent".

// shortcut-> toLowerCase() -> use .split() -> use .sort() -> use .join()

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const s1 = str1.toLowerCase().split('').sort().join('');
    const s2 = str2.toLowerCase().split('').sort().join('');

    return s1 === s2;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
