The **Diffing Algorithm in React** is the process React uses to **compare the previous Virtual DOM with the new Virtual DOM** and determine **what changes need to be applied to the real DOM**.

It helps React **update the UI efficiently**.

---

# 1️⃣ Basic Idea

When state or props change:

```
State/Props change
        ↓
Component re-renders
        ↓
New Virtual DOM created
        ↓
React compares old Virtual DOM vs new Virtual DOM
        ↓
Find differences (Diffing)
        ↓
Update only the changed parts in Real DOM
```

This comparison process is called **Diffing**.

---

# 2️⃣ Why React Uses Diffing

Updating the **real DOM directly is slow**.
So React:

1. Creates **Virtual DOM**
2. Compares changes
3. Updates **only necessary elements**

Example:

Old UI

```html
<h1>Hello</h1>
```

New UI

```html
<h1>Hello Karthik</h1>
```

React will **only update the text**, not recreate the whole `<h1>` element.

---

# 3️⃣ Diffing Rules React Uses

React uses **3 main rules** to make diffing fast.

---

## Rule 1: Different Element Types → Replace Entire Node

Example:

Old

```html
<div>Hello</div>
```

New

```html
<span>Hello</span>
```

React will **destroy `<div>` and create `<span>`**.

---

## Rule 2: Same Element Type → Update Only Attributes

Example:

Old

```html
<button class="blue">Click</button>
```

New

```html
<button class="red">Click</button>
```

React **only updates the class**.

---

## Rule 3: Lists Use `key`

When rendering lists, React uses **keys** to track items.

Example:

```javascript
const list = items.map(item => (
  <li key={item.id}>{item.name}</li>
));
```

Keys help React know:

* which item changed
* which item moved
* which item was removed

Without keys → React may **re-render the whole list**.

---

# 4️⃣ Example

```javascript
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

When `count` changes:

React only updates:

```
<h1>{count}</h1>
```

The button and div **remain unchanged**.

---

# 5️⃣ Complexity

React uses a smart diffing algorithm with **O(n)** complexity.

Without this optimization, comparing DOM trees would be **O(n³)**.

---

# 🧠 Simple Interview Definition

**The Diffing Algorithm is the process React uses to compare the old Virtual DOM with the new Virtual DOM and update only the changed elements in the real DOM.**

---

✅ Since you are preparing **React interview questions**, a very common follow-up question is:

**"What is reconciliation in React?"**

I can also explain that if you want.
