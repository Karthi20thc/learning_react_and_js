This is a classic JavaScript question about **closures + event loop + `var` vs `let`**.

Your code:

```js
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}
```

## ✅ What will it print?

```
5
5
5
5
5
```

Not `0 1 2 3 4`.

---

## 🔹 Why does this happen?

There are **three key reasons**:

### 1️⃣ `var` is function-scoped (not block-scoped)

`var i` creates **one single variable** shared by the entire loop.

So there is only **one `i`**, not a new one for each iteration.

After the loop finishes:

```js
i === 5
```

---

### 2️⃣ `setTimeout` is asynchronous

Even though delay is `0`, it does **not run immediately**.

It goes to the **Web APIs → Callback Queue → Event Loop**.

So the loop finishes first.

Execution order:

1. Loop runs quickly → `i` becomes `5`
2. Then callbacks execute → `console.log(i)`
3. All callbacks see the same `i = 5`

---

### 3️⃣ Closures capture the variable, not the value

The arrow function remembers the **reference to `i`**, not the value at the time.

By the time it runs → `i` is already `5`.

---

## 🔹 Visual timeline

```
Loop start
i = 0 → schedule timeout
i = 1 → schedule timeout
i = 2 → schedule timeout
i = 3 → schedule timeout
i = 4 → schedule timeout

Loop ends → i = 5

Now callbacks run:
print 5
print 5
print 5
print 5
print 5
```

---

## ✅ How to fix (print 0 1 2 3 4)

### ✔️ Solution 1 — use `let` (block scoped)

```js
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}
```

Why it works:

`let` creates a **new `i` for every iteration**.

---

### ✔️ Solution 2 — IIFE (old school)

```js
for (var i = 0; i < 5; i++) {
    (function(i) {
        setTimeout(() => {
            console.log(i);
        }, 0);
    })(i);
}
```

Creates a new scope per iteration.

---

### ✔️ Solution 3 — pass argument to setTimeout

```js
for (var i = 0; i < 5; i++) {
    setTimeout((i) => {
        console.log(i);
    }, 0, i);
}
```

---

## 🧠 Interview one-line answer

> Because `var` is function-scoped, all callbacks share the same `i`.
> `setTimeout` runs after the loop completes, when `i` equals 5.

---

If you want, I can also explain:

* Event loop diagram
* Microtask vs Macrotask
* Why `setTimeout(..., 0)` is never truly 0

Just tell me 👍.


