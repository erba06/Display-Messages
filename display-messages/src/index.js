import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Router } from '@reach/router'
import App from './App'
import AddPostForm from './components/AddPostForm'
import ListPage from './container/ListPage';
import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

ReactDOM.render(
  // <Provider store={store}>
  <div>
    <Router>
      <App path='/*' />
      <AddPostForm path='addpostform' />
      <ListPage path='listpage' />
    </Router>
    <Alert stack={{ limit: 3 }} effect='slide' offset={30} />
  </div>
  // </Provider>
  , document.getElementById('root'))
serviceWorker.unregister()
