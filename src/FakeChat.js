import { useEffect, useState } from "react"

const lessions = [
    {
        id: 1,
        name: "React JS là gì? Tại sao nên học React JS?"
    },
    {
        id: 2,
        name: "SPA/MPA là gì?"
    },
    {
        id: 3,
        name: "Arrow function"
    }
]

function FakeChat() {
    const [lessionId, setLessionId] = useState(1)

    useEffect(() => {
        const handleEvent = (e) => {
            console.log(e.detail)
        }

        window.addEventListener(`lession-${lessionId}`, handleEvent)

        return () => (
            window.removeEventListener(`lession-${lessionId}`, handleEvent)
        )
    }, [lessionId])

    return (
        <div>
            <ul>
                {lessions.map((lession) => (
                    <li
                        key={lession.id}
                        style={{
                            display:"block",
                            color: lessionId === lession.id ? 'red' : 'black'
                        }}
                        onClick={() => setLessionId(lession.id)}
                    >
                        {lession.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FakeChat