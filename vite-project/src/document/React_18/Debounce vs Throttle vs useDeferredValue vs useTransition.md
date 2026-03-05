Since you're learning **React deeply**, understanding these four is important for **performance optimization**:

* Debounce
* Throttle
* `useDeferredValue`
* `useTransition`

All of them help **prevent UI lag or excessive work**, but they solve **different problems**.

---

# 1️⃣ Debounce

**Definition**

Debounce delays execution until the user **stops triggering an event** for a specific time.

### Example

Search input.

```javascript
const debouncedSearch = debounce((value) => {
  console.log("API call:", value);
}, 500);
```

### Behaviour

User types quickly:

```
r
re
rea
reac
react
```

With **500ms debounce**

```
Only "react" triggers API call
```

### Best Use Cases

* Search API
* Form validation
* Autocomplete
* Filtering lists

---

# 2️⃣ Throttle

**Definition**

Throttle ensures a function runs **at most once within a fixed time interval**.

### Example

```javascript
function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}
```

### Behaviour

User scrolls continuously:

```
scroll scroll scroll scroll scroll
```

With **1s throttle**

```
Function runs every 1 second
```

### Best Use Cases

* Scroll events
* Resize events
* Mouse movement
* Infinite scroll

---

# 3️⃣ `useDeferredValue` (React 18)

`useDeferredValue` lets React **delay updating a value so the UI stays responsive**.

Useful when rendering **large lists or expensive components**.

### Example

```jsx
import { useState, useDeferredValue } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <SlowList query={deferredQuery} />
    </>
  );
}
```

### What Happens

User types quickly:

```
React updates input immediately
Heavy list rendering is delayed
```

So the **input never freezes**.

### Best Use Cases

* Large search results
* Big lists
* Expensive components

---

# 4️⃣ `useTransition` (React 18)

`useTransition` lets you mark **state updates as non-urgent**.

React prioritizes **important UI updates first**.

### Example

```jsx
import { useState, useTransition } from "react";

function Search() {

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      setList(generateBigList(value));
    });
  };

  return (
    <>
      <input value={input} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <List items={list} />
    </>
  );
}
```

### Behaviour

```
Input updates immediately
Heavy rendering happens later
```

---

# 5️⃣ Visual Comparison

```
User Typing
     |
     |
     +-------- Debounce --------> wait until user stops
     |
     +-------- Throttle --------> run every X ms
     |
     +-------- useDeferredValue -> delay heavy UI updates
     |
     +-------- useTransition ----> mark updates as low priority
```

---

# 6️⃣ Key Differences

| Feature                    | Debounce        | Throttle        | useDeferredValue     | useTransition    |
| -------------------------- | --------------- | --------------- | -------------------- | ---------------- |
| Type                       | JS technique    | JS technique    | React hook           | React hook       |
| Purpose                    | Delay execution | Limit frequency | Delay rendering      | Prioritize UI    |
| Common Use                 | Search API      | Scroll          | Large list rendering | Heavy UI updates |
| Controls API calls         | ✅               | ❌               | ❌                    | ❌                |
| Improves UI responsiveness | ⚠️               | ⚠️               | ✅                    | ✅                |

---

# 7️⃣ Real Production Example

Search page optimization:

```
Input typing
   |
Debounce API request
   |
API response
   |
useTransition render results
```

Companies like **Google, Amazon, Netflix** use combinations like this.

---

✅ **Senior React pattern**

```
Debounce → reduce API calls
useTransition → smooth rendering
```

---

If you'd like, I can also show a **🔥 advanced React performance example**:

**"Search 50,000 items without UI lag using debounce + useTransition"**

This is a **very common senior React interview coding question.**
