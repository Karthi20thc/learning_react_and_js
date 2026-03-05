Good 👍 — now let's look at the **Senior React Developer way of implementing debounce using `useRef`**.
This avoids unnecessary re-renders and gives better control.

---

# 1️⃣ Debounce Input Using `useRef` (Senior Approach)

```jsx
import React, { useState, useRef } from "react";

const DebounceInput = () => {

  const [value, setValue] = useState("");
  const timerRef = useRef(null);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    // clear previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // start new timer
    timerRef.current = setTimeout(() => {
      console.log("API Call:", newValue);
    }, 500);
  };

  return (
    <div>
      <h3>Debounce Search</h3>

      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleChange}
      />

    </div>
  );
};

export default DebounceInput;
```

---

# 2️⃣ Why `useRef` is Better Here

| Method               | Problem               |
| -------------------- | --------------------- |
| `useState` timer     | Causes re-render      |
| `useEffect` debounce | Slightly heavier      |
| `useRef` timer       | No re-render, fastest |

`useRef` stores **mutable values without triggering re-render**.

```javascript
const timerRef = useRef(null);
```

So React **does not re-render when the timer changes**.

---

# 3️⃣ Flow of Execution

```
User types "H"
     ↓
Timer starts (500ms)

User types "He"
     ↓
Previous timer cleared
New timer starts

User stops typing
     ↓
500ms completes
     ↓
API call executes
```

---

# 4️⃣ Reusable Debounce Function (Advanced)

This is **closer to lodash debounce**.

```jsx
function debounce(fn, delay) {
  let timer;

  return function (...args) {

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);

  };
}
```

Usage in React:

```jsx
const debouncedSearch = useRef(
  debounce((value) => {
    console.log("API:", value);
  }, 500)
).current;
```

```
<input
  onChange={(e) => debouncedSearch(e.target.value)}
/>
```

---

# 5️⃣ Real Production Example

Search API:

```javascript
const searchUser = async (query) => {
  const res = await axios.get(`/api/users?q=${query}`);
  setUsers(res.data);
};
```

With debounce:

```javascript
const debouncedSearch = useRef(
  debounce(searchUser, 500)
).current;
```

---

# 6️⃣ Debounce vs Throttle (Interview Favourite)

| Feature   | Debounce         | Throttle           |
| --------- | ---------------- | ------------------ |
| Trigger   | After user stops | At fixed intervals |
| Example   | Search bar       | Scroll event       |
| Behaviour | Delays execution | Limits frequency   |

Example:

```
Debounce → Google search
Throttle → Window scroll
```

---

# 7️⃣ Real Companies Expect This Pattern

```
useRef + debounce function
```

because it:

✔ avoids re-renders
✔ prevents memory leaks
✔ reusable logic
✔ production friendly

---

💡 Since you're learning **React deeply (like hooks, router, etc.)**, the **next very important concept after debounce** is:

### ⚡ Throttle implementation in React (scroll / resize optimization)

I can also show:

* **Debounce vs Throttle with real React examples**
* **10 React performance tricks senior devs use**

It will help a lot for **React interviews.**
