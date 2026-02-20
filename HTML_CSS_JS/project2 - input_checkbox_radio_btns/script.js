const checkbox_input = document.querySelector(".my-checkbox")
const test_container = document.querySelector(".test-container")

const handleCheckbox = (event) => {
    console.log(event)
    test_container.classList.add("show")
    // test_container.classList.toggle("show")
}

checkbox_input.addEventListener("click", handleCheckbox);





