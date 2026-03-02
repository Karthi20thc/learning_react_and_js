import { useState } from 'react';


const TODO = () => {
    const [inputData, setInputData] = useState('');
    const [todoData, setTodoData] = useState([]);

    const handleTodoInput = (e) => {
        setInputData(e.target.value)
    }
    const handleAddNewTodo = () => {
        const todoObj = {
            todo_title: inputData ?? "No title",
            creation_time: new Date().toLocaleString(),
            is_complete: false,
            id: Date.now()
        }

        // s1 Before pushing use .some and condition to check for duplicates and then push
        const alreadyExists = todoData.some(
            todo => todo.todo_title.toLowerCase() === inputData.toLowerCase()
        );

        if (alreadyExists) {
            alert("Todo already exists!");
            return;
        }

        // todoData.push(todoObj);
        // console.log("toDOData", todoData)

        setTodoData((prev) => {
            return [...prev, todoObj]
        })


        // now create child elemts for todo container, for the todocata
        // CreateEachTodo(todoObj)
    }

    const handleDeleteToto = (id) => {
        console.log(id);

        // remove the data and then update the state
        setTodoData(() => todoData.filter((e) => id != e.id))
    }
    const handleCompleteStatus = (bool_value, id) => {
        // console.log(bool_value, id);

        // todoData.find((e) => e.id = id)
        // console.log((todoData.find((e) => e.id === id)))
        // const clickedCheckBox_obj = todoData.find((e) => e.id === id);

        //! wrong - You Are Adding Instead of Updating
        // setTodoData((prev) => {
        //     return [...prev, {
        //         ...clickedCheckBox_obj,
        //         is_complete: !bool_value
        //     }]
        // })


        setTodoData((prev) => {
            return prev.map((eachtodoObj) => eachtodoObj.id === id ? { ...eachtodoObj, is_complete: !eachtodoObj.is_complete } : eachtodoObj)
        })

    }
    // using find to handleCompleteStatus
    // const handleCompleteStatus = (id) => {

    //     setTodoData((prev) => {
    //         const found = prev.find(todo => todo.id === id);

    //         if (!found) return prev;

    //         const updatedTodo = {
    //             ...found,
    //             is_complete: !found.is_complete
    //         };

    //         return prev.map(todo =>
    //             todo.id === id ? updatedTodo : todo
    //         );
    //     });

    // };

    console.log(todoData)

    return (
        <div>
            <section className="addnew-container">
                <input className="addtodo-input" type="text" title="add todo" onChange={(e) => handleTodoInput(e)} />
                <button className="addtodo-btn" onClick={handleAddNewTodo}>Add New</button>
            </section>


            {/* TOdo list will render here */}
            <section className="addedlist-container">
                {todoData?.map((e, index) => {
                    return (
                        <div className='eachtodo' key={index}>
                            <div>ID -  {e.id}</div>
                            <div>Title -  {e.todo_title}</div>
                            <div>Title -  {e.creation_time}</div>
                            {/* <input type="check-box">mark as complete</input> */}
                            <label>
                                <input type="checkbox" checked={e.is_complete} onClick={() => handleCompleteStatus(e.is_complete, e.id)} />
                                Mark as complete
                            </label>
                            <button className="delete-btn" onClick={() => handleDeleteToto(e.id)}>Delete</button>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default TODO;