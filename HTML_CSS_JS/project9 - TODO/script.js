// js

const addtodoInput = document.querySelector(".addtodo-input");
const addtodoBtn = document.querySelector(".addtodo-btn");


let toDOData = [];
let currentTODOInputValue = null


const handleaddtodoInput = (event) => {
    console.log(event.target.value)
    currentTODOInputValue = event.target.value
}

const handleaddtodoBtn = (event) => {
    console.log(addtodoInput.textContent)
    toDOData.push(currentTODOInputValue)
}




addtodoInput.addEventListener("input", handleaddtodoInput)
addtodoBtn.addEventListener("click", handleaddtodoBtn)