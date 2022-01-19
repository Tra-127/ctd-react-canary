import React from "react";
import TodoListItem from "./TodoListItem";


const TodoList = ({todoList, onRemoveTodo}) => {
    return(
        <ul>
            {todoList.map(function(item){
                return(
                    <TodoListItem todo={item}
                                  key={item.id}
                                  onRemoveTodo={onRemoveTodo}
                    ></TodoListItem>
                );
            })}

        </ul>
    );
};

export default TodoList;