import React from 'react';
import "./TodoList"
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {

    const [newTodo, setNewTodo] = React.useState('');


    return (
        <div>
            <h1> Todo List </h1>
            <AddTodoForm onAddTodo={setNewTodo}></AddTodoForm>
            <p> {newTodo} </p>
            <TodoList></TodoList>
        </div>
    );
}

export default App;
