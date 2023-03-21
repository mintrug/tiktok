import { useContext } from "react"
import { MyContext } from "./Context"

const useTodoApp = () => {
    return useContext(MyContext)
}

export default useTodoApp