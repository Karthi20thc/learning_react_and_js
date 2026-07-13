In JavaScript, **Microtasks** and **Macrotasks** are related to the **Event Loop**, which controls how asynchronous code runs.

Think of it like **two queues**:

```
Call Stack → Microtask Queue → Macrotask Queue
```

JavaScript always executes **Microtasks first**, then **Macrotasks**.

---

# 1️⃣ Macrotasks (Task Queue)

Macrotasks are **regular async tasks** scheduled by APIs like:

* `setTimeout`
* `setInterval`
* `setImmediate` (Node.js)
* DOM events
* I/O operations

### Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");
```

### Output

```
Start
End
Timeout
```

Even with `0ms`, `setTimeout` goes to the **Macrotask queue**, so it runs **after the call stack is empty**.

---

# 2️⃣ Microtasks

Microtasks have **higher priority** than macrotasks.

Common microtasks:

* `Promise.then()`
* `Promise.catch()`
* `Promise.finally()`
* `queueMicrotask()`
* `MutationObserver`

### Example

```javascript
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

### Output

```
Start
End
Promise
```

The **Promise callback runs before macrotasks**.

---

# 3️⃣ Microtask vs Macrotask Example (Important Interview Question)

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

### Output

```
Start
End
Promise
Timeout
```

### Why?

Execution order:

1️⃣ `Start` → call stack
2️⃣ `setTimeout` → macrotask queue
3️⃣ `Promise.then` → microtask queue
4️⃣ `End` → call stack
5️⃣ Microtask executes → `Promise`
6️⃣ Macrotask executes → `Timeout`

---

# 4️⃣ Another Tricky Example

```javascript
setTimeout(() => console.log("timeout"));

Promise.resolve().then(() => console.log("promise"));

queueMicrotask(() => console.log("microtask"));

console.log("sync");
```

### Output

```
sync
promise
microtask
timeout
```

Because:

```
Call stack → Microtasks → Macrotasks
```

---

# 5️⃣ Visual Flow

```
1 Execute Call Stack
2 Run all Microtasks
3 Run one Macrotask
4 Repeat
```

Example flow:

```
Call Stack
   ↓
Microtask Queue (Promise.then)
   ↓
Macrotask Queue (setTimeout)
```

---

# 🧠 Interview Summary

| Feature         | Microtask                    | Macrotask               |
| --------------- | ---------------------------- | ----------------------- |
| Priority        | High                         | Low                     |
| Runs when       | After call stack             | After microtasks        |
| Examples        | Promise.then, queueMicrotask | setTimeout, setInterval |
| Execution order | First                        | Later                   |

---

✅ **One-line interview answer**

> Microtasks (like Promise callbacks) run before macrotasks (like setTimeout) in the JavaScript event loop.

---

If you're preparing for **JavaScript interviews**, I can also show you a **very famous event loop question asked in Google / Amazon interviews** where even experienced developers give the wrong output.
