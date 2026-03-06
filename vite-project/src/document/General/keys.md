In React, **`key`** is a special attribute used when rendering **lists of elements**.
Its purpose is to **help React identify which items changed, were added, or removed**.

This makes React update the UI **efficiently**.

---

# 1️⃣ Example Without Keys

```javascript
const items = ["Apple", "Banana", "Orange"];

function List() {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
```

⚠️ React will show a warning:

```
Each child in a list should have a unique "key" prop
```

Because React **cannot track which item is which**.

---

# 2️⃣ Example With Keys

```javascript
const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" }
];

function List() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

Now React can **track each item properly**.

---

# 3️⃣ How Keys Help React

Suppose we have:

Old List

```
Apple
Banana
Orange
```

New List

```
Apple
Orange
```

If **no keys**:

React may re-render **all items**.

If **keys exist**:

React understands:

```
Banana → removed
```

So it updates **only that item**, not the whole list.

---

# 4️⃣ Real Example (Reordering)

Old

```
1 Apple
2 Banana
3 Orange
```

New

```
3 Orange
1 Apple
2 Banana
```

With keys:

```javascript
<li key={item.id}>
```

React knows items **moved**, not recreated.

---

# 5️⃣ Why Not Use Index as Key?

Bad example:

```javascript
items.map((item, index) => (
  <li key={index}>{item}</li>
))
```

Problem:
If items reorder, React may **update wrong elements**.

Example:

```
A B C
```

Insert `D` at start:

```
D A B C
```

React may think:

```
A → D
B → A
C → B
```

This causes **wrong UI updates**.

---

# 6️⃣ Best Practice

Use **unique stable id**.

```javascript
key={item.id}
```

Avoid:

```javascript
key={index}
```

unless the list **never changes order**.

---

# 🧠 Interview Answer (Short)

**Keys help React identify which list items changed, added, or removed during re-rendering, allowing React’s diffing algorithm to update the DOM efficiently.**

---

💡 A **very common interview follow-up** is:

👉 **"What happens internally if you don't use keys?"**
I can explain that with a **visual diffing example** if you want.
