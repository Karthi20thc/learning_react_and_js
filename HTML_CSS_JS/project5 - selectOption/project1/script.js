// js

const selectContainer = document.querySelector(".select-container");


const handleSelectContainer = (event) => {
    // console.log(event)
    console.log(event.target.value)
}



selectContainer.addEventListener("change", handleSelectContainer)