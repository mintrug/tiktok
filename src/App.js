import { useState } from "react"
import Content from "./Content"
import FakeChat from "./FakeChat"
import CountNumbers from "./CountNumbers"
import TodoApp from "./Todo/TodoApp"

function App() {
  
  const [show, setShow] = useState(false)

  return (
    <div style={{ marginTop: 100, marginLeft: 100 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <TodoApp />}
    </div>
  )
}

export default App;
