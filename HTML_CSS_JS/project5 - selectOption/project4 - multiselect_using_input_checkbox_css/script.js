// js

const dropdown = document.querySelector(".dropdown");
const btn = document.querySelector(".dropdown-btn");

const checkboxes = document.querySelectorAll(".dropdown-content input"); // return NodeList

btn.addEventListener("click", function (event) {

    // This stops the event from bubbling upward. does NOT go to document - use limited
    // event.stopPropagation();

    dropdown.classList.toggle("active");
    console.log("Ran in btn.addEventListener->", dropdown.contains(event.target)) // true
});

// Close when clicking outside
document.addEventListener("click", function (event) {

    //! This alone will create bug , Only close if click happened OUTSIDE dropdown. so btn click dropdown.contains(event.target) -> false
    // dropdown.classList.remove("active");

    console.log("Ran in document.addEventListener->", dropdown.contains(event.target))

    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("active");
    }

});


checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener("change", function () {

        // Step 1: Get checked checkboxes
        const checkedBoxes = document.querySelectorAll(
            ".dropdown-content input:checked"
        );

        // Step 2: Convert to array
        const checkedArray = Array.from(checkedBoxes);

        // Step 3: Extract values
        const selectedValues = checkedArray.map(function (cb) {
            return cb.value;
        });

        // Step 4: Update button text
        if (selectedValues.length > 0) {
            btn.textContent = selectedValues.join(", ");
        } else {
            btn.textContent = "Select Skills";
        }

    });

});



// function printTree(node, indent = 0) {
//     console.log(" ".repeat(indent) + node.nodeName);

//     node.childNodes.forEach(child => {
//         printTree(child, indent + 2);
//     });
// }

// printTree(document.querySelector(".dropdown"));