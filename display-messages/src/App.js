import React, { Component } from 'react'
import './App.css';
import ListPage from './container/ListPage'
import api from './api.js'



class App extends Component {
  state = {
    posts: [],
  }

  syncDatas = () => {
    api.getPosts().then(posts => { this.setState({ posts: posts }) })

  }

  componentDidMount() {
    this.syncDatas()
  }

  render() {
    return (
      <div className="App">
        <ListPage />
      </div>
    );
  }
}

export default App;
