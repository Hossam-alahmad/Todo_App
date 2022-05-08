import React, { useState, useRef, useEffect } from "react";

const TodoForm = props => {
    const [input, setInput] = useState("");
    const [id, setId] = useState(1);
    const inp = useRef(null);
    const handleChange = e => {
        setInput(e.target.value);
    };

    useEffect(() => {
        inp.current.focus();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        if (input.trim() || input.trim() !== "") {
            props.onSubmit({
                id: id,
                text: input.trim(),
            });
            setId(prevId => prevId + 1);

            setInput("");
        }
    };
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                ref={inp}
                type="text"
                name="text"
                className="todo-input"
                placeholder="Add a todo"
                value={input}
                onChange={handleChange}
            />
            <button className="todo-btn">
                {props.buttonName ? props.buttonName : "Add Todo"}
            </button>
        </form>
    );
};

export default TodoForm;
