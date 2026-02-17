## `useMemo` and `useCallback` in React — Full Explanation, Usage & Examples

Both **useMemo** and **useCallback** are React hooks used for **performance optimization**.

They help prevent **unnecessary re-renders** and **expensive recalculations**.

---

# 🧠 Core Difference (Most Important)

| Hook        | Purpose                   |
| ----------- | ------------------------- |
| useMemo     | Memoizes **value/result** |
| useCallback | Memoizes **function**     |

In simple words:

> useMemo → remembers computed value
> useCallback → remembers function reference

---

# 🔵 useMemo

## What is useMemo?

`useMemo` caches the **result of a calculation** and recomputes it **only when dependencies change**.

### Syntax

```js
const memoizedValue = useMemo(() => {
  return expensiveCalculation();
}, [dependencies]);
```

---

## Example — Expensive Calculation

```jsx
import React, { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>{expensiveValue}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
```

### Without useMemo

Calculation runs on every render ❌

### With useMemo

Runs only when `count` changes ✅

---

# 🔴 useCallback

## What is useCallback?

`useCallback` memoizes a **function** so that React does not recreate it on every render.

### Syntax

```js
const memoizedFunction = useCallback(() => {
  // function body
}, [dependencies]);
```

---

## Example — Prevent Child Re-render

```jsx
import React, { useState, useCallback } from "react";

const Child = React.memo(({ handleClick }) => {
  console.log("Child Rendered");

  return <button onClick={handleClick}>Click</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child handleClick={handleClick} />
    </div>
  );
}

export default App;
```

### Why useCallback?

Without it:

```
New function created → Child re-renders ❌
```

With it:

```
Same function reference → Child not re-rendered ✅
```

---

# 🔥 Key Difference Example

```js
useMemo(() => value, [])
useCallback(() => function, [])
```

Actually:

```
useCallback(fn, deps) === useMemo(() => fn, deps)
```

---

# 🧾 When to Use useMemo

Use when:

* Heavy calculations
* Filtering large arrays
* Sorting data
* Derived state
* Performance optimization

Example:

```
expensive loops
complex math
large datasets
```

---

# 🧾 When to Use useCallback

Use when:

* Passing functions to child components
* Preventing unnecessary renders
* Event handlers
* Dependencies in useEffect

---

# 🚀 Real-World Example

## Filtering List with useMemo

```jsx
const filteredUsers = useMemo(() => {
  return users.filter(user => user.active);
}, [users]);
```

---

# ⭐ Interview One-Line Answer

### useMemo

> useMemo is a React hook used to memoize a computed value and recompute it only when dependencies change.

### useCallback

> useCallback is a React hook used to memoize a function reference to prevent unnecessary re-renders.

---

# ⚠️ Important Rule

Do NOT overuse them.

They are optimizations — not required everywhere.

---

# 🧠 Common Interview Questions

Be ready for:

* Difference between useMemo and useCallback
* When NOT to use them
* React.memo relation
* Performance issues
* Dependency array mistakes
* useMemo vs useEffect

---

# 🔥 useMemo vs useCallback Summary

| Feature     | useMemo           | useCallback        |
| ----------- | ----------------- | ------------------ |
| Returns     | Value             | Function           |
| Purpose     | Cache computation | Cache function     |
| Use case    | Heavy calculation | Prevent re-renders |
| Common with | Arrays / objects  | Event handlers     |

---

# ❗ Important Pitfall

Wrong dependencies cause bugs.

Always include all dependencies.

---

# If You Want

I can also explain:

✅ React.memo
✅ useMemo vs useEffect
✅ Performance optimization checklist
✅ Real interview scenarios

Just tell me 👍
