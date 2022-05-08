import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

const Todo = ({ todo, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        text: "",
    });
    const submitUpdate = value => {
        updateTodo(edit.id, { id: edit.id, text: value.text });
        setEdit({
            id: null,
            value: "",
        });
    };
    if (edit.id) {
        return (
            <TodoForm
                edit={edit}
                onSubmit={submitUpdate}
                buttonName="Edit Todo"
            />
        );
    }
    console.log("render todo");
    return (
        <div className={todo.isComplete ? "todo todo-complete" : "todo"}>
            <div className="todo-text" onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                />
            </div>
        </div>
    );
};

export default Todo;
