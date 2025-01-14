import React from 'react';
import "./TodoList"
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


const useSemiPersistentState = () =>{

    const [todoList, setTodoList] = React.useState(
        JSON.parse(localStorage.getItem('savedTodoList') || '[]' )
    );


    React.useEffect(() => {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }, [todoList]);

    return [todoList, setTodoList];
}



function App() {

    const [todoList, setTodoList] = useSemiPersistentState();

    const  addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    }

    const removeTodo = (id) => {
        const newTodoList = todoList.filter(item => id !== item.id);
        setTodoList(newTodoList);
    };

    return (
        <>
            <h1> Todo List </h1>
            <AddTodoForm onAddTodo={addTodo}/>
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        </>
    );
}

export default App;
