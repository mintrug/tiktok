import React from "react"
import useTodoApp from './hooks'

import { setTodo, addTodo } from "./action"

function TodoNewApp() {

    const [state, dispatch] = useTodoApp()
    const {todo, todos} = state
    
    const handleSubmit = () => {
        dispatch(addTodo(todo))
    }

    return (
        <React.Fragment>
            <h1>Todo App</h1>

            <input
                value={todo}
                placeholder={'Enter your job'}
                onChange={(e) => {
                    dispatch(setTodo(e.target.value))
                }}
            />

            <button onClick={handleSubmit}>Add</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </React.Fragment>
    )
}

export default TodoNewApp