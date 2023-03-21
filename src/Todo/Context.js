import { createContext } from "react"

const MyContext = createContext()

function Context({ children }) {
    
    const data = {
        name: "Test Context",
        func: () => {
            const __this = data
            console.log(__this.name)
        }
    }

    return (
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, Context}