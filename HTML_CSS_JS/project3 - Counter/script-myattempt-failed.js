// js

const time = document.querySelector(".time")
const start_btn = document.querySelector(".start-btn")
const stop_btn = document.querySelector(".stop-btn")

// global state

let initial = 0;
let isTimeStop = false;


const handleStartbtn = (event) => {
    console.log(time)

    if (!isTimeStop) {
        setInterval(() => {
            initial = initial + 1;
            time.textContent = initial
        }, 1000)
    }
}

const handleStopbtn = () => {
    isTimeStop = true;
}

//! HINT- Once `setInterval` starts, it keeps running forever until you call:

```js
clearInterval(intervalId)
```


start_btn.addEventListener("click", handleStartbtn)
stop_btn.addEventListener("click", handleStopbtn)