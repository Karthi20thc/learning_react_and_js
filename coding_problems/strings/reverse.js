const reverse = (str) => {
    let rev = '';

    const strlen = str.length;

    for (let i = strlen - 1; i >= 0; i--) {
        rev = rev + str[i]
    }
    return rev;
}

console.log(reverse("abcd"));