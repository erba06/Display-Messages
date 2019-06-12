import React from 'react'
import { Link } from "@reach/router"

const Post = ({ posts }) => {

    return (
        <div className="my-list container-fluid">
            <h1>My list</h1>
            <Link to="addpostform"><button>Add a Post</button></Link>
            <ul>
                {posts.map((post) =>
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.id} - {post.body}</p>
                    </div>)}
            </ul>
        </div>
    )
}
export default Post