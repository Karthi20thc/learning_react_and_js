````markdown
# Media Queries: `min-width` vs `max-width`

Both `min-width` and `max-width` are used in CSS media queries, but they serve different purposes.

---

## 1. `max-width`

Used when applying styles to screens that are **smaller than or equal to** a specific width.

### Syntax

```css
@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}
```

### Meaning

- Applies styles when the screen width is **768px or less**.
- Commonly used for tablets and mobile devices.

### Example

```css
.test-image {
  width: 800px;
}

@media (max-width: 768px) {
  .test-image {
    width: 100%;
  }
}
```

---

## 2. `min-width`

Used when applying styles to screens that are **greater than or equal to** a specific width.

### Syntax

```css
@media (min-width: 768px) {
  .container {
    display: flex;
  }
}
```

### Meaning

- Applies styles when the screen width is **768px or greater**.
- Commonly used for tablets, laptops, and desktops.

### Example

```css
.container {
  display: block;
}

@media (min-width: 768px) {
  .container {
    display: flex;
  }
}
```

---

## Mobile-First Approach (Recommended)

Most modern applications follow a **mobile-first** approach using `min-width`.

### Example

```css
.container {
  width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 1000px;
  }
}
```

### Benefits

- Better performance.
- Easier to maintain.
- Recommended by modern development practices.
- Works well with responsive design principles.

---

## Quick Comparison

### `max-width`

- Desktop-first approach.
- Targets smaller screens.
- Styles apply up to a specific width.

```css
@media (max-width: 768px) {
  /* Mobile styles */
}
```

### `min-width`

- Mobile-first approach.
- Targets larger screens.
- Styles apply from a specific width and above.

```css
@media (min-width: 768px) {
  /* Tablet/Desktop styles */
}
```

---

# Interview Answer

> Both `min-width` and `max-width` are used in media queries. `max-width` is used to apply styles for smaller screens, whereas `min-width` is used to apply styles for larger screens. In modern web development, we generally follow a mobile-first approach using `min-width`. We first design the UI for mobile devices and then progressively enhance the layout for tablets and desktops using media queries.
````
