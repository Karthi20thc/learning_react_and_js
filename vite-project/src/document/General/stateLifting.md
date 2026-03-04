# ⚛️ What is State Lifting in React?

**State Lifting (Lifting State Up)** means:

> Moving state from a child component to its closest common parent so multiple components can share and sync the same data.

Instead of each component managing its own state separately, we “lift” the state up to a parent and pass it down as props.

---

# 🧠 Why Do We Need It?

When:

* Two sibling components need the same data
* You want to sync inputs
* You want a single source of truth

---

# ❌ Without State Lifting (Problem)

Imagine two input components that should stay in sync.

```js
function InputA() {
  const [value, setValue] = useState("");
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

function InputB() {
  const [value, setValue] = useState("");
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}
```

👉 These are independent
👉 Typing in one does NOT update the other

---

# ✅ With State Lifting

Move state to the parent.

```js
function Parent() {
  const [value, setValue] = useState("");

  return (
    <>
      <InputA value={value} setValue={setValue} />
      <InputB value={value} setValue={setValue} />
    </>
  );
}
```

```js
function InputA({ value, setValue }) {
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}

function InputB({ value, setValue }) {
  return <input value={value} onChange={e => setValue(e.target.value)} />;
}
```

---

### 🎯 Result

* Single state
* Both inputs stay synced
* Parent controls the data

---

# 🖼 Visual Representation

```
        Parent (state here)
         /            \
   InputA           InputB
```

Parent becomes the **single source of truth**.

---

# 🔥 Real Example (Like Your Ant Design Form Case)

Suppose:

* One component handles search input
* Another component renders filtered table

Instead of:

```
SearchComponent (state)
TableComponent (state)
```

You lift state to:

```
Dashboard (state here)
   ├── SearchComponent
   └── TableComponent
```

Now search updates table correctly.

---

# 🧠 Interview Definition

> State lifting is the process of moving state to the nearest common ancestor so multiple components can share and control the same data.

---

# 📌 When to Use

Use state lifting when:

* Sibling components need shared data
* You want consistent updates
* You want controlled components

---

# ⚠️ When NOT to Use

If state is needed globally (many deep components):

👉 Use Context
👉 Or Redux

---

# 🚀 Summary

| Concept       | Meaning                           |
| ------------- | --------------------------------- |
| Prop Drilling | Passing props through many layers |
| State Lifting | Moving state upward to share      |

---

If you want next:

* 🔥 Prop drilling vs State lifting difference
* 🧠 Controlled vs Uncontrolled components
* ⚛️ When lifting state causes performance issues
* 🧨 Advanced interview scenario question

Tell me 😎
