// call stack
console.log("Start");

// macrotask queue
setTimeout(() => {
    console.log("Timeout");
}, 0);

// Microtask queue
Promise.resolve().then(() => {
    console.log("Promise");
});

// call stack
console.log("End");


```
1 Execute Call Stack
2 Run all Microtasks
3 Run one Macrotask
4 Repeat
```


// Microtasks (High Priority)

// Promise.then()
// Promise.catch()
// Promise.finally()
// queueMicrotask()
// MutationObserver
// async/await (the code after await)


// Macrotasks / Callback Tasks (Normal Priority)

// setTimeout()
// setInterval()
// setImmediate() (Node.js)
// DOM Events (click, keydown, etc.)
// I/O Operations (Node.js)
// MessageChannel


// example

// 1.Start → executes
// 2.setTimeout → Callback Queue
// 3.Promise.then → Microtask Queue
// 4.End → executes
// 5.Call Stack becomes empty
// 6.Event Loop executes Microtask Queue first
// 7.Promise
// 8.Then Callback Queue
// 9.Timeout