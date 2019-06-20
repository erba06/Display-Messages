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

  render() {
    let posts = this.state.posts
    let newPosts = this.state.newPosts
    let out = newPosts.map(function (obj) {
      return {
           id: obj._id +101,
           title: obj.title,
           body: obj.body
       };
   });
   
   console.log(out);
    let totalList = [...posts, ...out]
    console.log(newPosts)
  
    
    return (
      <Post posts={totalList} />
    )
  }
}
