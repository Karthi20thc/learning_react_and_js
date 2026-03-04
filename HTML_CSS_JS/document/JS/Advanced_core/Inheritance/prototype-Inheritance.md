## Prototype Inheritance in JavaScript

**Prototype inheritance** is the mechanism in **JavaScript** where objects can inherit properties and methods from other objects using the **prototype chain**.

JavaScript does NOT use classical class-based inheritance like Java or C++.
Instead, it uses **prototypes**.

---

## 🔹 What is a Prototype?

Every JavaScript object has an internal link to another object called its **prototype**.

When you try to access a property:

1. JS first checks the object itself.
2. If not found, it checks the object's prototype.
3. It keeps going up the chain.
4. Until it reaches `null`.

This is called the **Prototype Chain**.

---

## 🔹 Simple Example

```js
const person = {
    greet() {
        console.log("Hello");
    }
};

const user = Object.create(person);

user.name = "Karthik";

console.log(user.name);   // Karthik (own property)
user.greet();             // Hello (inherited from person)
```

### What happens internally?

```
user  --->  person  --->  Object.prototype  --->  null
```

If `user.greet()` is called:

* Not in `user`
* Found in `person`
* Executed

---

## 🔹 Constructor Function Example

```js
function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    console.log("Hi, I am " + this.name);
};

const p1 = new Person("Karthik");
p1.sayHi(); // Hi, I am Karthik
```

### What happens here?

* `p1` does NOT contain `sayHi`
* It looks into `Person.prototype`
* It finds `sayHi` there

---

## 🔹 Prototype Chain Diagram

```
p1
  ↓
Person.prototype
  ↓
Object.prototype
  ↓
null
```

---

## 🔹 Important Concepts

### 1️⃣ `__proto__`

Points to the object's prototype (avoid using directly in modern code).

### 2️⃣ `.prototype`

Used with constructor functions.

### 3️⃣ `Object.create()`

Creates a new object with a specified prototype.

---

## 🔹 Why JavaScript Uses Prototype Inheritance?

* Memory efficient (methods shared)
* Flexible
* Dynamic (can add methods later)

Example:

```js
Person.prototype.walk = function () {
    console.log("Walking...");
};

p1.walk(); // Works even after creation
```

---

## 🔹 Modern ES6 Class (Still Prototype Behind the Scene)

```js
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log("Hi " + this.name);
    }
}
```

⚠️ Even this uses prototype internally.

---

# 🔥 Interview Definition

> Prototype inheritance is a feature in JavaScript where objects inherit properties and methods from other objects via the prototype chain.

---

If you want, I can also explain:

* Difference between classical vs prototype inheritance
* Deep internal working of `new` keyword
* Common prototype interview traps

Tell me 👌
