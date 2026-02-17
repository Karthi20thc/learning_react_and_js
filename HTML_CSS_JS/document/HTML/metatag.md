## What are Meta Tags?

**Meta tags** are HTML elements that provide **metadata (information about the webpage)** to browsers and search engines.

They do **not appear visually** on the page but help with:

* SEO (Search Engine Optimization)
* Character encoding
* Responsive design
* Page description
* Author info
* Social media preview

Meta tags are placed inside the `<head>` section of an HTML document.

---

## Basic Syntax

```html
<meta name="attribute-name" content="value">
```

---

## Common Meta Tag Examples

### 1️⃣ Character Encoding

```html
<meta charset="UTF-8">
```

Defines the character encoding used in the document.

Supports emojis, symbols, and multiple languages.

---

### 2️⃣ Viewport (Responsive Design — Very Important)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Makes the website responsive on mobile devices.

Without this → mobile layout breaks.

---

### 3️⃣ Page Description (SEO)

```html
<meta name="description" content="This is a tutorial website for learning HTML.">
```

Used by search engines to display page summary in search results.

---

### 4️⃣ Keywords (SEO — less used today)

```html
<meta name="keywords" content="HTML, CSS, JavaScript, Tutorial">
```

Helps search engines understand page topics.

---

### 5️⃣ Author Information

```html
<meta name="author" content="Karthik">
```

Defines the author of the webpage.

---

### 6️⃣ Auto Refresh / Redirect

```html
<meta http-equiv="refresh" content="5">
```

Refreshes the page every 5 seconds.

Redirect example:

```html
<meta http-equiv="refresh" content="5; url=https://example.com">
```

---

## Example HTML with Meta Tags

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learning HTML basics">
    <meta name="author" content="Karthik">
    <title>My Website</title>
</head>
```

---

## Why Meta Tags Are Important

1. Improve SEO
2. Enable responsive design
3. Provide browser instructions
4. Help social media sharing
5. Define page information

---

## Interview One-Line Answer

> Meta tags are HTML elements that provide metadata about a webpage to browsers and search engines, such as character encoding, responsiveness, and page description.

---

If you want, I can also explain:

* Difference between name vs http-equiv
* Open Graph meta tags (Facebook, LinkedIn preview)
* SEO meta tags list
* Interview questions on meta tags

Just tell me 👍
