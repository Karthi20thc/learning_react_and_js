### Learning 1

<!-- in css -->
```css
 background: linear-gradient(to right, green 10%, white 10%);
 ```

 - if we want to control the percentage using js, we have to move this style to js

```javascript
function setProgress(percent) {
  const box = document.querySelector(".box");
  box.style.background =
    `linear-gradient(to right, green ${percent}%, white ${percent}%)`;
}
```