Great Karthik 💪 Since you’re preparing seriously for interviews, here’s a **single real-world problem** that forces you to use almost every important JavaScript array method.

---

# 🚀 Problem: E-Commerce Order Analytics System

You are given an array of orders:

```js
const orders = [
  {
    orderId: 101,
    customer: "Karthik",
    items: [
      { name: "Laptop", price: 80000, quantity: 1 },
      { name: "Mouse", price: 500, quantity: 2 }
    ],
    status: "delivered",
    rating: 5
  },
  {
    orderId: 102,
    customer: "Rahul",
    items: [
      { name: "Keyboard", price: 2000, quantity: 1 }
    ],
    status: "pending",
    rating: null
  },
  {
    orderId: 103,
    customer: "Priya",
    items: [
      { name: "Monitor", price: 15000, quantity: 2 }
    ],
    status: "delivered",
    rating: 4
  },
  {
    orderId: 104,
    customer: "Karthik",
    items: [
      { name: "USB Cable", price: 300, quantity: 3 }
    ],
    status: "cancelled",
    rating: null
  }
];
```

---

# 🎯 Your Tasks (Use Array Methods Only)

You are NOT allowed to use traditional `for` loops.

---

## 1️⃣ Get All Delivered Orders

👉 Use: `filter()`

---

## 2️⃣ Get Total Revenue From Delivered Orders

👉 Use: `filter()`, `map()`, `reduce()`

Revenue = price × quantity

---

## 3️⃣ Get Unique Customer Names

👉 Use: `map()`, `Set`

---

## 4️⃣ Find the Order with Highest Value

👉 Use: `reduce()`

---

## 5️⃣ Get All Items Sold (Flatten Array)

👉 Use: `flatMap()`

---

## 6️⃣ Check If Any Order is Cancelled

👉 Use: `some()`

---

## 7️⃣ Check If All Delivered Orders Have Ratings

👉 Use: `every()`

---

## 8️⃣ Sort Orders by Total Order Value (High → Low)

👉 Use: `sort()`

---

## 9️⃣ Get Top Rated Delivered Order

👉 Use: `filter()`, `sort()` OR `reduce()`

---

## 🔟 Create a Summary Object Like This

```js
{
  totalOrders: 4,
  delivered: 2,
  pending: 1,
  cancelled: 1,
  totalRevenue: 110600
}
```

👉 Use: `reduce()`

---

# 🧠 Methods Covered

This single problem tests:

* `map()`
* `filter()`
* `reduce()`
* `flatMap()`
* `some()`
* `every()`
* `sort()`
* `find()`
* `includes()`
* `Set`
* `forEach()` (optional)
* `slice()`
* `splice()`

---

# 🔥 Advanced Interview Twist

After solving everything:

1. Make everything reusable using functions
2. Optimize repeated calculations
3. Time complexity analysis
4. Make solution immutable (no direct mutation)

---

If you want, I can:

* ✅ Give expected output
* ✅ Review your solution
* ✅ Give a harder FAANG-level version
* ✅ Turn this into a mini frontend dashboard project

What level do you want next?

------------------------------------------------------------------------


Good question Karthik 👌🔥
Now you're thinking like an interviewer.

In the original problem, we mostly used **non-mutating array methods** (`map`, `filter`, `reduce`, etc.).

But interviews ALSO test **mutating methods** like:

* `push()`
* `pop()`
* `shift()`
* `unshift()`
* `splice()`
* `reverse()`

So let me extend your problem to test those too.

---

# 🔥 Extended Challenge: Mutating Array Methods

Using the same `orders` array:

---

## 1️⃣ Add a New Order at the End

👉 Use `push()`

```js
orders.push({
  orderId: 105,
  customer: "Anjali",
  items: [{ name: "Tablet", price: 25000, quantity: 1 }],
  status: "delivered",
  rating: 5
});
```

### Important:

* ✅ Modifies original array
* ✅ Returns new length
* ⏱ Time Complexity: O(1)

---

## 2️⃣ Add a Priority Order at the Beginning

👉 Use `unshift()`

```js
orders.unshift({
  orderId: 100,
  customer: "VIP",
  items: [{ name: "iPhone", price: 90000, quantity: 1 }],
  status: "delivered",
  rating: 5
});
```

### Important:

* ❌ Shifts all elements
* ⏱ Time Complexity: O(n)

Interview trap question:

> Which is faster: push or unshift?
> Answer: **push()**

---

## 3️⃣ Remove the Last Order

👉 Use `pop()`

```js
orders.pop();
```

* Removes last element
* O(1)

---

## 4️⃣ Remove the First Order

👉 Use `shift()`

```js
orders.shift();
```

* Removes first element
* O(n)

---

## 5️⃣ Remove Cancelled Orders (Mutating Way)

👉 Use `splice()`

```js
orders.forEach((order, index) => {
  if (order.status === "cancelled") {
    orders.splice(index, 1);
  }
});
```

⚠️ Interview trick: This can cause skipping issues if multiple elements match.

Safer way:

```js
for (let i = orders.length - 1; i >= 0; i--) {
  if (orders[i].status === "cancelled") {
    orders.splice(i, 1);
  }
}
```

---

# 🧠 Interview-Level Comparison

| Method    | Mutates? | Returns   | Time Complexity |
| --------- | -------- | --------- | --------------- |
| push()    | ✅ Yes    | length    | O(1)            |
| pop()     | ✅ Yes    | element   | O(1)            |
| shift()   | ✅ Yes    | element   | O(n)            |
| unshift() | ✅ Yes    | length    | O(n)            |
| splice()  | ✅ Yes    | array     | O(n)            |
| filter()  | ❌ No     | new array | O(n)            |
| map()     | ❌ No     | new array | O(n)            |

---

# 🔥 SUPER IMPORTANT Interview Concept

Modern JS interviews prefer:

👉 **Non-mutating approach**

Instead of:

```js
orders.push(newOrder);
```

They prefer:

```js
const newOrders = [...orders, newOrder];
```

Because:

* Immutable
* Predictable
* React-friendly
* Functional programming style

---

# 🎯 Final Interview Question For You

If you do:

```js
const newArr = orders.push(newOrder);
console.log(newArr);
```

What will it print?

(Answer this. This is a VERY common mistake 😎)
