## What is a Promise in JavaScript?

A **Promise** is an object that represents the **result of an asynchronous operation**, which may complete **in the future** with either:

* ✅ Success (resolved)
* ❌ Failure (rejected)

In simple words:

> Promise = A value that will be available later.

---

## Why Promises Are Needed

JavaScript is asynchronous.

Examples:

* API calls
* File reading
* Database queries
* Timers (`setTimeout`)

Promises help avoid **callback hell** and make code cleaner.

---

## Promise States

A promise has 3 states:

1. **Pending** → Initial state
2. **Fulfilled (Resolved)** → Operation successful
3. **Rejected** → Operation failed

---

## Basic Example

```js
const myPromise = new Promise((resolve, reject) => {

  let success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }

});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

Output:

```
Operation successful
```

---

## Real Example with setTimeout

```js
const fetchData = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve("Data received");
    }, 2000);

  });
};

fetchData()
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

After 2 seconds:

```
Data received
```

---

## Promise Methods

### `.then()`

Runs when promise is resolved.

```js
promise.then(result => {});
```

---

### `.catch()`

Runs when promise is rejected.

```js
promise.catch(error => {});
```

---

### `.finally()`

Runs always (success or failure).

```js
promise.finally(() => {});
```

---

## Async/Await (Modern Way)

Promises are often used with `async/await`.

```js
const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Hello"), 1000);
  });
};

async function getData() {
  const result = await fetchData();
  console.log(result);
}

getData();
```

---

## Interview One-Line Answer

> A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

---

## Advantages of Promises

* Avoid callback hell
* Better error handling
* Cleaner code
* Chainable
* Works with async/await

---

## Common Interview Follow-Up Questions

Be ready for:

* Promise chaining
* Promise.all()
* Promise.race()
* Promise.any()
* Promise.allSettled()
* Difference between Promise and async/await
* Microtask queue
* Event loop with promises

---

## Promise Chaining Example

```js
Promise.resolve(5)
  .then(num => num * 2)
  .then(num => num * 3)
  .then(result => console.log(result));
```

Output:

```
30
```

---

If you want, I can explain:

* Promise vs callback
* Promise.all with examples
* Build Promise from scratch
* Event loop deep explanation

Just tell me 👍
