import React from "react";
import TodoListItem from "./TodoListItem";


const TodoList = ({todoList}) => {
    return(
        <ul>
            {todoList.map(function(item){
                return(
                    <TodoListItem todo={item} key={item.id}></TodoListItem>
                );
            })}

        </ul>
    );
};

export default TodoList;