import React from "react";

const AddTodoForm = ({onAddTodo}) => {

    let [todoTitle, setTodoTitle] = React.useState();

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }
    const handleAddTodo = (event) => {
        event.preventDefault();
        //console.log(todoTitle);
        //event.target.title.value = "";


        onAddTodo({
            title: todoTitle,
            id: Date.now()
        });

        setTodoTitle('');
    };

    return(
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title: </label>
            <input id="todoList" name="title" value={todoTitle} onChange={handleTitleChange}/>
            <button>Add</button>
        </form>
    );
};

export default AddTodoForm;