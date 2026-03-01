## What is Hoisting in JavaScript?

**Hoisting** is JavaScript’s default behavior of **moving declarations to the top of their scope** before code execution.

This means you can sometimes **use variables or functions before they are declared** in the code.

---

## Example 1 — Variable Hoisting with `var`

```js
console.log(a); // undefined

var a = 10;
```

### What JavaScript Actually Does Internally

```js
var a;        // hoisted declaration
console.log(a);
a = 10;
```

So output is:

```
undefined
```

---

## Example 2 — Function Hoisting

Function declarations are fully hoisted.

```js
greet();

function greet() {
  console.log("Hello");
}
```

Output:

```
Hello
```

Because the entire function is moved to the top.

---

## Example 3 — let and const Hoisting (Important)

```js
console.log(b);

let b = 20;
```

Output:

```
ReferenceError ❌
```

Why?

Because `let` and `const` are hoisted but placed in a **Temporal Dead Zone (TDZ)** until initialization.

---

## var vs let vs const Hoisting

| Keyword | Hoisted | Initial Value | Access Before Declaration |
| ------- | ------- | ------------- | ------------------------- |
| var     | Yes     | undefined     | Allowed                   |
| let     | Yes     | Uninitialized | Error                     |
| const   | Yes     | Uninitialized | Error                     |

---

## Example Showing Difference

```js
console.log(x); // undefined
var x = 5;

console.log(y); // ReferenceError
let y = 10;
```

---

## Important Concept: Temporal Dead Zone (TDZ)

The time between:

```
Variable hoisted → Variable initialized
```

Accessing variable in this period causes error.

---

## Interview One-Line Answer

> Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope before execution.

---

## Common Interview Follow-Up Questions

Be ready for:

* Hoisting with functions vs variables
* Hoisting with let/const
* Temporal Dead Zone
* Function expression hoisting

Example:

```js
sayHi();

var sayHi = function() {
  console.log("Hi");
};
```

Output:

```
TypeError ❌
```

Because only variable is hoisted, not function body.

---

## Quick Summary

* var → hoisted with undefined
* let/const → hoisted but in TDZ
* function declaration → fully hoisted
* function expression → not fully hoisted

---

If you want, I can also explain:

* Hoisting interview tricky questions
* Execution context
* Scope chain
* Memory creation phase vs execution phase

Just tell me 👍
