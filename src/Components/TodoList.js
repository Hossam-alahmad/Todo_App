import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([todo, ...todos]);
    };
    const updateTodo = (id, newValue) => {
        if (!newValue || /^\s*$/.test(newValue)) return;

        setTodos(prevTodo =>
            prevTodo.map(todo => (todo.id === id ? newValue : todo))
        );
    };

    const removeTodo = id => {
        const todoList = todos.filter(todo => todo.id !== id);
        setTodos([...todoList]);
    };

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updateTodos);
    };

    return (
        <div className="todo-list">
            <h1>What will todo today?</h1>
            <TodoForm onSubmit={addTodo} />
            {todos.map(todo => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                        completeTodo={completeTodo}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;
