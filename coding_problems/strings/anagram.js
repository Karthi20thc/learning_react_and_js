function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const s1 = str1.toLowerCase().split('').sort().join('');
    const s2 = str2.toLowerCase().split('').sort().join('');

    return s1 === s2;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
