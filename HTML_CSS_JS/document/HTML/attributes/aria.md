# What are ARIA Attributes in HTML?

**ARIA (Accessible Rich Internet Applications)** attributes are special HTML attributes that improve web accessibility by providing additional information to assistive technologies such as **screen readers**.

They help screen readers understand the **purpose**, **state**, and **behavior** of elements, especially when using custom UI components.

---

# Common ARIA Attributes

## 1. `aria-label`

Provides an accessible name for an element when there is no visible text label.

### Example

```html
<button aria-label="Close">
  ✕
</button>
```

### Screen Reader Output

```
Close button
```

---

## 2. `aria-labelledby`

Associates an element with another element whose text acts as its label.

### Example

```html
<h2 id="profile-title">User Profile</h2>

<div aria-labelledby="profile-title">
  ...
</div>
```

### Result

The `<div>` is labeled as:

```
User Profile
```

---

## 3. `aria-describedby`

Provides additional descriptive information about an element.

### Example

```html
<input type="email" aria-describedby="help-text">

<p id="help-text">
  Enter your email address.
</p>
```

### Result

A screen reader reads both:

```
Email input
Enter your email address.
```

---

## 4. `aria-hidden`

Hides content from assistive technologies while keeping it visible on the page.

### Example

```html
<span aria-hidden="true">★</span>
```

### Result

The star icon is displayed visually but ignored by screen readers.

---

## 5. `aria-expanded`

Indicates whether a collapsible section is expanded or collapsed.

### Example

```html
<button aria-expanded="false">
  Show Menu
</button>
```

### Values

| Value   | Meaning              |
| ------- | -------------------- |
| `true`  | Content is expanded  |
| `false` | Content is collapsed |

Commonly used in:

- Dropdown menus
- Accordions
- Navigation menus

---

## 6. `aria-live`

Informs screen readers about dynamically updated content.

### Example

```html
<div aria-live="polite">
  Form submitted successfully.
</div>
```

### Common Values

| Value       | Behavior                          |
| ----------- | --------------------------------- |
| `polite`    | Announces updates when convenient |
| `assertive` | Announces updates immediately     |

---

# ARIA Roles

Roles define what an element represents.

### Example

```html
<div role="button">Submit</div>

<div role="navigation">
  Navigation Menu
</div>

<div role="alert">
  Error occurred!
</div>
```

### Common Roles

| Role         | Purpose            |
| ------------ | ------------------ |
| `button`     | Interactive button |
| `navigation` | Navigation section |
| `alert`      | Important message  |
| `dialog`     | Modal dialog       |
| `tab`        | Tab component      |
| `tooltip`    | Tooltip text       |

---

# ARIA States and Properties

ARIA can describe the current state of UI elements.

### Checkbox Example

```html
<div role="checkbox" aria-checked="true">
  Receive notifications
</div>
```

### Common State Attributes

| Attribute       | Purpose                  |
| --------------- | ------------------------ |
| `aria-checked`  | Checkbox/radio state     |
| `aria-selected` | Selected item            |
| `aria-disabled` | Disabled control         |
| `aria-expanded` | Expanded/collapsed state |
| `aria-pressed`  | Toggle button state      |

---

# Real-World Example

### Accessible Dropdown Menu

```html
<button
  aria-haspopup="true"
  aria-expanded="false"
  aria-controls="menu">
  Options
</button>

<ul id="menu" hidden>
  <li>Edit</li>
  <li>Delete</li>
  <li>Share</li>
</ul>
```

### What ARIA Provides

- `aria-haspopup="true"` → Indicates a popup menu exists
- `aria-expanded="false"` → Indicates menu is closed
- `aria-controls="menu"` → Associates the button with the menu

---

# Best Practices

✅ Use semantic HTML first.

```html
<button>Save</button>
```

❌ Avoid replacing semantic elements unnecessarily.

```html
<div role="button">Save</div>
```

✅ Add ARIA only when native HTML does not provide sufficient accessibility.

✅ Keep ARIA states updated dynamically.

✅ Test using screen readers.

---

# Golden Rule of ARIA

> **"No ARIA is better than bad ARIA."**

Always prefer native HTML elements such as:

```html
<button>
<input>
<select>
<textarea>
<nav>
<header>
<footer>
```

because they already include built-in accessibility support.

---

# Summary

ARIA attributes help assistive technologies understand:

- What an element is (**role**)
- What it does (**properties**)
- Its current state (**states**)

Examples include:

- `aria-label`
- `aria-labelledby`
- `aria-describedby`
- `aria-hidden`
- `aria-expanded`
- `aria-live`

Using ARIA correctly makes websites more accessible and user-friendly for people who rely on screen readers and other assistive technologies.

