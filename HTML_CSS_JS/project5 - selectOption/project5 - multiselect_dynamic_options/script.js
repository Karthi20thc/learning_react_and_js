const skills = [
    { id: 1, name: "React" },
    { id: 2, name: "Vue" },
    { id: 3, name: "Angular" },
    { id: 4, name: "Next.JS" }
];

const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const btn = document.querySelector(".dropdown-btn");
const fragment = document.createDocumentFragment();


// Handlers
const ConvertDataTOElements = (skill) => {

    // 1 Create div wrapper
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("option");

    // 2 Create label
    const label = document.createElement("label");

    // 3 Create input
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = skill.id; // ✅ use id
    checkbox.dataset.name = skill.name; // optional (store name)


    // 4 Add text node
    const text = document.createTextNode(" " + skill.name); // ✅ use name

    // Append input + text to label
    label.appendChild(checkbox);
    label.appendChild(text);

    // 6 Append label to div
    optionDiv.appendChild(label);

    // 7 Append div to dropdown
    dropdownContent.appendChild(optionDiv);

};

const ConvertDataTOElementsEX2 = (skill) => {

    const optionDiv = document.createElement("div");
    optionDiv.className = "option";

    optionDiv.innerHTML = `
        <label>
            <input type="checkbox" value="${skill.id}"> ${skill.name}
        </label>
    `;

    fragment.appendChild(optionDiv);

};
// !should not append here
// dropdownContent.appendChild(fragment);


const btnHandler = (event) => {
    // This stops the event from bubbling upward. does NOT go to document - use limited
    // event.stopPropagation();
    dropdown.classList.toggle("active");
    console.log("Ran in btn.addEventListener->", dropdown.contains(event.target));
};


const documentHandler = (event) => {
    //! This alone will create bug , Only close if click happened OUTSIDE dropdown. so btn click dropdown.contains(event.target) -> false
    // dropdown.classList.remove("active");
    console.log("Ran in document.addEventListener->", dropdown.contains(event.target));

    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("active");
    }

};

const ExtractCheckedInputs = (checkbox) => {

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

};




// step -1 for each skills data, we are creating elements
// skills.forEach(ConvertDataTOElements);

skills.forEach(ConvertDataTOElementsEX2);
dropdownContent.appendChild(fragment); // only for EX2

// step -2 🔥 NOW select checkboxes (after they exist)
const checkboxes = document.querySelectorAll(".dropdown-content input");

// for each checkBoxes, we extracting option value to display the checked input, i.e checkboxes
checkboxes.forEach(ExtractCheckedInputs);

// Close when clicking outside
document.addEventListener("click", documentHandler);

btn.addEventListener("click", btnHandler);