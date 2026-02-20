async function test() {
    return Promise.resolve(10);
}

test().then(console.log);
