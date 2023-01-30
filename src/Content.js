import { useState, useEffect } from "react"

function Content() {
    var tabs = ['posts', 'comments', 'albums']

    const [type, setType] = useState('posts')
    const [title, setTitle] = useState('')
    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPost(posts)
            })
    }, [type])

    useEffect(() => {
        if (title !== '')
            document.title = title
        else
            document.title = 'React App'
    }, [title])

    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color:'white',
                        background:'black'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content