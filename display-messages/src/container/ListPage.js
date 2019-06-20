import React from 'react'
import axios from 'axios'
import Post from '../components/Post'

export default class ListPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      newPosts: []
    }
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data
        this.setState({ posts })
        console.log(posts)
      })

    axios.get('http://localhost:4000/posts/')
      .then(response => {

        this.setState({ newPosts: response.data });
        console.log(this.state.newPosts)
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  //  componentDidUpdate() {

  //  axios.get(`https://jsonplaceholder.typicode.com/posts`)
  //   .then(res => {
  //     const posts = res.data
  //     this.setState({ posts })
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })

  // }


  render() {
    let posts = this.state.posts
    let newPosts = this.state.newPosts
    console.log(newPosts)
    return (
      <Post posts={posts} />
    )
  }
}
