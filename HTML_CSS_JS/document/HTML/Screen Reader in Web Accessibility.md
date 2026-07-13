# Screen Reader in Web Accessibility

## What is a Screen Reader?

A **screen reader** is an assistive technology that helps people who are **blind, visually impaired, or have certain reading disabilities** access and interact with websites, applications, and digital content.

It works by reading the content of a web page aloud using **text-to-speech** or by sending the information to a **refreshable Braille display**.

---

## Example

Consider this HTML:

```html
<h1>Welcome to Our Website</h1>
<button>Submit</button>
```

A screen reader might announce:

```text
Heading level 1, Welcome to Our Website
Button, Submit
```

---

## How Screen Readers Navigate a Web Page

Screen readers don't view a page visually like sighted users. Instead, they rely on the page's **semantic structure**.

They identify:

- Headings (`<h1>` to `<h6>`)
- Links (`<a>`)
- Buttons (`<button>`)
- Form fields (`<input>`, `<select>`)
- Lists (`<ul>`, `<ol>`)
- Tables
- Landmarks (`<nav>`, `<main>`, `<footer>`)
- ARIA attributes

Example:

```html
<nav>
  /Home</a>
  /aboutAbout</a>
</nav>
```

Screen reader announcement:

```text
Navigation region
Link, Home
Link, About
```

---

## Popular Screen Readers

- **NVDA** (Windows)
- **JAWS** (Windows)
- **Narrator** (Windows)
- **VoiceOver** (macOS, iOS)
- **TalkBack** (Android)
- **Orca** (Linux)

---

## Why Screen Readers Matter

### Bad Example

```html
<div onclick="submitForm()">Click Here</div>
```

A screen reader may simply announce:

```text
Click Here
```

The user may not know it's clickable.

### Good Example

```html
<button type="button">Submit</button>
```

The screen reader announces:

```text
Button, Submit
```

This provides meaningful information.

---

## Role of ARIA with Screen Readers

Example:

```html
<button aria-label="Close dialog">
  X
</button>
```

Screen reader announcement:

```text
Close dialog button
```

Without `aria-label`, it might only read:

```text
X
```

---

## Best Practices for Screen Reader Accessibility

✅ Use semantic HTML

```html
<header>
<nav>
<main>
<footer>
```

✅ Associate labels with form fields

```html
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

✅ Add alt text to images

```html
logo.png
```

✅ Use ARIA only when necessary

✅ Maintain proper heading hierarchy

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

---

## In React Development

```jsx
<label htmlFor="username">Username</label>
<input id="username" />
```

Instead of:

```jsx
<span>Username</span>
<input />
```

The first example is accessible because screen readers can identify the relationship between the label and the input.

---

## Interview Definition

> A screen reader is an assistive technology that reads web content aloud or converts it to Braille, allowing users with visual impairments to navigate and interact with websites. It relies on semantic HTML, accessibility APIs, and ARIA attributes to understand and communicate the structure and functionality of web content.

