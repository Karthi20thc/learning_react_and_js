Perfect 👍 Since you're working with **React + Django (session auth + CSRF)**, I’ll give you clean templates for **all HTTP methods** using `fetch`.

These examples assume:

* ✅ Session authentication (cookie-based)
* ✅ CSRF protection enabled (Django default)
* ✅ Cross-origin (e.g., `localhost:3000 → localhost:8000`)
* ✅ `credentials: "include"` is required

---

# 🔹 1️⃣ GET Request

👉 GET usually does NOT require CSRF (safe method)

```js
fetch("http://localhost:8000/api/data/", {
    method: "GET",
    credentials: "include",
})
.then(res => {
    if (res.status === 401) {
        // redirect to login
    }
    return res.json();
})
.then(data => console.log(data))
.catch(err => console.error(err));
```

---

# 🔹 2️⃣ POST Request

👉 Requires CSRF token

```js
fetch("http://localhost:8000/api/data/", {
    method: "POST",
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
    },
    body: JSON.stringify({
        name: "Karthik",
        value: 100
    }),
});
```

---

# 🔹 3️⃣ PUT Request (Full Update)

```js
fetch("http://localhost:8000/api/data/1/", {
    method: "PUT",
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
    },
    body: JSON.stringify({
        name: "Updated Name",
        value: 200
    }),
});
```

---

# 🔹 4️⃣ PATCH Request (Partial Update)

```js
fetch("http://localhost:8000/api/data/1/", {
    method: "PATCH",
    credentials: "include",
    headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
    },
    body: JSON.stringify({
        value: 300
    }),
});
```

---

# 🔹 5️⃣ DELETE Request

```js
fetch("http://localhost:8000/api/data/1/", {
    method: "DELETE",
    credentials: "include",
    headers: {
        "X-CSRFToken": csrfToken,
    },
});
```

⚠ Some Django setups require CSRF for DELETE, some don’t — safer to include it.

---

# 🔥 Important: How to Get CSRF Token in React

If Django sets `csrftoken` cookie, you can extract it like this:

```js
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

const csrfToken = getCookie("csrftoken");
```

---

# 🧠 Best Practice (Reusable API Helper)

Since you're building a larger React app, better create a reusable helper:

```js
const apiCall = async (url, method = "GET", data = null) => {
    const options = {
        method,
        credentials: "include",
        headers: {},
    };

    if (method !== "GET") {
        options.headers["Content-Type"] = "application/json";
        options.headers["X-CSRFToken"] = getCookie("csrftoken");
    }

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (response.status === 401) {
        window.location.href = "/login";
    }

    return response.json();
};
```

Usage:

```js
apiCall("/api/data/", "POST", { name: "Test" });
apiCall("/api/data/1/", "PATCH", { value: 200 });
apiCall("/api/data/1/", "DELETE");
```

---

# 📌 Quick Rule Summary

| Method | Needs CSRF? |
| ------ | ----------- |
| GET    | ❌ No        |
| POST   | ✅ Yes       |
| PUT    | ✅ Yes       |
| PATCH  | ✅ Yes       |
| DELETE | ✅ Usually   |

---

If you want, I can also give:

* 🔥 Same templates using axios
* 🔥 JWT version of all methods
* 🔥 How to auto-refresh session

Just tell me which auth you're using in your project.
