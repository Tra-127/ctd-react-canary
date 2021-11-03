import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
    {
        id: 0,
        title: "Make an appointment",
    },
    {
        id: 1,
        title: "Finish HW1",
    },
    {
        id:2,
        title: "Return books"
    }
];


const TodoList = () => {
    return(
        <ul>
            {todoList.map(function(item){
                return(
                    <TodoListItem key={item.id} item={item}></TodoListItem>
                );
            })}
        </ul>
    );
};

export default TodoList;