## Pure Components in React

A **Pure Component** is a component that **avoids unnecessary re-renders** by doing a **shallow comparison** of props and state.

If nothing changes → it does NOT re-render.

---

# 1️⃣ In Class Components → `React.PureComponent`

Instead of:

```js
class MyComponent extends React.Component {
```

You use:

```js
class MyComponent extends React.PureComponent {
```

Internally, React automatically implements:

```js
shouldComponentUpdate(nextProps, nextState)
```

It compares:

* old props vs new props
* old state vs new state

If they are the same (shallow comparison) → no re-render.

---

### Example

```js
import React from "react";

class Child extends React.PureComponent {
  render() {
    console.log("Child Rendered");
    return <div>{this.props.name}</div>;
  }
}

export default Child;
```

If `name` doesn't change → component won’t re-render.

---

# 2️⃣ In Functional Components → `React.memo`

Since you are using functional components (modern React), this is what you use:

```js
import React from "react";

const Child = React.memo(({ name }) => {
  console.log("Child Rendered");
  return <div>{name}</div>;
});

export default Child;
```

`React.memo` = Functional version of PureComponent.

---

# 3️⃣ What Is “Shallow Comparison”?

React compares like this:

```js
prevProps.name === nextProps.name
```

It DOES NOT deeply compare objects.

---

### ⚠️ Important Example

```js
const obj = { age: 25 };

<Child data={obj} />
```

If parent re-renders and creates:

```js
const obj = { age: 25 };
```

Even though value is same, reference is different → component re-renders.

Because:

```js
{} !== {}
```

This is very important in your large table components.

---

# 4️⃣ When Should You Use Pure Components?

Use when:

✔ Component renders often
✔ Props rarely change
✔ Heavy UI (tables, charts, dashboards)
✔ Large antd table rows

In your financial validation tables → very useful.

---

# 5️⃣ When NOT to Use Pure Components

❌ When props are always new objects
❌ When component is very small/light
❌ When debugging render behavior

---

# 6️⃣ Custom Comparison (Advanced)

You can control comparison:

```js
const Child = React.memo(
  ({ data }) => {
    return <div>{data.name}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.data.id === nextProps.data.id;
  }
);
```

If return `true` → skip re-render
If return `false` → re-render

---

# 7️⃣ Pure Component vs useMemo vs useCallback

| Tool        | What It Optimizes      |
| ----------- | ---------------------- |
| React.memo  | Whole component        |
| useMemo     | Expensive calculations |
| useCallback | Function references    |

Example (important for you):

```js
const memoizedColumns = useMemo(() => columns, []);
```

Without this, your antd table may re-render unnecessarily.

---

# 🧠 Real Example (Important for Your antd Table Case)

If you pass inline functions like:

```js
<Table columns={columns} onRow={() => {...}} />
```

That function is recreated every render → child re-renders.

Better:

```js
const handleRow = useCallback(() => {...}, []);
```

---

# 🔥 Simple Rule

If your component:

* Receives stable props
* Is large/heavy
* Re-renders too often

👉 Wrap it in `React.memo`

---

If you want, I can next explain:

* 🔥 Why React re-renders even when state looks same
* 🔥 How PureComponent fails with nested objects
* 🔥 How to optimize large antd tables properly (very useful for your project)
