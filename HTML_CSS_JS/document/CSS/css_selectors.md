## All CSS Selectors (Complete Guide with Examples)

CSS selectors are used to **select HTML elements** so you can apply styles to them.

---

# 1️⃣ Universal Selector

Selects **all elements**.

```css
* {
  margin: 0;
  padding: 0;
}
```

---

# 2️⃣ Element (Tag) Selector

Selects elements by tag name.

```css
p {
  color: blue;
}
```

```html
<p>Hello</p>
```

---

# 3️⃣ Class Selector

Selects elements with a specific class.

```css
.box {
  background: red;
}
```

```html
<div class="box"></div>
```

---

# 4️⃣ ID Selector

Selects element with a specific ID.

```css
#header {
  font-size: 20px;
}
```

```html
<div id="header"></div>
```

---

# 5️⃣ Group Selector

Select multiple elements together.

```css
h1, h2, p {
  color: green;
}
```

---

# 6️⃣ Descendant Selector (Space)

Selects elements inside another element.

```css
div p {
  color: red;
}
```

```html
<div>
  <p>Selected</p>
</div>
```

---

# 7️⃣ Child Selector (>)

Selects direct children only.

```css
div > p {
  color: blue;
}
```

---

# 8️⃣ Adjacent Sibling Selector (+)

Selects immediate next sibling.

```css
h1 + p {
  color: red;
}
```

---

# 9️⃣ General Sibling Selector (~)

Selects all siblings after element.

```css
h1 ~ p {
  color: green;
}
```

---

# 🔟 Attribute Selector

Select elements with attributes.

```css
input[type="text"] {
  border: 1px solid black;
}
```

---

# Attribute Variations

### Contains

```css
a[href*="google"] {}
```

### Starts With

```css
a[href^="https"] {}
```

### Ends With

```css
a[href$=".pdf"] {}
```

---

# 11️⃣ Pseudo-Class Selectors

Select element based on **state**.

### Hover

```css
button:hover {
  background: red;
}
```

### Active

```css
button:active {}
```

### Focus

```css
input:focus {}
```

### First Child

```css
li:first-child {}
```

### Last Child

```css
li:last-child {}
```

### Nth Child

```css
li:nth-child(2) {}
```

### Not

```css
div:not(.box) {}
```

---

# 12️⃣ Pseudo-Element Selectors

Select part of an element.

### Before

```css
p::before {
  content: "👉 ";
}
```

### After

```css
p::after {
  content: " ✔";
}
```

### First Letter

```css
p::first-letter {}
```

### First Line

```css
p::first-line {}
```

### Selection

```css
::selection {
  background: yellow;
}
```

---

# 13️⃣ Multiple Class Selector

Element with multiple classes.

```css
.box.active {
  background: green;
}
```

```html
<div class="box active"></div>
```

---

# 14️⃣ ID + Class Selector

```css
#header.box {}
```

---

# 15️⃣ Direct Element with Class

```css
div.box {}
```

---

# 16️⃣ Root Selector

```css
:root {
  --main-color: blue;
}
```

Used for CSS variables.

---

# 17️⃣ Empty Selector

```css
div:empty {}
```

Selects elements with no content.

---

# 18️⃣ Checked Selector

```css
input:checked {}
```

---

# 19️⃣ Disabled Selector

```css
input:disabled {}
```

---

# 20️⃣ Required Selector

```css
input:required {}
```

---

# ⭐ Most Important Selectors for Interviews

If you remember these, you’re strong:

```
*
element
.class
#id
parent child
parent > child
+
~
:hover
:focus
:nth-child()
::before
::after
attribute selectors
```

---

# 🔥 Specificity Order (Very Important)

Highest → Lowest

```
Inline styles
ID
Class / Attribute / Pseudo-class
Element
Universal
```

Example:

```css
#id {}        /* higher */
.class {}     /* lower */
```

---

# ✅ Interview One-Line Answer

> CSS selectors are patterns used to select and target HTML elements to apply styles, such as class, id, element, attribute, and pseudo selectors.

---

# 🚀 If You Want

I can also give:

* CSS specificity deep explanation
* All pseudo-classes list
* All pseudo-elements list
* CSS selectors interview questions
* Visual diagrams

Just tell me 👍
