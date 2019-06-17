import React from 'react'
import axios from 'axios'
import Post from '../components/Post'

export default class ListPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data
        this.setState({ posts })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render () {
    let posts = this.state.posts
    return (
      <Post posts={posts} />
    )
  }
}
