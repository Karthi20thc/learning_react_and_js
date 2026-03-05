Here is a **simple working example of Nested Routes in React Router (React Router v6)**.

I'll show a **small dashboard example**, because nested routing is commonly used for layouts like dashboards.

---

# 1️⃣ Folder Structure (Example)

```text
src
 ├── App.js
 ├── pages
 │     ├── Home.js
 │     ├── Dashboard.js
 │     ├── Profile.js
 │     └── Settings.js
```

---

# 2️⃣ App.js (Main Router)

```jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        {/* Parent Route */}
        <Route path="/dashboard" element={<Dashboard />}>

          {/* Nested Routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
```

---

# 3️⃣ Dashboard.js (Parent Layout)

Important part: **Outlet**

```jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>

      <h2>Dashboard Layout</h2>

      <nav>
        <Link to="profile">Profile</Link> |
        <Link to="settings">Settings</Link>
      </nav>

      <hr />

      {/* Child routes render here */}
      <Outlet />

    </div>
  );
}

export default Dashboard;
```

---

# 4️⃣ Profile.js

```jsx
import React from "react";

function Profile() {
  return <h3>Profile Page</h3>;
}

export default Profile;
```

---

# 5️⃣ Settings.js

```jsx
import React from "react";

function Settings() {
  return <h3>Settings Page</h3>;
}

export default Settings;
```

---

# 6️⃣ Home.js

```jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

export default Home;
```

---

# 7️⃣ What Happens When You Navigate

### URL

```text
/
```

Render:

```text
Home Page
```

---

### URL

```text
/dashboard
```

Render:

```text
Dashboard Layout
```

---

### URL

```text
/dashboard/profile
```

Render:

```text
Dashboard Layout
   Profile Page
```

---

### URL

```text
/dashboard/settings
```

Render:

```text
Dashboard Layout
   Settings Page
```

---

# 8️⃣ Visual Rendering Flow

```text
App
 └── Dashboard
        ├── Navbar
        └── Outlet
              ├── Profile
              └── Settings
```

`Outlet` decides **which child route appears**.

---

# 9️⃣ Why Nested Routes Are Useful

Used for layouts like:

```text
/admin
/admin/users
/admin/products
/admin/settings
```

Common layout:

```text
Sidebar
Header
Footer
```

Only **content changes inside `<Outlet />`**.

---

✅ Since you're already working with **React + Ant Design tables**, nested routing is commonly used for **admin dashboards**.

If you want, I can also show:

**A real-world dashboard routing structure used in large React projects (very useful for interviews).**
