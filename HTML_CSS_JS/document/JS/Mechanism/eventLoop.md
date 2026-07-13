# Event Loop in JavaScript

The **Event Loop** is the mechanism that allows JavaScript to perform **asynchronous operations** even though JavaScript is **single-threaded**.

It continuously checks:

1. Is the **Call Stack** empty?
2. Are there any **Microtasks** waiting?
3. Are there any **Macrotasks** waiting?

Then it executes them in the correct order.

---

# Why Do We Need the Event Loop?

JavaScript can execute only **one task at a time** because it has a single call stack.

Without the Event Loop, operations like:

- API calls
- Timers (`setTimeout`)
- User clicks
- File reading

would block the application until they finish.

The Event Loop allows these operations to run asynchronously.

---

# Components of the Event Loop

```text
┌─────────────────┐
│  Call Stack     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Microtask Queue │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Macrotask Queue │
└────────┬────────┘
         │
         ▼
     Event Loop
```

---

# Execution Order

The Event Loop follows this order:

```text
1. Execute Call Stack

2. When Stack becomes empty:
      Execute ALL Microtasks

3. If no Microtasks remain:
      Execute ONE Macrotask

4. Repeat
```

---

# Example 1

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

## Step-by-Step

### Call Stack

```javascript
console.log("Start");
```

**Output**

```text
Start
```

---

### setTimeout

Moves callback to Browser APIs.

```javascript
setTimeout(...);
```

---

### Promise

```javascript
Promise.resolve().then(...);
```

Callback goes to:

```text
Microtask Queue
```

---

### Call Stack

```javascript
console.log("End");
```

**Output**

```text
End
```

---

### Stack Empty

Event Loop checks:

```text
Microtask Queue → Promise
```

**Output**

```text
Promise
```

---

### Next

Event Loop checks:

```text
Macrotask Queue → Timeout
```

**Output**

```text
Timeout
```

---

## Final Output

```text
Start
End
Promise
Timeout
```

---

# Visual Diagram

```text
CALL STACK
-----------
Start
setTimeout
Promise
End

↓ Stack Empty

MICROTASK QUEUE
---------------
Promise

↓ Execute All

MACROTASK QUEUE
---------------
Timeout

↓ Execute

Done
```

---

# Example 2

```javascript
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

queueMicrotask(() => {
  console.log("4");
});

console.log("5");
```

## Output

```text
1
5
3
4
2
```

### Reason

```text
Call Stack:
1
5

Microtasks:
3
4

Macrotasks:
2
```

---

# Microtask Queue

## Common Microtasks

### Promise Callbacks

```javascript
Promise.resolve().then(() => {});
Promise.resolve().catch(() => {});
Promise.resolve().finally(() => {});
```

### queueMicrotask

```javascript
queueMicrotask(() => {});
```

### MutationObserver

```javascript
const observer = new MutationObserver(() => {});
```

### Async/Await Continuation

```javascript
async function test() {
  await Promise.resolve();
  console.log("Microtask");
}
```

---

# Macrotask Queue

## Common Macrotasks

### setTimeout

```javascript
setTimeout(() => {}, 0);
```

### setInterval

```javascript
setInterval(() => {}, 1000);
```

### DOM Events

```javascript
button.addEventListener("click", () => {});
```

### Network Events

```javascript
fetch("/api")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### MessageChannel

```javascript
const channel = new MessageChannel();
channel.port2.postMessage("Hello");
```

### postMessage

```javascript
window.postMessage("Hello", "*");
```

### Script Execution

```javascript
console.log("Script Start");
```

### Node.js Specific

```javascript
setImmediate(() => {});
```

---

# Microtask vs Macrotask

| Microtask          | Macrotask      |
| ------------------ | -------------- |
| Promise.then()     | setTimeout()   |
| Promise.catch()    | setInterval()  |
| Promise.finally()  | DOM Events     |
| queueMicrotask()   | Network Events |
| MutationObserver   | MessageChannel |
| await continuation | postMessage()  |

---

# Interview Definition

> The Event Loop is a JavaScript mechanism that continuously monitors the Call Stack and task queues. When the Call Stack becomes empty, it first executes all pending Microtasks and then processes Macrotasks one by one, enabling asynchronous behavior in JavaScript.

---

# Interview Shortcut

```text
1. Run Synchronous Code

2. Execute ALL Microtasks
   - Promise.then()
   - Promise.catch()
   - Promise.finally()
   - queueMicrotask()
   - MutationObserver
   - await continuation

3. Execute ONE Macrotask
   - setTimeout()
   - setInterval()
   - DOM Events
   - Network Events
   - MessageChannel
   - postMessage()

4. Repeat Forever
```

---

# One-Line Rule

✅ **Event Loop = Call Stack → All Microtasks → One Macrotask → Repeat**

