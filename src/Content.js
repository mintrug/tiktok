import { useState, useEffect } from "react"

function Content() {
    var tabs = ['posts', 'comments', 'albums']

    const [type, setType] = useState('posts')
    const [title, setTitle] = useState('')
    const [posts, setPost] = useState([])
    const [showGoToTop, setShowGoToTop] = useState(false)

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

        return () => {
            document.title = 'React App'
        }
    }, [title])

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

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
            
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go to top
                </button>
            )}
        </div>
    )
}

export default Content