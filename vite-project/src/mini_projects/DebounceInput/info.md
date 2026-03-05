In React, **debouncing** means delaying the execution of a function until the user stops typing for some time (for example 500ms). This helps avoid too many API calls while typing.

You asked for **pure HTML + CSS input in React (no antd)**, so we will use a normal `<input>` element and implement debounce with **JavaScript + React hooks**.

---

# 1️⃣ Basic Debounce Input in React

### Example

```jsx
import React, { useState, useEffect } from "react";

const DebounceInput = () => {

  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 500); // debounce time

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  useEffect(() => {
    if (debouncedValue) {
      console.log("API Call with:", debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div>
      <h3>Debounce Input</h3>

      <input
        type="text"
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

    </div>
  );
};

export default DebounceInput;
```

---

# 2️⃣ How it Works

Flow:

```
User typing
     ↓
value state updates immediately
     ↓
useEffect starts 500ms timer
     ↓
If user types again → previous timer cleared
     ↓
When user stops typing for 500ms
     ↓
debouncedValue updates
     ↓
API call triggered
```

---

# 3️⃣ Visual Flow (Important for Interviews)

```
User Input
   |
   v
setValue()
   |
   v
useEffect Timer (500ms)
   |
   |---- user types again → clearTimeout()
   |
   v
Timer completes
   |
   v
setDebouncedValue()
   |
   v
API Call
```

---

# 4️⃣ Real World Example (Search API)

```jsx
useEffect(() => {
  if (!debouncedValue) return;

  fetch(`/api/search?q=${debouncedValue}`)
    .then(res => res.json())
    .then(data => console.log(data));

}, [debouncedValue]);
```

---

# 5️⃣ Reusable Debounce Hook (Best Practice)

```jsx
function useDebounce(value, delay) {

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {

    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);

  }, [value, delay]);

  return debouncedValue;
}
```

Usage:

```jsx
const debouncedValue = useDebounce(value, 500);
```

---

# 6️⃣ Interview Tip

Debounce is mainly used for:

* 🔍 Search bars
* 🌐 API calls
* 📊 Filtering large lists
* 🧾 Form validation

Example:

```
Google Search
Amazon Search
Autocomplete dropdown
```

---

If you want, I can also show a **🔥 Senior React Developer version (useRef debounce)** which is **what companies expect in interviews.**
