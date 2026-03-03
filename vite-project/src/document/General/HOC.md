## Higher Order Function (HOF) in React

First understand the base concept:

### 🔹 What is a Higher Order Function (JavaScript)?

A **Higher Order Function** is:

* A function that **takes another function as argument**, OR
* A function that **returns another function**

Example:

```js
function greet(name) {
  return function(message) {
    console.log(message + " " + name);
  };
}

const greetKarthik = greet("Karthik");
greetKarthik("Hello");
```

---

# Now in React 👇

In React we mostly use:

# 🔥 Higher Order Component (HOC)

A **Higher Order Component** is a function that:

* Takes a component
* Returns a new enhanced component

---

## Basic Syntax

```js
const withSomething = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};
```

It enhances a component without modifying it.

---

# 🧠 Real Example 1 — Add Loading Logic

```js
const withLoading = (Component) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
};
```

Usage:

```js
const UserList = ({ users }) => {
  return <div>{users.length} Users</div>;
};

export default withLoading(UserList);
```

Now `UserList` automatically gets loading behavior.

---

# 🧠 Real Example 2 — Authentication Wrapper (Useful for Your Django + React)

```js
const withAuth = (Component) => {
  return (props) => {
    const isAuthenticated = localStorage.getItem("token");

    if (!isAuthenticated) {
      return <div>Please Login</div>;
    }

    return <Component {...props} />;
  };
};
```

Wrap protected pages:

```js
export default withAuth(Dashboard);
```

---

# 🧠 Real Example 3 — Logging Re-renders

```js
const withLogger = (Component) => {
  return (props) => {
    console.log("Rendering:", Component.name);
    return <Component {...props} />;
  };
};
```

---

# 🧩 Why Use HOC?

✔ Reuse logic
✔ Avoid repeating code
✔ Separate concerns
✔ Keep components clean

Especially helpful in:

* API handling
* Permissions
* Error boundaries
* Validation wrappers
* Analytics tracking

---

# ⚠️ Downsides of HOC

❌ Can create wrapper hell
❌ Hard to debug
❌ Props collision issues
❌ Replaced mostly by Hooks in modern React

---

# 🔄 HOC vs Hooks

| HOC                      | Hooks                 |
| ------------------------ | --------------------- |
| Wraps component          | Used inside component |
| Used in class components | Functional only       |
| Older pattern            | Modern pattern        |
| Harder to trace          | Cleaner               |

Example using hook instead of HOC:

```js
const useAuth = () => {
  return localStorage.getItem("token");
};
```

Cleaner and simpler.

---

# 🚀 Important for Your Project

Since you are:

* Using functional components
* Working with large validation tables
* Integrating Django backend

👉 Hooks are usually better than HOCs in 2026.

But understanding HOC is important for:

* Legacy code
* Third-party libraries
* Older enterprise apps

---

# 🔥 Quick Interview Definition

> A Higher Order Component is a function that takes a component and returns a new component with enhanced functionality.

---

If you want next, I can explain:

* 🔥 HOC vs Render Props
* 🔥 How Redux `connect()` is a HOC
* 🔥 How to build reusable API wrapper for your project using HOC or hook
