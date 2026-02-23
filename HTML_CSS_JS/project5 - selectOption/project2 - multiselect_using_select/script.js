// js

const selectContainer = document.querySelector(".select-container"); // return HTMLSelectElement
const option = document.querySelectorAll("option"); // returns NodeList
const getAllbtn = document.querySelector(".get-all"); // return HTMLButtonElement


const handleSelectContainer = (event) => {
    // console.log(event)
    console.log(event.target.value)
}
const handleGetAllbtn = (event) => {
    // const selectedValues = Array.from(selectContainer.selectedOptions)
    const selectedValues = selectContainer
    // .map(option => option.value);

    console.log("Element type--->", option.constructor.name);
    console.log("Element type--->", selectedValues.constructor.name);
    console.log("Element type--->", getAllbtn.constructor.name);
    // console.log("Element type", Object.prototype.toString.call(selectContainer));
    // console.log("Element type", selectContainer instanceof NodeList); // false
}



selectContainer.addEventListener("change", handleSelectContainer)
getAllbtn.addEventListener("click", handleGetAllbtn)