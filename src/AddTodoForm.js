import React from "react";


const AddTodoForm = (props) => {

    const handleAddTodo = (event) => {
        event.preventDefault();
        let todoTitle = event.target.title.value;
        console.log(todoTitle);
        event.target.title.value = "";

        props.onAddTodo(todoTitle);
    };

    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title: </label>
            <input id="todoList" name="title" />
            <button>Add</button>
        </form>
    );
};

export default AddTodoForm;