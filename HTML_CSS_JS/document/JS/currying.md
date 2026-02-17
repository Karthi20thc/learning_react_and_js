## What is Currying in JavaScript?

**Currying** is a technique where a function with multiple arguments is transformed into a **sequence of functions**, each taking **one argument at a time**.

In simple words:

> Currying = Breaking a function with many parameters into multiple functions with one parameter each.

---

## Normal Function (Without Currying)

```js
function add(a, b, c) {
  return a + b + c;
}

console.log(add(2, 3, 4)); // 9
```

---

## Curried Version

```js
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(add(2)(3)(4)); // 9
```

We call it like:

```
add(2)(3)(4)
```

Each function remembers the previous value → closure.

---

## Arrow Function Version (Modern)

```js
const add = a => b => c => a + b + c;

console.log(add(2)(3)(4)); // 9
```

---

## Why Currying is Useful

Currying helps with:

* Function reuse
* Partial application
* Cleaner functional programming
* Avoid repeating parameters
* React & functional libraries

---

## Real-World Example

### Logger Function

```js
const logger = type => message => {
  console.log(`[${type}] ${message}`);
};

const errorLog = logger("ERROR");

errorLog("Something went wrong");
errorLog("Server crashed");
```

Output:

```
[ERROR] Something went wrong
[ERROR] Server crashed
```

We reuse the first argument.

---

## Another Practical Example

```js
const multiply = a => b => a * b;

const double = multiply(2);

console.log(double(5)); // 10
console.log(double(10)); // 20
```

---

## Currying vs Normal Function

| Normal             | Curried                   |
| ------------------ | ------------------------- |
| add(2,3)           | add(2)(3)                 |
| Multiple arguments | One argument per function |
| Less reusable      | More reusable             |

---

## Interview One-Line Answer

> Currying is a functional programming technique where a function is transformed into multiple functions that take one argument at a time.

---

## Important Concept

Currying uses **closures internally**.

---

## Common Interview Follow-Up Questions

Be ready for:

* Partial application vs currying
* Currying implementation function
* Infinite currying
* Sum(1)(2)(3)(4)

Example:

```js
sum(1)(2)(3)(4)()
```

---

## Bonus — Infinite Currying Example

```js
function sum(a) {
  return function(b) {
    if (b !== undefined) {
      return sum(a + b);
    }
    return a;
  };
}

console.log(sum(1)(2)(3)(4)()); // 10
```

---

If you want, I can explain:

* Currying vs partial application
* Real interview problems
* Implement curry() utility
* Advanced functional programming

Just tell me 👍
