const duplicates = (str) => {
    //string
    let unique = '';

    //int
    const strlen = str.length;


    for (let i = 0; i <= strlen - 1; i++) {
        let isduplicate = false;

        for (let j = 0; j <= strlen - 1; j++) {

            if (str[i] === unique[j]) {
                isduplicate = true;
                break;
            }
        }

        if (isduplicate === false) {
            unique = unique + str[i]
        }

    }

    return unique;
}

console.log(duplicates("aabbcc"));