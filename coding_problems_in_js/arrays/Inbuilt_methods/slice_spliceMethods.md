`slice()` and `splice()` are both used with arrays, but they behave **very differently**.

---

# 1️⃣ `slice()` – Does NOT modify original array

**Purpose:** Extract a portion of an array.

### Syntax

```javascript
array.slice(start, end)
```

* `start` → starting index
* `end` → ending index (**not included**)

### Example

```javascript
const arr = [10, 20, 30, 40, 50];

const result = arr.slice(1, 4);

console.log(result); // [20, 30, 40]
console.log(arr);    // [10, 20, 30, 40, 50]
```

✔ Returns **new array**
✔ **Original array unchanged**

---

# 2️⃣ `splice()` – Modifies the original array

**Purpose:** Add / Remove / Replace elements.

### Syntax

```javascript
array.splice(start, deleteCount, item1, item2...)
```

* `start` → index to start
* `deleteCount` → how many elements to remove
* `item1...` → elements to insert

---

### Example 1 – Remove elements

```javascript
const arr = [10, 20, 30, 40];

arr.splice(1, 2);

console.log(arr);
```

Output

```
[10, 40]
```

---

### Example 2 – Add elements

```javascript
const arr = [10, 20, 40];

arr.splice(2, 0, 30);

console.log(arr);
```

Output

```
[10, 20, 30, 40]
```

---

### Example 3 – Replace elements

```javascript
const arr = [10, 20, 30];

arr.splice(1, 1, 50);

console.log(arr);
```

Output

```
[10, 50, 30]
```

---

# 🔑 Key Differences

| Feature                 | `slice()`      | `splice()`                    |
| ----------------------- | -------------- | ----------------------------- |
| Modifies original array | ❌ No           | ✔ Yes                         |
| Returns                 | New array      | Removed elements              |
| Use case                | Copy / extract | Add / remove / replace        |
| Parameters              | `(start, end)` | `(start, deleteCount, items)` |

---

# ⚡ Easy way to remember

```
slice → copy piece
splice → cut/change original
```

---

# 🧠 Interview Tip

Most React/Frontend interviews prefer **`slice()`** because React state should be **immutable**.

Example:

```javascript
const newArray = arr.slice();
```

instead of modifying with `splice()`.

---

If you want, I can also show a **very tricky interview question using splice and slice** that confuses many developers.
