# Closures in JavaScript

## What is a Closure?

A **closure** is created when an inner function remembers and can access variables from its outer function, even after the outer function has finished executing.

### Simple Definition

> A closure allows a function to "remember" variables from the scope where it was created.

---

## Example 1: Basic Closure

```javascript
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
```

### How It Works

1. `outer()` is called.
2. `count` is initialized with `0`.
3. `inner()` is returned and assigned to `counter`.
4. Even though `outer()` has finished execution, `inner()` still has access to `count`.
5. Each time `counter()` is called, it remembers and updates the same `count` variable.

---

## Example 2: Function Factory

```javascript
function createGreeting(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const greetKarthik = createGreeting("Karthik");

greetKarthik(); // Hello, Karthik!
```

### Explanation

The returned function remembers the value of `name` even after `createGreeting()` has completed execution.

---

## Real-World Example: Private Variables

```javascript
function createBankAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Balance: ${balance}`);
    },

    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount();

account.deposit(1000); // Balance: 1000
account.deposit(500);  // Balance: 1500

console.log(account.getBalance()); // 1500
```

### Why Use a Closure Here?

- `balance` cannot be accessed directly.
- It acts like a private variable.
- Only the returned methods can access or modify it.

---

## Interview Definition

> A closure is a combination of a function and the lexical environment in which it was created. It allows the function to access variables from its outer scope even after the outer function has returned.

---

## Common React Use Case

```javascript
function handleClick(message) {
  return function () {
    console.log(message);
  };
}

const clickHandler = handleClick("Button Clicked!");

clickHandler(); // Button Clicked!
```

### Explanation

The returned function closes over (remembers) the `message` variable.

---

## Advantages of Closures

- Data hiding and encapsulation
- Creating private variables
- Function factories
- Event handlers
- Callbacks
- React hooks and state management patterns

---

## Key Points to Remember

✅ Closures remember outer scope variables.

✅ Inner functions can access outer function variables.

✅ Variables persist in memory as long as the closure exists.

✅ Frequently used in JavaScript and React interviews.

---

## Formula

```text
Closure = Function + Lexical Environment
```

---

## Interview One-Liner

> A closure is a function that remembers variables from its outer scope even after the outer function has finished executing.

