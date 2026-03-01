// js
const progressContainer = document.querySelector(".progress-container")
const startBtn = document.querySelector(".start-btn")
const ResetBtn = document.querySelector(".reset-btn")

// hint css
//  background: linear-gradient(to right, green 10%, white 10%);

let percent = 0;
let color = 'orange';
let intervalID;


const handleProgressColor = (percent, color) => {

    if (percent >= 0 && percent <= 30) {
        color = 'red'
        progressContainer.style.background = ` linear-gradient(to right, ${color} ${percent}%, white ${percent}%)`
        // progressContainer.style.transition = `background 0.5s ease-in-out`
    }
    else if (percent >= 31 && percent <= 50) {
        color = 'pink'
        progressContainer.style.background = ` linear-gradient(to right, ${color} ${percent}%, white ${percent}%)`
        // progressContainer.style.transition = `background 0.5s ease-in-out`
    }
    else if (percent >= 51 && percent <= 90) {
        color = 'green'
        progressContainer.style.background = ` linear-gradient(to right, ${color} ${percent}%, white ${percent}%)`
        // progressContainer.style.transition = `background 0.5s ease-in-out`
    }
    progressContainer.style.background = ` linear-gradient(to right, ${color} ${percent}%, white ${percent}%)`
}


const handleProgress = (event) => {

    intervalID = setInterval(() => {
        // auto clear Interval based on percent
        if (percent === 90) {
            clearInterval(intervalID)
            return
        }

        // we can play with percent and interval time , for smooth UI progress
        percent = percent + 1;
        handleProgressColor(percent, color);
    }, 100)



    // !no use here
    // if (percent === 90) {
    //     clearInterval(intervalID)
    // }
}

const handleResetProgress = (event) => {
    clearInterval(intervalID)
    percent = 0;
    const color = 'white';
    progressContainer.style.background = ` linear-gradient(to right, ${color} ${percent}%, white ${percent}%)`
}



startBtn.addEventListener("click", handleProgress)
ResetBtn.addEventListener("click", handleResetProgress)