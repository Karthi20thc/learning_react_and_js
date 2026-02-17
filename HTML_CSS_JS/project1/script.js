const openBtn = document.querySelector(".open-btn");
const modal = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-btn");


const openModalHandler = () => {
    console.log("openModalHandler")
    modal.classList.add("show")
}

const closeModalHandler = () => {
    modal.classList.remove("show")
}



openBtn.addEventListener("click", openModalHandler);
closeBtn.addEventListener("click", closeModalHandler);
