// did not solve in first attempt.
const solution = (val) => {
    let a = 0;
    let b = 1;

    for (let i = 0; i < val; i++) {
        console.log(a);

        let next = a + b;

        // b values becomes a
        a = b;

        // sum of a and b becomes b value at the end
        b = next;
    }


}

const val = 12;
// not consoling here, because in inside loop we are consoling.
solution(val)