// what is the output.
const parentFn = () => {
    let test = 1;

    const childFn = () => {
        test = test + 1;
        console.log(test);
    }
    return childFn();
}

parentFn();
parentFn();


// what is the output.
const parentFn = () => {
    let test = 1;

    const childFn = () => {
        test = test + 1;
        console.log(test);
    }
    return childFn;
}

const result = parentFn();

result();
result();