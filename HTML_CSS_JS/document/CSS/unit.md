CSS units define **how big something should be** (width, height, margin, font-size, etc.).
They are mainly divided into **Absolute units** and **Relative units**.

---

# 1️⃣ Absolute Units (Fixed Size)

These units **do not depend on other elements**.

| Unit | Meaning            | Example            |
| ---- | ------------------ | ------------------ |
| `px` | Pixels             | `font-size: 16px;` |
| `cm` | Centimeters        | `width: 5cm;`      |
| `mm` | Millimeters        | `width: 10mm;`     |
| `in` | Inches             | `width: 2in;`      |
| `pt` | Points (1/72 inch) | `font-size: 12pt;` |
| `pc` | Picas (12 points)  | `font-size: 2pc;`  |

### Example

```css
.box {
  width: 200px;
  height: 100px;
}
```

📌 **Most commonly used:** `px`

---

# 2️⃣ Relative Units (Responsive)

Relative units **depend on parent element, root element, or viewport**.

---

# `em`

Depends on **parent font-size**.

### Example

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
}
```

Result

```
2em = 2 × 20px = 40px
```

⚠️ Problem: **nested em can compound**

---

# `rem`

Depends on **root element (`html`) font-size**.

```css
html {
  font-size: 16px;
}

.box {
  font-size: 2rem;
}
```

Result

```
2rem = 2 × 16px = 32px
```

📌 **Best unit for scalable design**

---

# `%` (Percentage)

Relative to **parent element size**.

```css
.parent {
  width: 500px;
}

.child {
  width: 50%;
}
```

Result

```
50% of 500px = 250px
```

---

# `vw` (Viewport Width)

1vw = **1% of browser width**

Example:

```css
width: 50vw;
```

If screen width = **1000px**

```
50vw = 500px
```

---

# `vh` (Viewport Height)

1vh = **1% of browser height**

```css
height: 100vh;
```

Used for **full screen layout**.

---

# `vmin` and `vmax`

| Unit   | Meaning                 |
| ------ | ----------------------- |
| `vmin` | smaller of width/height |
| `vmax` | larger of width/height  |

Example

```css
width: 50vmin;
```

---

# `ch`

Based on **width of "0" character**

```css
width: 20ch;
```

Often used for **text input width**.

---

# `ex`

Based on **height of lowercase "x"**.

Rarely used.

---

# 📊 Quick Comparison

| Unit   | Relative To                | Usage               |
| ------ | -------------------------- | ------------------- |
| `px`   | fixed pixel                | precise design      |
| `em`   | parent font size           | scalable text       |
| `rem`  | root font size             | responsive layouts  |
| `%`    | parent element             | flexible layouts    |
| `vw`   | viewport width             | responsive width    |
| `vh`   | viewport height            | full screen layouts |
| `vmin` | smaller viewport dimension | responsive scaling  |
| `vmax` | larger viewport dimension  | responsive scaling  |

---

# Example Combining Units

```css
.container {
  width: 80%;
  height: 100vh;
}

.title {
  font-size: 2rem;
}

.button {
  padding: 1em 2em;
}
```

---

# 🧠 Interview Short Answer

**CSS units define the size of elements. Absolute units like `px` are fixed, while relative units like `em`, `rem`, `%`, `vh`, and `vw` scale based on parent elements or viewport size.**

---

If you want, I can also show **the most used CSS units in real projects (React / frontend)** and **which ones to avoid in interviews**.
