// js

const time = document.querySelector(".time")
const start_btn = document.querySelector(".start-btn")
const stop_btn = document.querySelector(".stop-btn")

// global state

let initial = 0;
let intervalId;

const handleStartbtn = (event) => {
    console.log(time)


    intervalId = setInterval(() => {
        initial = initial + 1;
        time.textContent = initial
    }, 1000)

}

const handleStopbtn = () => {
    // isTimeStop = true;

    clearInterval(intervalId);
    time.textContent = 0
}


start_btn.addEventListener("click", handleStartbtn)
stop_btn.addEventListener("click", handleStopbtn)