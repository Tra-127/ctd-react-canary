import React from 'react';
import "./TodoList"
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {

    const listReducer = (state, action) => {
        switch (action.type) {
            case 'TODO_LIST_FETCH_INIT':
                return {
                    ...state,
                    isLoading: true,
                    isError: false,
                };
            case 'TODO_LIST_FETCH_SUCCESS':
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    data: action.payload,
                };
            case 'TODO_LIST_FETCH_FAILURE':
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                };
            default:
                throw new Error();
        }
    };

    const [todoList, setTodoList] = React.useReducer(
        listReducer,
        {data: [], isLoading: false, isError: false}
    );


    React.useEffect(() => {

        setTodoList({ type: 'TODO_LIST_FETCH_INIT' });

        const headers = {
            Authorization: 'Bearer keyFtGqLWD2Fyqz6p'
        }

        fetch('https://api.airtable.com/v0/appcbHG1yGAqPMKMu/Default', {headers})
            .then((response) => response.json())
            .then((result) => {
                setTodoList({
                    type: 'TODO_LIST_FETCH_SUCCESS',
                    payload: result.records,
                });
            })
            .catch(() =>
                setTodoList({ type: 'TODO_LIST_FETCH_FAILURE' })
            );

    }, ['https://api.airtable.com/v0/appcbHG1yGAqPMKMu/Default']);


    React.useEffect(() => {
        if(todoList.isLoading = false) {
            setTodoList('TODO_LIST_FETCH_INIT');
        }
    }, []);


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

            {todoList.isLoading ? (
                <p> Loading... </p>
            ):(
                <TodoList todoList={todoList.data} onRemoveTodo={removeTodo} />
            )}
        </>
    );
};

export default App;
