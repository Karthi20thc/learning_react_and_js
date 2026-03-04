# ⚛️ React 18 Features (with Examples)

Since you're working with **React + Ant Design**, these features directly impact how your UI renders and performs 🚀

---

# 1️⃣ Automatic Batching (Big Improvement)

### 🔥 Before React 18:

Batching worked only inside React events.

### 🔥 In React 18:

Batching works in:

* setTimeout
* Promises
* Native events
* API calls

---

### ❌ React 17

```js
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
}, 1000);
```

👉 Causes **2 re-renders**

---

### ✅ React 18

👉 Only **1 re-render**

This improves performance automatically.

---

# 2️⃣ Concurrent Rendering (Major Upgrade)

React can now prepare multiple UI versions and decide which one to show.

It makes UI:

* More responsive
* Interruptible
* Non-blocking

You enable it using:

```js
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

⚠️ `createRoot` enables concurrent features.

---

# 3️⃣ useTransition (Smooth UI Updates)

Helps mark some updates as **non-urgent**.

Very useful in:

* Large tables
* Filtering
* Search
* Heavy rendering (like your antd Table)

---

### Example

```js
import { useState, useTransition } from "react";

function SearchList() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      const filtered = bigArray.filter(item =>
        item.includes(value)
      );
      setList(filtered);
    });
  };

  return (
    <>
      <input value={input} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>
        {list.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </>
  );
}
```

👉 Input stays fast
👉 List rendering becomes background work

---

# 4️⃣ useDeferredValue

Delays updating a value until urgent updates finish.

Good for:

* Search filtering
* Large dataset rendering

---

### Example

```js
import { useState, useDeferredValue } from "react";

function Search() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  const filtered = bigArray.filter(item =>
    item.includes(deferredText)
  );

  return (
    <>
      <input onChange={(e) => setText(e.target.value)} />
      {filtered.map((item, i) => <p key={i}>{item}</p>)}
    </>
  );
}
```

👉 Typing stays smooth
👉 Heavy filtering gets delayed

---

# 5️⃣ Suspense Improvements

Now works better for:

* Data fetching
* Lazy loading components

---

### Example (Lazy Loading)

```js
import React, { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}
```

---

# 6️⃣ New Root API

React 18 introduced:

```js
import { createRoot } from "react-dom/client";
```

Instead of:

```js
ReactDOM.render(<App />, document.getElementById("root"));
```

Old method is deprecated.

---

# 7️⃣ Strict Mode Improvements

In development:

* React mounts components twice
* Helps detect side effects
* Helps prevent memory leaks

Since you asked earlier about memory leaks 👇

Example problem:

```js
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => clearInterval(interval);
}, []);
```

Strict mode helps detect if cleanup is missing.

---

# 🧠 Summary Table

| Feature              | Purpose                    |
| -------------------- | -------------------------- |
| Automatic Batching   | Fewer re-renders           |
| Concurrent Rendering | Smooth UI                  |
| useTransition        | Non-blocking updates       |
| useDeferredValue     | Delay heavy rendering      |
| Suspense upgrade     | Better async UI            |
| createRoot           | Enable concurrent features |
| StrictMode upgrade   | Detect side effects        |

---

# 🔥 Real Use Case For You

Since you're using:

* Ant Design Table
* API calls
* Large forms

👉 `useTransition` is useful when filtering table
👉 `useDeferredValue` helps in search input
👉 Automatic batching improves form state updates

---

If you want, I can give:

* 🔥 React 18 interview questions
* ⚛️ React 18 vs 17 differences
* 🧨 Common mistakes in React 18
* 🧠 Deep explanation of concurrent rendering

Tell me 😎
