In JavaScript, **Rest (`...`)** and **Spread (`...`)** use the **same syntax (`...`)**, but their **purpose is different**.

Think of it like this:

* **Spread → expands values**
* **Rest → collects values**

---

# 1️⃣ Spread Operator (`...`)

### Definition

The **spread operator expands elements** of an array or object.

👉 Used when **sending data**.

---

## Example 1: Spread in Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const result = [...arr1, ...arr2];

console.log(result);
```

Output

```
[1,2,3,4,5,6]
```

Here:

```
...arr1 → 1,2,3
...arr2 → 4,5,6
```

---

## Example 2: Copy an Array

```javascript
const numbers = [10, 20, 30];

const copy = [...numbers];

console.log(copy);
```

Output

```
[10,20,30]
```

Without spread:

```
copy = numbers  ❌ (reference copy)
```

---

## Example 3: Spread with Objects

```javascript
const user = {
  name: "Karthik",
  age: 25
};

const updatedUser = {
  ...user,
  city: "Chennai"
};

console.log(updatedUser);
```

Output

```
{
 name: "Karthik",
 age: 25,
 city: "Chennai"
}
```

---

## Example 4: Spread in Function Arguments

```javascript
const numbers = [1,2,3];

function sum(a,b,c){
  return a + b + c;
}

console.log(sum(...numbers));
```

Output

```
6
```

---

# 2️⃣ Rest Operator (`...`)

### Definition

The **rest operator collects multiple values into one array.**

👉 Used when **receiving data**.

---

## Example 1: Rest in Function Parameters

```javascript
function sum(...numbers){
  return numbers.reduce((a,b) => a + b);
}

console.log(sum(1,2,3,4));
```

Output

```
10
```

Here:

```
...numbers → [1,2,3,4]
```

---

## Example 2: Rest in Array Destructuring

```javascript
const numbers = [1,2,3,4,5];

const [a,b,...rest] = numbers;

console.log(a);
console.log(b);
console.log(rest);
```

Output

```
1
2
[3,4,5]
```

---

## Example 3: Rest in Object Destructuring

```javascript
const user = {
  name: "Karthik",
  age: 25,
  city: "Chennai"
};

const {name, ...rest} = user;

console.log(name);
console.log(rest);
```

Output

```
Karthik
{age:25, city:"Chennai"}
```

---

# Spread vs Rest

| Feature   | Spread                         | Rest                               |
| --------- | ------------------------------ | ---------------------------------- |
| Purpose   | Expands values                 | Collects values                    |
| Usage     | Function call, arrays, objects | Function parameters, destructuring |
| Direction | One → many                     | Many → one                         |

---

### Visual Understanding

**Spread**

```
[1,2,3]
   ↓
1 2 3
```

**Rest**

```
1 2 3
 ↓
[1,2,3]
```

---

# Quick Interview Trick Question

What is the output?

```javascript
function test(a,b,...rest){
  console.log(rest);
}

test(1,2,3,4,5);
```

Answer:

```
[3,4,5]
```

---

✅ **Interview One-Line Answer**

> Spread expands elements, while rest collects multiple elements into a single array.

---

If you want, I can also show you **5 tricky interview questions on rest/spread** (very commonly asked in frontend interviews).
