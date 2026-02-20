setTimeout(() => console.log("timeout"));

Promise.resolve().then(() => {
    console.log("promise");
    setTimeout(() => console.log("timeout2"));
});

console.log("end");
