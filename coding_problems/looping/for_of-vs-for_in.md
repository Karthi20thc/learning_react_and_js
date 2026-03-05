The **`for...in`** and **`for...of`** loops in JavaScript look similar but are used for **different purposes**.

---

## 1️⃣ `for...in`

Used to **iterate over object keys (property names)**.

### Example with Object

```javascript
const user = {
  name: "Karthik",
  age: 25,
  city: "Chennai"
};

for (let key in user) {
  console.log(key);        // name, age, city
  console.log(user[key]);  // Karthik, 25, Chennai
}
```

### Output

```
name
Karthik
age
25
city
Chennai
```

### Important

`for...in` returns **keys (indexes or property names)**.

Example with array:

```javascript
const arr = ["a", "b", "c"];

for (let index in arr) {
  console.log(index);
}
```

Output

```
0
1
2
```

---

## 2️⃣ `for...of`

Used to **iterate over values of iterable objects** like:

* Arrays
* Strings
* Maps
* Sets

### Example with Array

```javascript
const arr = ["a", "b", "c"];

for (let value of arr) {
  console.log(value);
}
```

Output

```
a
b
c
```

---

### Example with String

```javascript
const str = "JS";

for (let char of str) {
  console.log(char);
}
```

Output

```
J
S
```

---

# 🔑 Key Differences

| Feature            | `for...in`                | `for...of`         |
| ------------------ | ------------------------- | ------------------ |
| Iterates over      | **Keys / property names** | **Values**         |
| Mostly used for    | Objects                   | Arrays / Iterables |
| Works with objects | ✅ Yes                     | ❌ No               |
| Works with arrays  | ⚠️ Not recommended         | ✅ Yes              |

---

# 🚀 Interview Tip

For arrays:

❌ Avoid

```javascript
for (let i in arr)
```

✅ Use

```javascript
for (let value of arr)
```

Because `for...in` can also iterate **inherited properties**.

---

# Example Showing Both Together

```javascript
const arr = ["A", "B", "C"];

for (let i in arr) {
  console.log("index:", i);
}

for (let v of arr) {
  console.log("value:", v);
}
```

Output

```
index: 0
index: 1
index: 2

value: A
value: B
value: C
```

---

If you're preparing for **React/JavaScript interviews**, I can also show you **5 tricky loop questions that confuse many developers**.
