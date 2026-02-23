## Cookies vs localStorage vs sessionStorage

All three are used to **store data in the browser**, but they differ in **lifetime, size, and purpose**.

---

# 🍪 Cookies

Cookies store small amounts of data and are sent to the **server with every HTTP request**.

### Example

```js
document.cookie = "username=Karthik; expires=Fri, 31 Dec 2026 12:00:00 UTC; path=/";
```

---

# 💾 localStorage

Stores data **permanently** in the browser until manually cleared.

### Example

```js
localStorage.setItem("user", "Karthik");
```

---

# ⏳ sessionStorage

Stores data only for the **current browser tab session**.

### Example

```js
sessionStorage.setItem("token", "12345");
```

---

# 🔥 Key Differences Table

| Feature           | Cookies                   | localStorage           | sessionStorage         |
| ----------------- | ------------------------- | ---------------------- | ---------------------- |
| Storage Size      | ~4KB                      | ~5–10MB                | ~5MB                   |
| Lifetime          | Expiry date               | Until deleted          | Until tab closed       |
| Sent to Server    | Yes (every request)       | No                     | No                     |
| Accessible via JS | Yes                       | Yes                    | Yes                    |
| Scope             | All tabs (same domain)    | All tabs (same origin) | Single tab             |
| Best Use          | Authentication / tracking | Persistent data        | Temporary session data |

---

# 🧠 When to Use What

### Use Cookies

* Authentication tokens (HTTP-only cookies)
* User tracking
* Server communication

### Use localStorage

* Theme settings (dark/light)
* Remember username
* Cart data
* Preferences

### Use sessionStorage

* Temporary form data
* Session token (short-lived)
* Page state

---

# 🔐 Security Differences (Important)

Cookies can be **HTTP-only**:

```http
Set-Cookie: token=abc; HttpOnly; Secure
```

This means JavaScript cannot access it → more secure.

localStorage/sessionStorage:

❌ Always accessible via JavaScript → vulnerable to XSS attacks.

---

# ⭐ Interview One-Line Answer

> Cookies are small data stored and sent with every server request, localStorage stores persistent data in the browser, and sessionStorage stores temporary data for a single session.

---

# 🚀 Important Interview Follow-Ups

Be ready for:

* What is HttpOnly cookie?
* What is Secure flag?
* SameSite attribute?
* Storage limits?
* Which is more secure?
* JWT storage best practice?

---

# 🔥 Modern Best Practice

Authentication:

```
Use HttpOnly Secure Cookies ✅
Avoid localStorage for sensitive tokens ❌
```

---

If you want, I can explain next:

✅ JWT storage (best practice)
✅ IndexedDB vs localStorage
✅ Browser storage security
✅ Authentication flow diagram

Just tell me 👍
