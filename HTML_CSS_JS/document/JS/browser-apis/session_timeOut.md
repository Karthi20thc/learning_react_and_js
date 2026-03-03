Excellent question 👌 — this is very important in real-world apps (especially financial/internal tools like yours).

Let’s break it down clearly.

---

# ⏳ What Happens When a Session Times Out?

When a session times out:

> 🔐 The server deletes or invalidates the session
> 🍪 The session cookie becomes useless
> 🚫 User becomes unauthenticated

---

# 🔄 Step-by-Step Flow

## 🟢 Before Timeout

Browser sends:

```http
Cookie: sessionid=abc123xyz
```

Server checks DB → session exists → request allowed ✅

---

## 🔴 After Timeout

Session expired in server database.

Browser still sends:

```http
Cookie: sessionid=abc123xyz
```

But now:

* Server looks up session
* Session not found / expired
* User treated as **not logged in**

Server responds with:

```http
401 Unauthorized
```

or

```http
403 Forbidden
```

---

# 💻 What Happens in UI?

In React:

If you call an API after timeout:

```js
fetch("/api/data", {
   credentials: "include"
})
```

Response might be:

```json
{
   "detail": "Authentication credentials were not provided."
}
```

or status:

```js
response.status === 401
```

---

# 🎯 What UI Should Do

Best practice:

```js
if (response.status === 401) {
   // redirect to login page
}
```

This creates:

> 🔄 Auto logout when session expires

---

# 🧠 Important: Browser Cookie vs Server Session

Very important concept:

* Cookie may still exist in browser
* But session may not exist in server

Server always wins.

---

# ⏰ How Long Until Timeout?

In Django:

```python
SESSION_COOKIE_AGE = 1800  # 30 minutes
```

Default is usually 2 weeks unless configured.

You can also configure:

```python
SESSION_EXPIRE_AT_BROWSER_CLOSE = True
```

Then session expires when browser closes.

---

# 🏦 In Real Financial Apps

Common pattern:

* 10–30 minutes inactivity → logout
* Warning popup before expiration
* Automatic redirect to login

---

# 🔐 Compared to JWT Timeout

| Session Timeout             | JWT Expiry                       |
| --------------------------- | -------------------------------- |
| Server removes session      | Token expires based on exp claim |
| Can be invalidated anytime  | Harder unless blacklist          |
| Browser cookie still exists | Token still exists but invalid   |

---

# 📌 Final Simple Answer

When session times out:

1. Server deletes session
2. Browser still sends cookie
3. Server rejects request
4. UI gets 401
5. User must login again

---

If you want, I can also explain:

* 🔥 How to implement auto-logout popup in React
* 🔥 How inactivity timer works
* 🔥 How to check session validity on app load

These are common interview + real project questions.
