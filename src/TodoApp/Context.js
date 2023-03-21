import { createContext, useReducer } from "react"
import reducer, { initState } from "./Reducer"

const MyContext = createContext()

function TodoProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <MyContext.Provider value={[state, dispatch]}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext }
export default TodoProvider