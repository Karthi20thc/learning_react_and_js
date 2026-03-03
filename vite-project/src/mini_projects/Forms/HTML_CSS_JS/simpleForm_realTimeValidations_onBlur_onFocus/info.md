Excellent 👌 This is a very important interview topic.

You generally have **3 validation strategies** in React:

| Event      | When it runs           | When to use                                         |
| ---------- | ---------------------- | --------------------------------------------------- |
| `onChange` | Every keystroke        | Real-time validation                                |
| `onBlur`   | When input loses focus | Show error after user leaves field (most common UX) |
| `onFocus`  | When input gets focus  | Usually used to clear error                         |

---

# 🎯 What Should You Use?

### ✅ Best Practice (Industry Standard)

👉 **Combine `onChange` + `onBlur`**

* `onChange` → update value
* `onBlur` → validate that field
* `onFocus` → optionally clear error

This avoids showing error while the user is still typing.

---

# 🔥 Option 1: Validation on Every Keystroke (`onChange`)

This validates immediately while typing.

### Update your `handleChange`:

```jsx
const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    const updatedValue = type === 'checkbox' ? checked : value

    setFormData({
        ...formData,
        [name]: updatedValue
    })

    validateField(name, updatedValue)
}
```

---

### Add Field-Level Validation Function

```jsx
const validateField = (name, value) => {
    let error = ''

    switch (name) {
        case 'fullName':
            if (!value.trim()) error = "Full name is required"
            break

        case 'email':
            if (!/\S+@\S+\.\S+/.test(value))
                error = "Invalid email"
            break

        case 'password':
            if (value.length < 6)
                error = "Password must be 6 characters"
            break

        default:
            break
    }

    setErrors(prev => ({
        ...prev,
        [name]: error
    }))
}
```

Now validation runs **on every keystroke**.

---

# 🚀 Option 2 (Better UX): Validate Only After User Leaves Field (`onBlur`)

This is what most production apps do.

### Add:

```jsx
const handleBlur = (e) => {
    const { name, value } = e.target
    validateField(name, value)
}
```

### Then in input:

```jsx
<input
    type="text"
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    onBlur={handleBlur}
    className={errors.fullName ? styles.errorInput : ''}
/>
```

Now:

* User types freely
* When they leave the field → error shows

Much cleaner UX.

---

# 🧠 What About `onFocus`?

Usually used to clear errors:

```jsx
const handleFocus = (e) => {
    const { name } = e.target
    setErrors(prev => ({
        ...prev,
        [name]: ''
    }))
}
```

Add:

```jsx
onFocus={handleFocus}
```

Now:

* Error shows on blur
* When user clicks back → error disappears

Very professional behavior.

---

# 🔥 Which Should YOU Use?

Since you're preparing for interviews:

### If interviewer asks:

👉 “How do you implement real-time validation?”

Answer:

> We can use `onChange` for real-time validation.
> But for better UX, we combine `onBlur` for validation and `onFocus` to clear errors.

That answer shows maturity.

---

# 🎯 Interview Level Summary

| Level        | Approach             |
| ------------ | -------------------- |
| Beginner     | Validate on submit   |
| Intermediate | Validate on blur     |
| Advanced     | Real-time + debounce |
| Professional | Use React Hook Form  |

---

If you want next level, I can show you:

* Debounced validation (very important concept)
* Prevent submit button until form valid
* Reusable validation hook
* How React Hook Form does this internally

Tell me what level you're aiming for 😎
