<!-- doc -->

Nice 👌 you’re comparing **position vs flex** to place the child at the bottom-right corner.

Let’s clearly understand what’s happening.

---

# ✅ Method 1 — Using `position`

```css
.parent-box {
    border: 0.5px solid blue;
    padding: 100px;
    position: relative;
}

.child-box {
    border: 0.5px solid red;
    padding: 25px;
    max-width: 100px;

    position: absolute;
    right: 0;
    bottom: 0;
}
```

### 🔎 How This Works

* `position: relative` → makes parent the reference
* `position: absolute` → removes child from normal flow
* `right: 0; bottom: 0;` → pushes it to bottom-right

### 📌 Important

Child is **removed from layout flow**.

That means:

* It won’t affect other elements
* It can overlap content

---

# ✅ Method 2 — Using Flexbox

```css
.parent-box {
    border: 0.5px solid blue;
    padding: 100px;

    display: flex;
    align-items: flex-end;      /* Y-axis */
    justify-content: flex-end;  /* X-axis */
}
```

### 🔎 How This Works

Flex direction is default:

```
flex-direction: row;
```

So:

| Property        | Controls            |
| --------------- | ------------------- |
| justify-content | Horizontal (X-axis) |
| align-items     | Vertical (Y-axis)   |

So:

```
justify-content: flex-end → move right
align-items: flex-end → move bottom
```

Child stays in layout flow ✅

---

# 🧠 When To Use Which?

### 🎯 Use `position` when:

* You want overlay
* You want floating badge
* You want tooltip
* You want absolute control

### 🎯 Use `flex` when:

* You are doing layout
* You want responsive design
* You don’t want overlapping
* You want clean structure

---

# 🔥 Visual Difference

## With Position

```
Parent
  └── Child floats bottom-right
```

## With Flex

```
Parent (flex container)
  └── Child aligned bottom-right
```

---

# 🚨 One Important Thing

Your flex version works only if:

* Parent has height
* OR enough padding (like you used)

If parent height is small, you won’t see vertical alignment effect.

---

# 💡 Modern Recommendation

For layout → prefer:

```
Flexbox
OR
CSS Grid
```

Avoid using `position` for layout unless necessary.

---

If you want, I can now show:

* 🔥 Same thing using CSS Grid
* 🔥 Centering tricks interview questions
* 🔥 Why align-items doesn’t work sometimes
* 🔥 Advanced flex interview traps

What do you want next?
