Yes ✅ — exactly. Let me explain clearly step-by-step so there is no confusion.

You are asking:

> So this session is sent by backend and sent back to server?

👉 **Yes. That’s exactly how session authentication works.**

---

# 🔄 How Session Authentication Works (Django Default)

## 🟢 Step 1: Login Request

You send username & password to backend:

```http
POST /login
```

---

## 🟢 Step 2: Backend Creates Session

After successful login:

* Django creates a session in database
* Generates a **session ID**
* Sends it back in a **Set-Cookie header**

Example response:

```http
Set-Cookie: sessionid=abc123xyz; HttpOnly;
```

This is sent by backend.

---

## 🟢 Step 3: Browser Stores Cookie

The browser automatically stores:

```text
sessionid=abc123xyz
```

You don’t manually store it.

---

## 🟢 Step 4: Browser Sends It Back Automatically

On every future request to that backend:

```http
GET /api/data
Cookie: sessionid=abc123xyz
```

Browser automatically sends the cookie back to server.

So:

> Backend → Sends session ID
> Browser → Stores it
> Browser → Sends it back on every request
> Backend → Uses it to identify the user

---

# 🧠 What Backend Does With It

When Django receives:

```http
Cookie: sessionid=abc123xyz
```

It:

1. Looks up session in DB
2. Finds associated user
3. Authenticates the request

---

# 🔥 Important (React + Django Cross-Origin Case)

If your React is on:

```text
http://localhost:3000
```

and Django is on:

```text
http://localhost:8000
```

Then you MUST add:

```js
credentials: "include"
```

Otherwise browser will NOT send the cookie.

Example:

```js
fetch("http://localhost:8000/api/data", {
    method: "GET",
    credentials: "include"
});
```

---

# 🆚 Compared to JWT

| Session                   | JWT                               |
| ------------------------- | --------------------------------- |
| Server stores session     | Server does NOT store token       |
| Cookie automatically sent | You manually send token in header |
| Needs CSRF                | Usually no CSRF needed            |

---

# 📌 Final Answer

Yes ✅

Session ID is:

1. Created by backend
2. Sent to browser
3. Stored as cookie
4. Automatically sent back to server on every request

---

If you want next, I can explain:

* Why session is considered more secure in some cases
* Or why JWT is better for microservices
* Or how CSRF connects to session auth 👀
