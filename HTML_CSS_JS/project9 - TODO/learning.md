#  Learning 1 For Every Keystroke → Use input Event

Yes ✅ — but **`change` event will NOT fire on every keystroke**.

It only fires when:

* The input loses focus (blur)
* Or user presses Enter (in some cases)

---

## ✅ For Every Keystroke → Use `input` Event

Change this:

```js
addtodoInput.addEventListener("change", handleaddtodoInput)
```

To this:

```js
addtodoInput.addEventListener("input", handleaddtodoInput)
```

---

## 🔥 Corrected Code

```js
const addtodoInput = document.querySelector(".addtodo-input");
const addtodoBtn = document.querySelector(".addtodo-btn");

let toDOData = [];

const handleaddtodoInput = (event) => {
    console.log(event.target.value);   // current input value
};

const handleaddtodoBtn = () => {
    console.log(addtodoInput.value);   // get latest value on button click
};

addtodoInput.addEventListener("input", handleaddtodoInput);
addtodoBtn.addEventListener("click", handleaddtodoBtn);
```

---

## 🎯 Important Difference (Interview Question)

| Event     | When It Fires           |
| --------- | ----------------------- |
| `change`  | After input loses focus |
| `input`   | On every keystroke      |
| `keydown` | When key is pressed     |
| `keyup`   | When key is released    |

---

## ⚠️ Small Mistake in Your Code

You wrote:

```js
console.log(addtodoInput.textContent)
```

❌ `textContent` does NOT work for `<input>`
✅ Use `.value`

---

If you want, I can now give you:

* 🔥 A tricky interview question based on this event handling
* 🔥 Or a follow-up challenge for your todo app

Tell me 😎


#  Learning 2 how to read the value of any dom is it dom.textcontet or event.target.value

Good question 👌 — this is a **very common interview confusion**.

The answer is:

> It depends on the type of DOM element.

---

# 🔹 1️⃣ For `<input>`, `<textarea>`, `<select>`

✅ Use **`.value`**

```js
inputElement.value
```

or inside event:

```js
event.target.value
```

### Example

```html
<input type="text" class="name-input" />
```

```js
const input = document.querySelector(".name-input");

input.addEventListener("input", (event) => {
  console.log(event.target.value); // ✅ correct
});
```

❌ `textContent` will NOT work for input fields.

---

# 🔹 2️⃣ For Normal HTML Elements (`div`, `p`, `span`, `h1`)

✅ Use **`.textContent`**

```html
<p class="title">Hello World</p>
```

```js
const title = document.querySelector(".title");
console.log(title.textContent); // ✅ Hello World
```

---

# 🔹 3️⃣ For Buttons

If button has text:

```html
<button class="btn">Click Me</button>
```

Use:

```js
btn.textContent
```

If button has `value` attribute:

```html
<button value="save">Click</button>
```

Then:

```js
event.target.value
```

---

# 🔥 Simple Rule (Interview Shortcut)

| Element Type              | Use This       |
| ------------------------- | -------------- |
| input / textarea / select | `.value`       |
| div / span / p / h1       | `.textContent` |
| need HTML inside          | `.innerHTML`   |

---

# ⚡ Extra Interview Tip

### What is difference between:

* `event.target`
* `event.currentTarget`
* `element.value`
* `element.textContent`

If interviewer asks this, tell me — I’ll prepare you with a tricky example 😎


# Learning 3

console.log(Date.now());  1772436220451
console.log( new Date().toLocaleString()) 3/2/2026, 7:23:40 AM