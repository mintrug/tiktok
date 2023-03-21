import { useState } from "react"
import Content from "./Content"
import FakeChat from "./FakeChat"
import CountNumbers from "./CountNumbers"
import TodoApp from "./Todo/TodoApp"
import { Context } from "./Todo/Context"
import TodoNewApp from "./TodoApp/TodoNewApp"
import { TodoProvider } from "./TodoApp"

function App() {

  const [show, setShow] = useState(false)

  return (
    // <Context>
    <TodoProvider>
      <div style={{ marginTop: 100, marginLeft: 100 }}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <TodoNewApp />}
      </div>
    </TodoProvider>
    // </Context>
  )
}

export default App;
