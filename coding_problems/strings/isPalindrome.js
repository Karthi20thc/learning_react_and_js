const isPalindrome = (str) => {
    // int
    const strlength = str.length;

    let lpi = 0;
    let rpi = strlength - 1;

    // char
    const lpc = str[lpi];
    const rpc = str[rpi];

    while (lpi < rpi) {
        if (lpc != rpc) {
            return false;
        }
        lpi++;
        rpi--;
    }
    return true;
};

console.log(isPalindrome('roor'));
