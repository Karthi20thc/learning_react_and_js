// js
const progressContainer = document.querySelector(".progress-container")
const startBtn = document.querySelector(".start-btn")
const ResetBtn = document.querySelector(".reset-btn")

// hint css
//  background: linear-gradient(to right, green 10%, white 10%);


const handleProgress = (event) => {
    const percent = 10;
    progressContainer.style.background = ` linear-gradient(to right, green ${percent}%, white ${percent}%)`
}






startBtn.addEventListener("click", handleProgress)