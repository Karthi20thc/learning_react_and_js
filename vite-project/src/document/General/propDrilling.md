# ⚛️ What is Prop Drilling?

**Prop Drilling** happens when you pass data from a parent component to a deeply nested child component **through multiple intermediate components**, even if those intermediate components don’t use the data.

👉 The data is just “drilled” down layer by layer.

---

## 🧠 Simple Example

Imagine this component structure:

```
App
 └── Parent
      └── Child
           └── GrandChild
```

You want to pass `user` from `App` to `GrandChild`.

---

## ❌ Prop Drilling Example

```js
// App.js
function App() {
  const user = "Karthik";

  return <Parent user={user} />;
}
```

```js
// Parent.js
function Parent({ user }) {
  return <Child user={user} />;
}
```

```js
// Child.js
function Child({ user }) {
  return <GrandChild user={user} />;
}
```

```js
// GrandChild.js
function GrandChild({ user }) {
  return <h1>Hello {user}</h1>;
}
```

### 🔎 Problem

* `Parent` does not use `user`
* `Child` does not use `user`
* But they still pass it

This is **prop drilling**.

---

# 🎯 Why It’s a Problem

1. Hard to maintain
2. Too many props
3. Refactoring becomes messy
4. Deep nesting = more boilerplate

Especially in large apps (like dashboards, tables, forms 👀)

---

# ✅ Solution 1: Context API

Instead of passing props manually, use React Context.

```js
import { createContext, useContext } from "react";

const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="Karthik">
      <Parent />
    </UserContext.Provider>
  );
}

function GrandChild() {
  const user = useContext(UserContext);
  return <h1>Hello {user}</h1>;
}
```

Now:

* No prop drilling
* Cleaner code

---

# ✅ Solution 2: State Management Library

For large apps:

* Redux
* Zustand
* Recoil

Useful when:

* Many components need shared data
* Complex state updates

---

# 🔥 Interview Definition

> Prop drilling is the process of passing data from a parent component to deeply nested child components through intermediate components that do not use the data.

---

# 🧠 Real Use Case (For You)

If you are:

* Passing form state from top component
* Passing table config deep inside
* Passing authentication user info

And intermediate components don’t use it → that’s prop drilling.

In such cases:
👉 Use Context
👉 Or a global state solution

---

If you want next:

* 🔥 Context vs Redux difference
* 🧠 When NOT to use Context
* 🧨 Performance issues with Context
* ⚛️ Real project architecture example

Tell me 😎
