import React from "react"

const InputWithLabel = (props) => {

    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.focus();
    });

    return(
        <React.Fragment>
            <label htmlFor="todoTitle"> {props.children} </label>
            <input id="todoList"
                   name="title" value={props.todoTitle}
                   onChange={props.handleTitleChange}
                   ref={inputRef}
            />
        </React.Fragment>
    );
}

export default InputWithLabel;