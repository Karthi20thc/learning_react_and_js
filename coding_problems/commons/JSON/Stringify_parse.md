In JavaScript, **`JSON.stringify()`** and **`JSON.parse()`** are used to **convert between JavaScript objects and JSON strings**.

Think of it like **object ↔ string conversion**.

---

# 1️⃣ `JSON.stringify()`

**Purpose:** Convert a **JavaScript object → JSON string**

### Example

```javascript
const obj = {
  name: "Karthik",
  age: 25
};

const jsonString = JSON.stringify(obj);

console.log(jsonString);
```

Output

```text
'{"name":"Karthik","age":25}'
```

### Why we use it

* Sending data to **API**
* Saving data in **localStorage**
* Transferring data over **network**

Example:

```javascript
localStorage.setItem("user", JSON.stringify(obj));
```

---

# 2️⃣ `JSON.parse()`

**Purpose:** Convert **JSON string → JavaScript object**

### Example

```javascript
const jsonString = '{"name":"Karthik","age":25}';

const obj = JSON.parse(jsonString);

console.log(obj.name);
```

Output

```text
Karthik
```

Example with localStorage:

```javascript
const user = JSON.parse(localStorage.getItem("user"));
console.log(user.name);
```

---

# 🔁 Simple Flow

```text
JavaScript Object
      ↓
JSON.stringify()
      ↓
JSON String
      ↓
JSON.parse()
      ↓
JavaScript Object
```

---

# 📊 Real Example (API)

When sending request:

```javascript
fetch("/api/user", {
  method: "POST",
  body: JSON.stringify({
    name: "Karthik",
    age: 25
  })
});
```

Server usually returns **JSON string**, so we convert it:

```javascript
fetch("/api/user")
  .then(res => res.json()) // internally uses JSON.parse()
  .then(data => console.log(data));
```

---

# ⚠️ Important Rules

`JSON.stringify()` **cannot convert**:

* functions
* undefined
* symbols

Example:

```javascript
const obj = {
  name: "Karthik",
  greet: function() {}
};

console.log(JSON.stringify(obj));
```

Output

```text
{"name":"Karthik"}
```

Function is removed.

---

# 🧠 Interview One-Liner

* **`JSON.stringify()` → Object to String**
* **`JSON.parse()` → String to Object**

---

If you want, I can also show **5 tricky JSON interview questions** that many frontend interviews ask.
