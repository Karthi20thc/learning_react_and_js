## What is `z-index` in CSS?

The **`z-index`** property controls the **vertical stacking order (depth)** of elements on a webpage.

It determines **which element appears in front and which appears behind** when elements overlap.

👉 Higher `z-index` value = appears **closer to the user (on top)**
👉 Lower `z-index` value = appears **behind**

---

## Important Rule

`z-index` works **only on positioned elements**:

```css
position: relative;
position: absolute;
position: fixed;
position: sticky;
```

It does **NOT work** with:

```css
position: static; /* default */
```

---

## Basic Example

```html
<div class="box red"></div>
<div class="box blue"></div>
```

```css
.box {
  width: 100px;
  height: 100px;
  position: absolute;
}

.red {
  background: red;
  z-index: 1;
}

.blue {
  background: blue;
  left: 50px;
  top: 50px;
  z-index: 2;
}
```

Result:

* Blue box appears **above** red box because `z-index: 2` is higher.

---

## Real-World Example (Modal)

```css
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
}
```

Used so modal appears above all page content.

---

## Visual Concept

Think layers:

```
z-index: 1   → bottom
z-index: 10  → middle
z-index: 100 → top
```

Like stacking papers 📄

---

## Example Without z-index Problem

Header might cover modal:

```css
.header {
  position: fixed;
  z-index: 500;
}
```

Modal needs higher value:

```css
.modal {
  z-index: 1000;
}
```

---

## Negative z-index

You can also send elements behind:

```css
.box {
  z-index: -1;
}
```

---

## Common Real-World Values

```
Navbar: 100
Dropdown: 500
Modal: 1000
Toast/Popup: 2000
```

---

## Interview One-Line Answer

> The CSS z-index property controls the vertical stacking order of positioned elements, determining which element appears in front when elements overlap.

---

## Common Interview Trick Question

❓ Why z-index not working?

Possible reasons:

1. Element has `position: static`
2. Parent stacking context issue
3. Lower value than overlapping element

---

If you want, I can also explain:

* Stacking context (advanced concept)
* Why z-index sometimes fails
* Modal layering interview questions
* Visual diagrams

Just tell me 👍
