// doc

### Learning 1

   This rule targets the element with class "dropdown-content"
   ONLY when its parent element (.dropdown) also has the class "active".

   Meaning:
   - Normally, .dropdown-content is hidden (display: none).
   - When we add the "active" class to the parent (.dropdown),
     this rule makes the dropdown visible (display: block).

   This is commonly used for toggling dropdown menus using JavaScript
   by adding/removing the "active" class.

```css
.dropdown.active .dropdown-content {
    display: block;
}
```