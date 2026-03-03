## 🔄 Lifecycle Methods in React

Lifecycle methods are **special methods in Class Components** that run at different stages of a component’s life.

A component has 3 main phases:

1️⃣ Mounting
2️⃣ Updating
3️⃣ Unmounting

> ⚠️ Important: Lifecycle methods apply to **class components**.
> In modern React (which you're using), we replicate them using **Hooks (`useEffect`)**.

---

# 1️⃣ Mounting Phase (Component Created & Added to DOM)

These run when component loads for the first time.

### Methods:

* `constructor()`
* `static getDerivedStateFromProps()`
* `render()`
* `componentDidMount()`

---

### Most Important: `componentDidMount()`

Used for:

* API calls
* Setting up subscriptions
* Timers
* DOM manipulation

Example:

```js
class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component Mounted");
  }

  render() {
    return <div>Hello</div>;
  }
}
```

---

# 2️⃣ Updating Phase (Props or State Changed)

Triggered when:

* `setState()` runs
* Props change
* Parent re-renders

### Methods:

* `static getDerivedStateFromProps()`
* `shouldComponentUpdate()`
* `render()`
* `getSnapshotBeforeUpdate()`
* `componentDidUpdate()`

---

### Important Ones:

### 🔹 `shouldComponentUpdate()`

Controls re-rendering.

```js
shouldComponentUpdate(nextProps, nextState) {
  return nextProps.name !== this.props.name;
}
```

Used for performance optimization (PureComponent does this automatically).

---

### 🔹 `componentDidUpdate()`

Runs after update.

```js
componentDidUpdate(prevProps) {
  if (prevProps.id !== this.props.id) {
    console.log("ID changed");
  }
}
```

Used for:

* Refetching data
* Syncing with backend

---

# 3️⃣ Unmounting Phase (Component Removed)

### Method:

* `componentWillUnmount()`

Used for cleanup:

```js
componentWillUnmount() {
  clearInterval(this.timer);
}
```

Very important to avoid memory leaks.

---

# 🔥 Visual Lifecycle Flow

```
Mount:
constructor → render → componentDidMount

Update:
render → componentDidUpdate

Unmount:
componentWillUnmount
```

---

# 🚀 Modern React (Hooks Equivalent)

Since you're using functional components, here's how lifecycle works now:

## 🔹 Equivalent Using `useEffect`

### ComponentDidMount

```js
useEffect(() => {
  console.log("Mounted");
}, []);
```

---

### ComponentDidUpdate

```js
useEffect(() => {
  console.log("Updated");
}, [value]);
```

---

### ComponentWillUnmount

```js
useEffect(() => {
  return () => {
    console.log("Unmounted");
  };
}, []);
```

---

# 🧠 For Your React + Django Project

In your case:

✔ API calls → `useEffect([])`
✔ Refetch on filter change → `useEffect([filter])`
✔ Cleanup event listeners → return function inside `useEffect`

Example:

```js
useEffect(() => {
  axios.get("/api/data").then(res => setData(res.data));

  return () => {
    console.log("Cleanup if needed");
  };
}, []);
```

---

# ⚠️ Important Notes

* Class lifecycle methods are rarely used in new projects (2026 standard = Hooks).
* `componentWillMount`, `componentWillReceiveProps` are deprecated.
* `useEffect` can combine mount, update, and unmount logic.

---

# 🎯 Simple Interview Answer

> React lifecycle methods are special methods in class components that run during mounting, updating, and unmounting phases of a component.

---

If you want, I can next explain:

* 🔥 Detailed flow diagram with real execution order
* 🔥 Common mistakes with useEffect (very important for your API calls)
* 🔥 How lifecycle affects performance in large antd tables
