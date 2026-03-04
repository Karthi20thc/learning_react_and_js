In JavaScript, **Shallow Copy** and **Deep Copy** describe how objects/arrays are copied and how their **nested values are handled**.

This question usually appears right after **mutable vs immutable** in interviews.

---

# 1️⃣ Shallow Copy

### Definition

A **shallow copy copies only the first level** of an object.

* Primitive values → copied normally
* Nested objects/arrays → **reference is copied**

So both objects **share the same nested reference**.

---

## Example

```javascript
const user1 = {
  name: "Karthik",
  address: {
    city: "Chennai"
  }
};

const user2 = { ...user1 };

user2.name = "Rahul";
user2.address.city = "Mumbai";

console.log(user1);
console.log(user2);
```

### Output

```
user1 → {name:"Karthik", address:{city:"Mumbai"}}
user2 → {name:"Rahul", address:{city:"Mumbai"}}
```

### Why?

```
address object is shared reference
```

Visual:

```
user1.address  ----\
                    ----> {city:"Mumbai"}
user2.address  ----/
```

---

# Ways to Create Shallow Copy

### 1️⃣ Spread Operator

```javascript
const copy = { ...obj };
```

### 2️⃣ Object.assign()

```javascript
const copy = Object.assign({}, obj);
```

### 3️⃣ Array Spread

```javascript
const newArr = [...arr];
```

---

# 2️⃣ Deep Copy

### Definition

A **deep copy duplicates everything**, including **nested objects**.

So the copied object has **completely independent memory**.

---

## Example

```javascript
const user1 = {
  name: "Karthik",
  address: {
    city: "Chennai"
  }
};

const user2 = JSON.parse(JSON.stringify(user1));

user2.address.city = "Mumbai";

console.log(user1.address.city);
console.log(user2.address.city);
```

### Output

```
Chennai
Mumbai
```

Now the objects are **independent**.

Visual:

```
user1.address → {city:"Chennai"}

user2.address → {city:"Mumbai"}
```

---

# Ways to Create Deep Copy

### 1️⃣ JSON Method (Common)

```javascript
JSON.parse(JSON.stringify(obj))
```

Limitation:

* Doesn't work with functions
* Doesn't handle `undefined`, `Date`, `Map`, etc.

---

### 2️⃣ structuredClone (Modern JS)

```javascript
const copy = structuredClone(obj);
```

Better deep copy method.

---

# Shallow vs Deep Copy

| Feature               | Shallow Copy | Deep Copy |
| --------------------- | ------------ | --------- |
| Copies first level    | ✅ Yes        | ✅ Yes     |
| Copies nested objects | ❌ No         | ✅ Yes     |
| Shared reference      | ✅ Yes        | ❌ No      |
| Memory usage          | Less         | More      |

---

# Interview Example (Very Common)

What is the output?

```javascript
const obj1 = { a: 1, b: { c: 2 } };

const obj2 = { ...obj1 };

obj2.b.c = 5;

console.log(obj1.b.c);
```

Answer

```
5
```

Because **spread creates a shallow copy**.

---

# Real World Example (React State)

❌ Wrong

```javascript
state.user.address.city = "Delhi"
```

✅ Correct

```javascript
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Delhi"
  }
});
```

This avoids **mutating the original state**.

---

# One-Line Interview Answer

**Shallow Copy**

> Copies only the top level and shares nested references.

**Deep Copy**

> Copies all levels so objects become completely independent.

---

If you're learning **JavaScript for interviews**, the next **very important topic** after this is:

* **Event Loop (call stack, microtask queue, macrotask queue)**

This is asked in **almost every frontend interview**. I can explain it **very clearly with examples** if you want.
