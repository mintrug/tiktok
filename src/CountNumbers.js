import { useState, useLayoutEffect } from "react"

function CountNumbers() {

    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        if(count > 3) {
            setCount(0)
        }
    })

    const handleCount = () => {
        setCount(prev => (prev + 1))
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => handleCount()}>Đếm</button>
        </div>
    )
}

export default CountNumbers