**Destructuring** in JavaScript is a **syntax that allows you to extract values from arrays or objects into variables easily.**

There are two types:

1. **Array Destructuring**
2. **Object Destructuring**

---

# 1️⃣ Array Destructuring

Extract values **based on position (index)**.

### Normal Way

```javascript
const numbers = [10, 20, 30];

const a = numbers[0];
const b = numbers[1];
const c = numbers[2];

console.log(a, b, c);
```

---

### Using Destructuring

```javascript
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a, b, c);
```

Output

```
10 20 30
```

---

### Skip Values

```javascript
const numbers = [10, 20, 30, 40];

const [a, , c] = numbers;

console.log(a, c);
```

Output

```
10 30
```

---

### Default Values

```javascript
const numbers = [10];

const [a, b = 50] = numbers;

console.log(a, b);
```

Output

```
10 50
```

---

### Swap Variables (Very Common Interview Question)

```javascript
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a, b);
```

Output

```
10 5
```

---

# 2️⃣ Object Destructuring

Extract values **based on property names**.

### Normal Way

```javascript
const user = {
    name: "Karthik",
    age: 25,
    city: "Chennai"
};

const name = user.name;
const age = user.age;
```

---

### Using Destructuring

```javascript
const user = {
    name: "Karthik",
    age: 25,
    city: "Chennai"
};

const { name, age } = user;

console.log(name, age);
```

Output

```
Karthik 25
```

---

### Rename Variables

```javascript
const user = {
    name: "Karthik",
    age: 25
};

const { name: userName, age: userAge } = user;

console.log(userName, userAge);
```

Output

```
Karthik 25
```

---

### Default Values

```javascript
const user = {
    name: "Karthik"
};

const { name, age = 30 } = user;

console.log(name, age);
```

Output

```
Karthik 30
```

---

### Nested Object Destructuring

```javascript
const user = {
    name: "Karthik",
    address: {
        city: "Chennai",
        pincode: 600001
    }
};

const { address: { city } } = user;

console.log(city);
```

Output

```
Chennai
```

---

# Real World Example (Very Common in React)

You will see this a lot in React props.

```javascript
function User({ name, age }) {
    console.log(name, age);
}
```

Instead of:

```javascript
function User(props) {
    console.log(props.name);
}
```

---

# Quick Interview Summary

| Type                 | Extract Based On | Syntax             |
| -------------------- | ---------------- | ------------------ |
| Array Destructuring  | Index            | `[a,b] = arr`      |
| Object Destructuring | Property name    | `{name,age} = obj` |

---

✅ **Short Interview Definition**

> Destructuring is a JavaScript feature that allows unpacking values from arrays or properties from objects into distinct variables.

---

If you're preparing for **JavaScript interviews**, the next destructuring questions they usually ask are:

* **Destructuring in function parameters**
* **Rest operator with destructuring**
* **Spread vs Rest operator**
* **Tricky destructuring interview question**

I can show you **5 tricky destructuring interview questions** if you want. They appear frequently in frontend interviews.
