import React from "react";

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


function TodoList(){
    return(
        <ul>
            {todoList.map(function(item){
                return(
                    <li key={item.id}>{item.title}</li>
                )
            })}
        </ul>
    );
};


export default TodoList;