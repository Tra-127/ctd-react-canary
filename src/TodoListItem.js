import React from "react";

const TodoListItem = (props) => (
    <li key={props.item.id}>{props.item.title}</li>
);

export default TodoListItem