In CSS, **`!important`** is used to **override all other CSS rules** for a property.

It forces the browser to **apply that style no matter what other styles exist** (except another `!important` with higher specificity).

---

# 1️⃣ Basic Example

```css
p {
  color: blue;
}

p {
  color: red !important;
}
```

Result

```text
Paragraph color = red
```

Because **`!important` overrides normal CSS rules**.

---

# 2️⃣ Why It Exists

Normally CSS follows **priority rules (cascade)**:

1. Inline styles
2. ID selectors
3. Class selectors
4. Element selectors

But **`!important` jumps to the top** of this priority.

---

# 3️⃣ Example With Specificity

```css
#title {
  color: blue;
}

.title {
  color: red !important;
}
```

Normally:

```text
ID > class
```

But because of `!important`:

```text
color = red
```

---

# 4️⃣ Real Example

```html
<p class="text">Hello</p>
```

```css
.text {
  color: blue;
}

p {
  color: red !important;
}
```

Output

```text
Hello → red
```

---

# 5️⃣ When `!important` Loses

If another rule also has **`!important` but higher specificity**.

```css
p {
  color: blue !important;
}

#title {
  color: red !important;
}
```

If element has `id="title"`

```text
red wins (higher specificity)
```

---

# 6️⃣ Why Developers Avoid It

Using `!important` can:

❌ break CSS hierarchy
❌ make debugging difficult
❌ cause maintainability issues

Example:

```css
color: red !important;
```

Now other styles **cannot override it easily**.

---

# 7️⃣ When It Is Acceptable

Sometimes used for:

* Overriding **third-party libraries**
* Debugging
* Utility classes

Example:

```css
.hidden {
  display: none !important;
}
```

---

# 🧠 Interview One-Line Answer

**`!important` is a CSS rule that overrides all other styles and forces a property to be applied regardless of normal CSS specificity rules.**

---

✅ If you're preparing **frontend interviews**, a very common follow-up is:

**"What is CSS specificity?"**

I can explain it with **priority order + tricky examples** if you want.
