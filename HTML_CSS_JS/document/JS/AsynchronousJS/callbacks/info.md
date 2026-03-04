A **callback in JavaScript** is a **function passed as an argument to another function**, which is **executed later** after some operation completes.

In simple terms:

> **A callback is a function that runs after another function finishes its work.**

---

# Basic Example

```javascript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Karthik", sayBye);
```

### Output

```
Hello Karthik
Goodbye!
```

### What happens here

1. `greet()` receives `sayBye` as a parameter.
2. `greet()` runs first.
3. After printing `"Hello Karthik"`, it calls `callback()`.
4. `sayBye()` executes.

---

# Callback with Anonymous Function

You don't always need a separate function.

```javascript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("Karthik", function () {
    console.log("Welcome!");
});
```

Output

```
Hello Karthik
Welcome!
```

---

# Why Callbacks Are Used

Callbacks are mainly used for **asynchronous operations** like:

* API calls
* Reading files
* Timers
* Event handling

Example with `setTimeout`.

```javascript
setTimeout(function () {
    console.log("Executed after 2 seconds");
}, 2000);
```

Here:

* The function is a **callback**
* It runs **after 2 seconds**

---

# Real World Example (Array Methods)

You already used callbacks here:

```javascript
const numbers = [1, 2, 3];

numbers.map(function(num) {
    return num * 2;
});
```

The function inside `map()` is a **callback**.

---

# Callback Flow Visualization

```
Main Function
     |
     v
Do some work
     |
     v
Call the callback function
     |
     v
Callback executes
```

---

# Important Interview Definition

**Callback Function**

> A callback is a function passed into another function as an argument and executed later.

---

# Very Common Interview Question

### Synchronous Callback

```javascript
function process(callback){
    callback();
}
```

Runs immediately.

### Asynchronous Callback

```javascript
setTimeout(callback, 1000);
```

Runs **later**.

---

# One Problem for You (Good Interview Practice)

What will be the output?

```javascript
function first(callback){
    console.log("First");
    callback();
}

function second(){
    console.log("Second");
}

first(second);
```

Try answering it 🙂.
If you want, I can also explain:

* **Callback Hell**
* **Why Promises replaced callbacks**
* **Real interview callback examples**.
