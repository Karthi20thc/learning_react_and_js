// js

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const selected = [];

    document.querySelectorAll("input[type='checkbox']:checked")
        .forEach(checkbox => {
            selected.push(checkbox.value);
        });

    console.log(selected);
});