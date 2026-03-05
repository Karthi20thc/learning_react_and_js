Below are the **5 most important React Router concepts used in real apps and interviews**, with **clear examples**.

These work with **React Router v6+**.

---

# 1️⃣ Dynamic Routes (`/user/:id`)

Dynamic routes allow you to pass **parameters inside the URL**.

Example:

```text
/users/1
/users/25
/users/100
```

Here `id` is dynamic.

---

## Route Setup

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## Accessing the ID

Use **`useParams()`**

```jsx
import { useParams } from "react-router-dom";

function User() {

  const { id } = useParams();

  return (
    <h2>User ID: {id}</h2>
  );
}

export default User;
```

---

### Visiting

```
/users/25
```

Output:

```
User ID: 25
```

---

# 2️⃣ Protected Routes (Authentication)

Used when a page should be accessed **only after login**.

Example:

```
/login
/dashboard
/profile
```

Only logged-in users can access `/dashboard`.

---

## ProtectedRoute Component

```jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const isLoggedIn = true; // example auth check

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
```

---

## Using It

```jsx
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

---

### Behaviour

| User          | Result               |
| ------------- | -------------------- |
| Logged in     | Dashboard opens      |
| Not logged in | Redirect to `/login` |

---

# 3️⃣ `useNavigate` (Programmatic Navigation)

Used to **redirect users using JavaScript**.

Example: After login → go to dashboard.

---

## Example

```jsx
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {

    // login logic

    navigate("/dashboard");
  };

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}

export default Login;
```

---

### Navigation Types

```javascript
navigate("/dashboard")     // go to route
navigate(-1)               // go back
navigate(1)                // go forward
navigate("/home", {replace:true})
```

---

# 4️⃣ `useParams`

Used to **read parameters from URL**.

Works with **dynamic routes**.

---

## Example

Route:

```jsx
<Route path="/product/:productId" element={<Product />} />
```

Component:

```jsx
import { useParams } from "react-router-dom";

function Product() {

  const { productId } = useParams();

  return (
    <h2>Product ID: {productId}</h2>
  );
}
```

---

### URL

```
/product/456
```

Output

```
Product ID: 456
```

---

# 5️⃣ Layout Routes

Layout routes allow you to **reuse UI like sidebar/header**.

Example layout:

```
Header
Sidebar
Main Content
Footer
```

Only **Main Content changes**.

---

## Layout Component

```jsx
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>

      <h1>Admin Panel</h1>

      <nav>
        <Link to="/users">Users</Link> |
        <Link to="/products">Products</Link>
      </nav>

      <hr/>

      <Outlet />

    </div>
  );
}

export default Layout;
```

---

## Route Setup

```jsx
import Layout from "./Layout";
import Users from "./Users";
import Products from "./Products";

<Routes>

  <Route path="/" element={<Layout />}>

      <Route path="users" element={<Users />} />
      <Route path="products" element={<Products />} />

  </Route>

</Routes>
```

---

### URL

```
/users
```

Render:

```
Admin Panel
Users Page
```

---

### URL

```
/products
```

Render:

```
Admin Panel
Products Page
```

---

# 🔥 Full Real-World Routing Example

```jsx
<Routes>

  <Route path="/" element={<Home />} />

  <Route path="/login" element={<Login />} />

  <Route element={<ProtectedRoute />}>

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/users/:id" element={<UserDetails />} />

  </Route>

</Routes>
```

---

# Visual Router Flow

```
App
 ├── Home
 ├── Login
 └── Dashboard
        ├── Users
        │     └── UserDetails (dynamic)
        └── Settings
```

---

# 🚀 Interview Tip

Very common question:

**Difference between Link and useNavigate**

| Link                  | useNavigate             |
| --------------------- | ----------------------- |
| UI navigation         | programmatic navigation |
| `<Link to="/home" />` | `navigate("/home")`     |
| used in JSX           | used in functions       |

---

If you'd like, I can also show **one complete mini React Router project structure** (like a real production app).
That helps understand routing **10x faster**.
