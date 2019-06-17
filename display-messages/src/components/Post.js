import React from 'react'
import { Link } from '@reach/router'

const Post = ({ posts }) => {
  return (
    <div className='my-list container-fluid'>
      <h1 class='text-center default-text py-3'>My list</h1>
      <Link to='addpostform'><button class='btn btn-outline-primary'>Add a Post</button></Link>
      <ul>
        {posts.map((post) =>
          <div className='card indigo form-white' key={post.id}>
            <div className='card-body'>
              <h5 className='card-title'>{post.title}</h5>
              <h6 className='card-subtitle mb-2 text-muted'>{post.id} - {post.body}</h6>
            </div>
          </div>)}
      </ul>
    </div>
  )
}
export default Post
