## localStorage vs sessionStorage (JavaScript)

Both **localStorage** and **sessionStorage** are part of the **Web Storage API** used to store data in the browser.

They store data as **key–value pairs** and persist on the client side.

---

## localStorage

**localStorage** stores data with **no expiration time**.

Data remains even after:

* Browser closed
* Tab closed
* System restarted

Until you manually delete it.

### Example

```js
// Save data
localStorage.setItem("username", "Karthik");

// Get data
const user = localStorage.getItem("username");

// Remove data
localStorage.removeItem("username");

// Clear all
localStorage.clear();
```

---

## sessionStorage

**sessionStorage** stores data only for the **current browser session**.

Data is deleted when:

* Tab is closed
* Browser is closed

### Example

```js
// Save data
sessionStorage.setItem("token", "12345");

// Get data
const token = sessionStorage.getItem("token");
```

---

## Key Differences

| Feature     | localStorage           | sessionStorage         |
| ----------- | ---------------------- | ---------------------- |
| Lifetime    | Permanent              | Until tab closes       |
| Scope       | All tabs (same origin) | Single tab only        |
| Capacity    | ~5–10MB                | ~5MB                   |
| Persistence | Yes                    | No                     |
| Use Case    | Remember user settings | Temporary session data |

---

## Real-World Use Cases

### localStorage

* Theme preference (dark/light mode)
* Remember login username
* Cart data
* Language settings

### sessionStorage

* Login session token
* Temporary form data
* One-time session info

---

## Important Interview Point

Both store data as **strings only**.

To store objects:

```js
localStorage.setItem("user", JSON.stringify({ name: "Karthik" }));

const user = JSON.parse(localStorage.getItem("user"));
```

---

## Interview One-Line Answer

> localStorage stores data permanently until manually cleared, while sessionStorage stores data only for the duration of the browser session.

---

## Common Interview Follow-Up Questions

Be ready for:

* Cookies vs localStorage
* Storage limits
* Security concerns
* Same-origin policy
* When to use which

---

## Security Warning (Important)

Do NOT store sensitive data like:

```
Passwords
JWT tokens (sometimes)
Bank info
```

Because storage is accessible via JavaScript.

---

If you want, I can explain:

* Cookies vs localStorage vs sessionStorage
* IndexedDB
* Storage events
* Authentication best practices

Just tell me 👍
