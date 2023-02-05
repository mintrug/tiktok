import { useState, useEffect } from "react"

function Content() {
    var tabs = ['posts', 'comments', 'albums']

    const [type, setType] = useState('posts')
    const [title, setTitle] = useState('')
    const [posts, setPost] = useState([])
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [size, setSize] = useState(window.innerWidth)
    const [time, setTime] = useState(180)
    const [avatar, setAvatar] = useState()

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

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth)
        }
    
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        setInterval(() => {
            setTime(prev => prev - 1)
        }, 1000)
    }, [])

    const handleAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avatar && avatar.preview)
        }
    }, [avatar])
    
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
                placeholder={size}
                onChange={(e) => setTitle(e.target.value)}
            />

            <h1>{time}</h1>

            <input
                type='file'
                onChange={handleAvatar}
            />

            <img src={avatar && avatar.preview} alt='' width='80%'/>

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