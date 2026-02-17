## CSS `position` Property (With Examples)

The **`position`** property in CSS controls how an element is **placed on the page**.

It works together with:

```
top
right
bottom
left
z-index
```

---

## Types of Position

There are **5 main values**:

1. `static` (default)
2. `relative`
3. `absolute`
4. `fixed`
5. `sticky`

---

## 1️⃣ position: static (Default)

Element follows normal document flow.

`top`, `left`, etc. **do NOT work** here.

```css
.box {
  position: static;
}
```

```html
<div class="box">Static Box</div>
```

---

## 2️⃣ position: relative

Element stays in normal flow but can be moved using `top`, `left`.

Original space is still reserved.

```css
.box {
  position: relative;
  top: 20px;
  left: 30px;
}
```

Example:

```html
<div class="box">Relative Box</div>
```

Use case:

* Small adjustments
* Parent for absolute elements

---

## 3️⃣ position: absolute

Element is removed from normal flow.

Positioned relative to **nearest positioned parent**.

If no parent → relative to `body`.

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

```html
<div class="parent">
  <div class="child">Absolute</div>
</div>
```

Use case:

* Modals
* Tooltips
* Dropdowns
* Icons inside inputs

---

## 4️⃣ position: fixed

Element stays fixed relative to **viewport (screen)**.

Does not move when scrolling.

```css
.box {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
```

Example:

```html
<div class="box">Fixed Button</div>
```

Use case:

* Floating buttons
* Chat widgets
* Sticky headers

---

## 5️⃣ position: sticky

Acts like relative until scroll reaches a point, then becomes fixed.

```css
.header {
  position: sticky;
  top: 0;
  background: white;
}
```

Example:

```html
<div class="header">Sticky Header</div>
```

Use case:

* Sticky navigation
* Table headers

---

## 🔥 Important Interview Concept

`absolute` looks for nearest parent with:

```css
position: relative | absolute | fixed | sticky
```

If none → uses `<body>`.

---

## ⭐ Position + z-index

`z-index` works only when position is NOT static.

Example:

```css
.modal {
  position: fixed;
  z-index: 1000;
}
```

---

## 🧠 Quick Comparison Table

| Position | In Flow? | Relative To     |
| -------- | -------- | --------------- |
| static   | Yes      | Normal flow     |
| relative | Yes      | Itself          |
| absolute | No       | Parent          |
| fixed    | No       | Viewport        |
| sticky   | Partial  | Scroll position |

---

## ✅ Interview One-Line Answer

> The CSS position property defines how an element is positioned in the document using values like static, relative, absolute, fixed, and sticky.

---

## 🚀 Real-World Example (Modal)

```css
.modal {
  position: fixed;
  inset: 0;
}
```

Used to cover entire screen.

---

If you want, I can also explain:

* Flexbox vs Position difference
* Centering with position
* Absolute inside relative visual diagram
* z-index deep concept

Just tell me 👍
