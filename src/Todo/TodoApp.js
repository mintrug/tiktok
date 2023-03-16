import React, { useReducer, useRef } from "react"
import reducer, { initial } from "./Reducer"
import { setJob, addJob, deleteJob } from "./Function"

function TodoApp() {
    const [state, dispatch] = useReducer(reducer, initial)
    const { job, jobs } = state
    const inputRef = useRef()
    
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return (
        <React.Fragment>
            <h1>Todo</h1>
            <input
                value={job}
                ref={inputRef}
                placeholder="Enter todo"
                type='text'
                onChange={(e) => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => {
                    return (
                        <li key={index}>
                            {job}
                            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                        </li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
}

export default TodoApp