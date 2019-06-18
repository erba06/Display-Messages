
const defaultUrl = 'http://localhost:3001'
const hostUrl = process.env.REACT_APP_API_URL || defaultUrl
if (!process.env.REACT_APP_API_URL) {
    console.warn(`'REACT_APP_API_URL' environment variable is not set! -> fallback to default url: '${defaultUrl}'`)
}

const getPosts = () => fetch('/posts')

// POSTS

const newPost = post => fetch('/posts', {
    method: 'post',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(post)
})

export default {
    getPosts,
    newPost
}
