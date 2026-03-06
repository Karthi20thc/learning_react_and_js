A **Mixin** is a reusable block of CSS styles that you can **include in multiple places** to avoid repeating the same code.

Mixins are **not available in plain CSS**, they are commonly used in **CSS preprocessors like**:

* **Sass / SCSS**
* **Less**

They help follow **DRY principle (Don't Repeat Yourself)**.

---

# 1️⃣ Problem Without Mixins

Example (repeated CSS):

```css
.button {
  border-radius: 5px;
  padding: 10px;
  background: blue;
}

.card {
  border-radius: 5px;
  padding: 10px;
  background: white;
}
```

Here **`border-radius` and `padding` repeat**.

---

# 2️⃣ Using Mixin (SCSS)

```scss
@mixin box-style {
  border-radius: 5px;
  padding: 10px;
}
```

Use it:

```scss
.button {
  @include box-style;
  background: blue;
}

.card {
  @include box-style;
  background: white;
}
```

Now styles are **reusable**.

---

# 3️⃣ Mixin With Parameters

Mixins can accept **arguments**.

```scss
@mixin flex-center($direction) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}
```

Use it:

```scss
.container {
  @include flex-center(row);
}
```

Output CSS:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
```

---

# 4️⃣ Real Example (Common Flex Mixin)

```scss
@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  @include center;
}
```

---

# 5️⃣ Benefits of Mixins

✅ Reusable styles
✅ Less repeated code
✅ Easier maintenance
✅ Cleaner CSS structure

---

# 6️⃣ Mixins vs Variables

| Feature | Mixin                | Variable       |
| ------- | -------------------- | -------------- |
| Purpose | reusable style block | reusable value |
| Example | layout styles        | colors, sizes  |

Example variable:

```scss
$primary-color: blue;
```

---

# 🧠 Interview Answer (Short)

**A mixin is a reusable block of CSS styles in preprocessors like Sass that can be included in multiple selectors to avoid code duplication.**

---

If you want, I can also show **Sass features that frontend interviews ask frequently**:

* `@extend`
* `@mixin`
* `@include`
* `nesting`
* `variables`

These are **very common interview questions.**
