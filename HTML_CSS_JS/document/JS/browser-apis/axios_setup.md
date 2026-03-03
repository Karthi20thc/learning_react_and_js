Perfect 👍 Since you're working with **React + Django (Session Auth + CSRF + cookies)**, here’s the **axios equivalent** for all methods.

---

# 🔥 First — Install Axios

```bash
npm install axios
```

---

# 🔹 Important for Session Auth (Very Important)

With axios, the equivalent of:

```js
credentials: "include"
```

is:

```js
withCredentials: true
```

---

# 🔹 1️⃣ Create Axios Instance (Best Practice)

Instead of repeating config everywhere, create one reusable instance.

```js
import axios from "axios";

// helper to get CSRF token
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let cookie of cookies) {
            cookie = cookie.trim();
            if (cookie.startsWith(name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const api = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true, // VERY IMPORTANT
});

// Automatically attach CSRF token for unsafe methods
api.interceptors.request.use((config) => {
    const csrfToken = getCookie("csrftoken");

    if (["post", "put", "patch", "delete"].includes(config.method)) {
        config.headers["X-CSRFToken"] = csrfToken;
    }

    return config;
});

export default api;
```

Now you don’t need to manually pass CSRF every time.

---

# 🔹 2️⃣ GET

```js
api.get("/api/data/")
   .then(res => console.log(res.data))
   .catch(err => console.error(err));
```

GET does NOT need CSRF.

---

# 🔹 3️⃣ POST

```js
api.post("/api/data/", {
    name: "Karthik",
    value: 100
})
.then(res => console.log(res.data))
.catch(err => console.error(err));
```

CSRF automatically added via interceptor.

---

# 🔹 4️⃣ PUT (Full Update)

```js
api.put("/api/data/1/", {
    name: "Updated Name",
    value: 200
});
```

---

# 🔹 5️⃣ PATCH (Partial Update)

```js
api.patch("/api/data/1/", {
    value: 300
});
```

---

# 🔹 6️⃣ DELETE

```js
api.delete("/api/data/1/");
```

---

# 🔥 Handling Session Timeout (401)

You can also add a response interceptor:

```js
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);
```

Now if session expires → auto redirect.

---

# 🔐 If You Were Using JWT Instead

Instead of CSRF, you would add:

```js
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});
```

And remove CSRF logic.

---

# 📌 Quick Comparison

| fetch                  | axios                 |
| ---------------------- | --------------------- |
| credentials: "include" | withCredentials: true |
| manual JSON.stringify  | automatic             |
| manual status handling | built-in error object |

---

# 🧠 For Your React + Django Financial Project

Using axios instance + interceptors is the cleanest and most scalable approach.

---

If you want next, I can show:

* 🔥 How to handle token refresh (JWT)
* 🔥 How to show global loading spinner
* 🔥 How to cancel requests (important for large tables like yours)

Just tell me 👍
