import React, { useReducer } from 'react'

const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
    {
        id: 3,
        title: "Todo 3",
        complete: true,
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        case "CREATE":
            console.log('Añadir nueva tarea')
            return state;
        case "UPDATE":
            console.log('Modificar tarea')
            return state;
        case "REMOVE":
            console.log('Eliminar tarea')
            return state;
        default:
            return state;
    }
};

export const TodoList = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    const newTodo = (todo) => {
        dispatch({ type: "CREATE", todo: todo });
    };

    const editTodo = (todo) => {
        dispatch({ type: "UPDATE", todo: todo });
    };

    const removeTodo = (todo) => {
        dispatch({ type: "REMOVE", id: todo.id });
    };

    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        <span style={todo.complete ? { textDecoration: 'line-through' } : {}}>
                            {todo.title}
                        </span>
                    </label>
                </div>
            ))}
        </>
    );
}
