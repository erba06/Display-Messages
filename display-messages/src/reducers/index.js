import { combineReducers } from 'redux'
import posts from './posts'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    posts,
    visibilityFilter
})

export default todoApp