Great 👍 — your HTML is small, but there are **many interview questions** that can be asked from this file.

I’ll cover **beginner → advanced → real-world** questions.

---

# 📄 Your HTML (Reference)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Project 1</title>
</head>

<body>

    <button class="open-btn" id="openModal">open modal</button>

    <div class="modal-container">
        <div class="modal-content">
            <span>This is modal content</span>
            <button class="close-btn">close</button>
        </div>
    </div>

    <script src="script.js" defer></script>
</body>

</html>
```

---

# 🧠 BASIC INTERVIEW QUESTIONS

### 1. What is `<!DOCTYPE html>`?

It tells the browser:

> This document uses HTML5.

Without it → browser goes into **quirks mode**.

---

### 2. What does `lang="en"` do?

```html
<html lang="en">
```

Defines page language.

Used for:

* Screen readers (accessibility)
* SEO
* Translation tools

---

### 3. What is `<meta charset="UTF-8">`?

Character encoding.

Supports:

```
English
Symbols
Emojis
International text
```

---

### 4. What is viewport meta tag?

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Makes website **responsive on mobile**.

Without this → mobile layout breaks.

---

### 5. Difference between id and class?

| id                 | class             |
| ------------------ | ----------------- |
| Unique             | Multiple elements |
| #selector          | .selector         |
| Higher specificity | Lower             |

---

# 🧠 BUTTON QUESTIONS

### 6. Why use `<button>` instead of `<div>`?

Because button:

* Accessible
* Keyboard friendly
* Semantic HTML
* Default behavior

---

### 7. What is semantic HTML?

Using correct elements for meaning.

Example:

```
button → actions
header → header
nav → navigation
```

---

# 🧠 MODAL QUESTIONS

### 8. What is a modal?

A UI component that appears **above page content** and blocks interaction until closed.

---

### 9. Why modal-container wrapper?

```html
<div class="modal-container">
```

Used for:

* Overlay background
* Positioning
* Center alignment
* z-index control

---

### 10. Why nested modal-content?

```html
<div class="modal-content">
```

Separation of:

```
overlay vs content
```

---

# 🧠 SCRIPT QUESTIONS

### 11. Why `defer`?

```html
<script src="script.js" defer></script>
```

`defer` means:

> Load script in background and execute after HTML is parsed.

Advantages:

* No blocking
* DOM ready
* Better performance

---

### 12. Difference between `defer` and `async`?

| defer                | async                |
| -------------------- | -------------------- |
| Order maintained     | Order not guaranteed |
| Runs after HTML      | Runs immediately     |
| Best for DOM scripts | Best for analytics   |

---

# 🧠 ACCESSIBILITY QUESTIONS (IMPORTANT)

### 13. How to improve modal accessibility?

Add:

```html
role="dialog"
aria-modal="true"
```

Example:

```html
<div class="modal-container" role="dialog" aria-modal="true">
```

---

### 14. Why accessibility matters?

* Screen readers
* Legal compliance
* Better UX
* SEO

---

# 🧠 CSS QUESTIONS FROM THIS HTML

### 15. Why use classes instead of IDs for styling?

Classes are reusable.

---

### 16. Why modal hidden initially?

```css
display: none;
```

Because modal should appear only on user action.

---

# 🧠 JAVASCRIPT QUESTIONS

### 17. How to select open button?

```js
document.querySelector("#openModal")
```

---

### 18. Why use classList instead of style?

Better separation of concerns.

---

# 🧠 PERFORMANCE QUESTIONS

### 19. Where should CSS be placed?

Inside `<head>`.

Because:

> Prevents layout shift (FOUC).

---

### 20. Where should JS be placed?

Bottom of body OR use `defer`.

---

# 🧠 ADVANCED INTERVIEW QUESTIONS

### 21. What is DOM?

Document Object Model.

HTML becomes a tree structure in memory.

---

### 22. How browser loads this page?

Steps:

1. Parse HTML
2. Build DOM
3. Load CSS
4. Build CSSOM
5. Combine → Render Tree
6. Paint

---

### 23. What is critical rendering path?

Process browser uses to display page.

---

### 24. What happens if script has no defer?

JS blocks HTML parsing.

---

# 🧠 REAL-WORLD QUESTIONS

### 25. How to close modal when clicking outside?

Event listener on container.

---

### 26. How to close modal with ESC key?

```js
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
```

---

### 27. How to prevent scroll when modal open?

```css
body.modal-open {
  overflow: hidden;
}
```

---

### 28. How to support multiple modals?

Use data attributes.

---

# 🧠 TRICK QUESTIONS

### 29. Is span correct here?

```html
<span>This is modal content</span>
```

Better:

```
<p>
<h2>
```

Because span is inline.

---

### 30. Can modal be inside body only?

Yes — best practice.

---

# 🧠 SENIOR LEVEL QUESTIONS

### 31. How to manage modal state in large apps?

* React state
* Redux
* Context API
* Event bus

---

### 32. How to animate modal?

CSS:

```
opacity
transform
transition
```

---

### 33. Why avoid display:none animation?

Because display cannot animate.

---

# ⭐ BEST IMPROVED VERSION (Interview Ready)

```html
<div class="modal-container" role="dialog" aria-modal="true">
    <div class="modal-content">
        <h2>Modal Title</h2>
        <p>This is modal content</p>
        <button class="close-btn">Close</button>
    </div>
</div>
```

---

# 🚀 Most Important Questions Interviewers Love

If you remember only these:

1. defer vs async
2. id vs class
3. DOM
4. Semantic HTML
5. Accessibility
6. Modal structure
7. CSS class toggling
8. Event listeners
9. z-index
10. Browser rendering process

You’re strong 💪

---

# ✅ If You Want

I can also give:

* Full **frontend interview Q&A PDF**
* Modal **real company implementation**
* React modal version
* JavaScript interview questions from this

Just tell me 👍
