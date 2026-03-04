# ⚛️ `React.memo` vs `useMemo` (Very Common Interview Question 🔥)

Both are **performance optimization tools**, but they solve different problems.

---

# 🧠 Core Difference

| Feature          | `React.memo`          | `useMemo`                     |
| ---------------- | --------------------- | ----------------------------- |
| What it memoizes | Component             | Value (result of computation) |
| Prevents         | Unnecessary re-render | Expensive recalculation       |
| Used for         | Child components      | Heavy calculations            |
| Works on         | Props comparison      | Dependency array              |

---

# 1️⃣ React.memo

👉 Prevents **component re-render** if props don’t change.

---

## ❌ Without React.memo

```js
function Child({ count }) {
  console.log("Child rendered");
  return <h1>{count}</h1>;
}

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <>
      <Child count={count} />
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

👉 Typing in input re-renders `Child`
Even though `count` didn’t change ❌

---

## ✅ With React.memo

```js
const Child = React.memo(function Child({ count }) {
  console.log("Child rendered");
  return <h1>{count}</h1>;
});
```

Now:

👉 Child re-renders ONLY if `count` changes
👉 Typing in input does NOT re-render Child

---

# 🧠 How React.memo Works

It does **shallow comparison of props**.

If props are same → skip re-render.

---

# 2️⃣ useMemo

👉 Prevents expensive recalculation of a value.

---

## ❌ Without useMemo

```js
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = () => {
    console.log("Calculating...");
    return count * 1000;
  };

  return (
    <>
      <h1>{expensiveCalculation()}</h1>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

👉 Typing in input triggers recalculation
Even though `count` didn’t change ❌

---

## ✅ With useMemo

```js
const result = useMemo(() => {
  console.log("Calculating...");
  return count * 1000;
}, [count]);
```

Now:

👉 Recalculates only when `count` changes
👉 Typing does NOT trigger recalculation

---

# 🧠 Visual Understanding

### React.memo

```
Parent re-renders
   ↓
Check props
   ↓
Same? → Skip Child render
```

---

### useMemo

```
Component re-renders
   ↓
Check dependencies
   ↓
Same? → Reuse old value
```

---

# 🔥 Real Use Case (Like Your Antd Table)

## React.memo is useful when:

* Large table row components
* Heavy child components
* Modal components

---

## useMemo is useful when:

* Filtering large dataset
* Sorting large array
* Transforming API response
* Creating column config

Example (like your table filtering):

```js
const filteredData = useMemo(() => {
  return data.filter(item => item.name.includes(search));
}, [data, search]);
```

---

# 🧨 Interview Trap

### ❓ Does React.memo prevent re-render always?

No.

If you pass new object/function every time:

```js
<Child obj={{ name: "Karthik" }} />
```

This creates new reference → React.memo fails ❌

Solution:

```js
const memoObj = useMemo(() => ({ name: "Karthik" }), []);
<Child obj={memoObj} />
```

---

# 🎯 Summary

| If you want to…           | Use        |
| ------------------------- | ---------- |
| Prevent child re-render   | React.memo |
| Prevent heavy calculation | useMemo    |
| Optimize props object     | useMemo    |
| Optimize large components | React.memo |

---

# 🚀 Final Interview Definition

> `React.memo` memoizes a component to prevent unnecessary re-renders based on props.
> `useMemo` memoizes a computed value to avoid expensive recalculations.

---

If you want next:

* 🔥 useMemo vs useCallback
* 🧠 Why overusing memoization can hurt performance
* 🧨 Real production optimization strategy
* ⚛️ Full performance optimization guide

Tell me 😎
