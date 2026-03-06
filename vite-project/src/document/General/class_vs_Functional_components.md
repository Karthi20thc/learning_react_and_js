In React, **Class Components** and **Functional Components** are two ways to create components.

---

# 1️⃣ Class Components

A **Class Component** is created using an **ES6 class** and extends `React.Component`.

### Example

```javascript
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

export default Welcome;
```

### Characteristics

* Uses **`class` keyword**
* Must extend **`React.Component`**
* Uses **`this` keyword**
* State managed with **`this.state`**
* Lifecycle methods like:

  * `componentDidMount`
  * `componentDidUpdate`
  * `componentWillUnmount`

### Example with State

```javascript
class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

---

# 2️⃣ Functional Components

A **Functional Component** is just a **JavaScript function**.

### Example

```javascript
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
```

### With Hooks (Modern React)

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### Characteristics

* Uses **plain function**
* Uses **React Hooks**
* No `this`
* Simpler and cleaner
* Preferred in **modern React**

---

# 📊 Key Differences

| Feature        | Class Component   | Functional Component |
| -------------- | ----------------- | -------------------- |
| Syntax         | ES6 Class         | JavaScript Function  |
| State          | `this.state`      | `useState` hook      |
| Lifecycle      | Lifecycle methods | `useEffect`          |
| `this` keyword | Required          | Not used             |
| Code length    | More boilerplate  | Shorter              |
| Performance    | Slightly heavier  | Better optimized     |
| Modern usage   | Rarely used       | Recommended          |

---

# Example Comparison

### Class

```javascript
class App extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

### Functional

```javascript
function App() {
  return <h1>Hello</h1>;
}
```

---

# 🧠 Interview Answer (Short)

**Functional components are simpler and use hooks for state and lifecycle, while class components use ES6 classes, `this.state`, and lifecycle methods. Modern React prefers functional components.**

---

✅ Since you are **learning React interview topics**, I can also show:

* **useEffect vs componentDidMount**
* **React.memo vs useMemo**
* **Virtual DOM**
* **Controlled vs Uncontrolled components**

These are **very common React interview questions.**
