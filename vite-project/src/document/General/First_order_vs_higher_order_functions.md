# First Order Function and Higher Order Function in JavaScript

These are very common JavaScript and React interview topics.

---

# 1. First Order Function

A **First Order Function** is a function that:

- Does **not** accept another function as an argument.
- Does **not** return another function.

## Example

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // 30
```

## Why is it a First Order Function?

- Accepts only normal values (`a`, `b`).
- Returns a normal value (`30`).
- No function is passed or returned.

---

# 2. Higher Order Function (HOF)

A **Higher Order Function** is a function that:

✅ Accepts one or more functions as arguments

**OR**

✅ Returns a function

---

## Example 1: Function as an Argument

```javascript
function greet(name) {
    return `Hello ${name}`;
}

function processUser(callback, name) {
    return callback(name);
}

console.log(processUser(greet, "Karthik"));
```

### Output

```text
Hello Karthik
```

### Why is it a Higher Order Function?

`processUser()` accepts another function (`greet`) as an argument.

---

## Example 2: Function Returning a Function

```javascript
function multiply(x) {
    return function (y) {
        return x * y;
    };
}

const double = multiply(2);

console.log(double(5)); // 10
```

### Why is it a Higher Order Function?

`multiply()` returns another function.

---

# Callback Function

A callback function is a function that is passed as an argument to another function.

```javascript
function greet(name) {
    return `Hello ${name}`;
}

function execute(callback) {
    return callback("Karthik");
}

execute(greet);
```

Here:

- `greet` → Callback Function
- `execute` → Higher Order Function

---

# Common Higher Order Functions in JavaScript

## 1. map()

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
```

### Output

```javascript
[2, 4, 6, 8]
```

Here:

- `map()` → Higher Order Function
- `num => num * 2` → Callback Function

---

## 2. filter()

```javascript
const users = [
    { name: "John", active: true },
    { name: "David", active: false }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);
```

Here:

- `filter()` → Higher Order Function
- `user => user.active` → Callback Function

---

## 3. reduce()

```javascript
const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
```

### Output

```javascript
10
```

Here:

- `reduce()` → Higher Order Function
- `(acc, curr) => acc + curr` → Callback Function

---

# React Day-to-Day Usage

## Event Handlers

```jsx
function App() {
    return (
        <button onClick={() => console.log("Clicked")}>
            Click Me
        </button>
    );
}
```

- React receives a function in `onClick`.
- Functions are passed around as values.

---

## React.memo()

```jsx
const UserComponent = React.memo(function UserComponent() {
    return <div>User Component</div>;
});
```

### Why?

- `React.memo()` accepts a component function.
- Returns an optimized component.
- Hence it is a Higher Order Function.

---

## Custom Higher Order Component (HOC)

```jsx
function withLoading(Component) {
    return function EnhancedComponent({ isLoading, ...props }) {
        if (isLoading) {
            return <p>Loading...</p>;
        }

        return <Component {...props} />;
    };
}
```

### Usage

```jsx
const UserWithLoading = withLoading(UserComponent);
```

### Why?

- Receives a component.
- Returns a new component.
- Therefore it is a Higher Order Function.

---

# Real Interview Example

```javascript
const employees = [
    { name: "Karthik", salary: 50000 },
    { name: "John", salary: 70000 },
    { name: "David", salary: 60000 }
];

const employeeNames = employees.map(emp => emp.name);

console.log(employeeNames);
```

### Output

```javascript
["Karthik", "John", "David"]
```

### Interview Explanation

- `map()` is a Higher Order Function.
- It accepts a callback function.
- The callback is executed for every element in the array.

---

# First Order vs Higher Order Function

| First Order Function      | Higher Order Function                    |
| ------------------------- | ---------------------------------------- |
| Works with normal values  | Works with functions                     |
| Does not accept functions | Can accept functions                     |
| Does not return functions | Can return functions                     |
| Simpler behavior          | More reusable and flexible               |
| Example: `add()`          | Example: `map()`, `filter()`, `reduce()` |

---

# Interview Definitions

## First Order Function

> A function that neither accepts another function as an argument nor returns a function.

## Higher Order Function

> A function that accepts one or more functions as arguments, or returns a function as its result.

---

# One-Line Interview Answer

> A First Order Function only works with normal values and neither accepts nor returns functions. A Higher Order Function either accepts another function as an argument or returns a function. Common examples are `map()`, `filter()`, `reduce()`, `React.memo()`, and Higher Order Components (HOCs).