import { SET_JOB, ADD_JOB, DELETE_JOB } from "./Const"

// initial
export const initial = {
    job: '',
    jobs: []
}

// reducer
const reducer = (state, action) => {
    let newState
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        case DELETE_JOB:
            const newJob = [...state.jobs]
            newJob.splice(action.payload, 1)
            
            newState = {
                ...state,
                jobs: newJob
            }
            break
        default:
            throw ("Invalid action")
    }
    return newState
}

export default reducer