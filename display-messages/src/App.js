import React, { Component } from 'react'
import './App.css';
import ListPage from './container/ListPage'
import api from './api.js'
import { connect } from 'react-redux';
import { activateGeod, closeGeod } from './redux';


export class App extends Component {
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
       <div className='title'>
        <h1 className='text-center default-text py-3'>{this.props.geod.title || '...of Posts!'}</h1>

        {this.props.geod.title ? (
          <button class="btn btn-outline-primary" onClick={this.props.closeGeod}>Exit</button>
        ) : (
          <button class="btn btn-outline-primary"
            onClick={() =>
              this.props.activateGeod({ title: 'My list...' })
            }
          >
            Click Me!
          </button>
        )}
      </div>
        <ListPage />
      </div>
    );
  }
}



const mapStateToProps = state => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;