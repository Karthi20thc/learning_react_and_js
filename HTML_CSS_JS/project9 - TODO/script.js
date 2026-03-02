// js

const addtodoInput = document.querySelector(".addtodo-input");
const addtodoBtn = document.querySelector(".addtodo-btn");
const addedlistContainer = document.querySelector(".addedlist-container");
const fragment = document.createDocumentFragment();


let toDODataDummy = [{
    todo_title: "test",
    creation_time: new Date().toLocaleString()
}];
let toDOData = []
let currentTODOInputValue = null


const handleaddtodoInput = (event) => {
    console.log(event.target.value)
    currentTODOInputValue = event.target.value
}

const handleaddtodoBtn = (event) => {
    console.log(currentTODOInputValue)

    // create necessary object, that will be push into tododata 

    const todoObj = {
        todo_title: currentTODOInputValue ?? "No title",
        creation_time: new Date().toLocaleString(),
        id: Date.now()
    }

    // s1 push the incoming data
    // toDOData.push(todoObj)

    // s1 Before pushing use .some and condition to check for duplicates and then push
    const alreadyExists = toDOData.some(
        todo => todo.todo_title.toLowerCase() === currentTODOInputValue.toLowerCase()
    );

    if (alreadyExists) {
        alert("Todo already exists!");
        return;
    }

    toDOData.push(todoObj);
    console.log("toDOData", toDOData)


    // now create child elemts for todo container, for the todocata
    CreateEachTodo(todoObj)

}

const CreateEachTodo = (todoObj) => {
    // s1 create div
    const todoDiv = document.createElement("div");

    todoDiv.className = "eachtodo";
    // 
    todoDiv.setAttribute("data-id", todoObj.id);

    todoDiv.innerHTML = `
                <div>Title -  ${todoObj.todo_title}</div>
                <div>Title -  ${todoObj.creation_time}</div>
                <label>
                    <input type="checkbox" />
                        Mark as complete
                    </label>
                <button class="delete-btn">Delete</button>
                `
    addedlistContainer.appendChild(todoDiv)
}


//!!! Instead of adding event listener to every delete button, use EVENT DELEGATION. code written by AI
addedlistContainer.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete-btn")) {

        const todoDiv = e.target.closest(".eachtodo");
        const id = Number(todoDiv.dataset.id);

        // Remove from array
        toDOData = toDOData.filter(todo => todo.id !== id);

        // Remove from DOM
        todoDiv.remove();

        console.log("Updated Data:", toDOData);
    }
});



// toDOData.forEach(CreateEachTodo)
addtodoInput.addEventListener("input", handleaddtodoInput)
addtodoBtn.addEventListener("click", handleaddtodoBtn)