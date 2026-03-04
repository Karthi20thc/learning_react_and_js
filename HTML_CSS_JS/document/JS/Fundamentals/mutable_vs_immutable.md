The **mutable vs immutable** concept in JavaScript refers to **whether a value can be changed after it is created**.

---

# 1️⃣ Mutable

### Definition

A **mutable object can be changed after it is created**.

👉 The **original value gets modified**.

In JavaScript, these are **mutable**:

* Objects
* Arrays
* Functions

---

## Example 1: Array Mutation

```javascript
const arr = [1,2,3];

arr.push(4);

console.log(arr);
```

Output

```
[1,2,3,4]
```

Here:

* The **same array is modified**
* No new array is created

---

## Example 2: Object Mutation

```javascript
const user = {
  name: "Karthik",
  age: 25
};

user.age = 26;

console.log(user);
```

Output

```
{name:"Karthik", age:26}
```

The **object changed directly**.

---

# 2️⃣ Immutable

### Definition

An **immutable value cannot be changed after it is created**.

If you try to change it, **a new value is created instead of modifying the original**.

In JavaScript, these are **immutable**:

* String
* Number
* Boolean
* null
* undefined
* Symbol
* BigInt

---

## Example 1: String Immutability

```javascript
let str = "hello";

str[0] = "H";

console.log(str);
```

Output

```
hello
```

It **does not change**.

Correct way:

```javascript
let str = "hello";

str = "Hello";

console.log(str);
```

Output

```
Hello
```

A **new string is created**.

---

# Important Example (Interview Favorite)

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);
```

Output

```
10
20
```

Numbers are **immutable**, so `b` changing **does not affect `a`**.

---

# Mutable Example (Reference Behavior)

```javascript
let obj1 = {name:"Karthik"};
let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name);
```

Output

```
Rahul
```

Because **objects share the same reference**.

---

# Immutable Pattern (Common in React)

Instead of mutating:

❌ Bad

```javascript
user.age = 30
```

✅ Good

```javascript
const updatedUser = {
  ...user,
  age: 30
};
```

This **creates a new object**.

---

# Mutable vs Immutable Summary

| Feature            | Mutable         | Immutable               |
| ------------------ | --------------- | ----------------------- |
| Can change value   | ✅ Yes           | ❌ No                    |
| New object created | ❌ No            | ✅ Yes                   |
| Examples           | Arrays, Objects | String, Number, Boolean |

---

# Quick Interview Definition

**Mutable**

> A mutable object can be modified after creation.

**Immutable**

> An immutable value cannot be changed once created; instead, a new value is produced.

---

# One Interview Trick Question

What will be the output?

```javascript
const arr1 = [1,2,3];
const arr2 = arr1;

arr2.push(4);

console.log(arr1);
```

Answer:

```
[1,2,3,4]
```

Because arrays are **mutable and share the same reference**.

---

If you're preparing for **frontend interviews**, the next very common question after this is:

* **Shallow copy vs Deep copy in JavaScript** (VERY frequently asked).
