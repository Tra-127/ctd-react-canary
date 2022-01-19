import React from "react";

const TodoListItem = ({todo, onRemoveTodo}) => (

    <li>
        {todo.title}
        {"\t"}
        <button
            onClick={() => {
                onRemoveTodo(todo.id);
            }}
        >Remove
        </button>

    </li>
);


export default TodoListItem