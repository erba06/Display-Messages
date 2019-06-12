let nextPostId = 100
export const addPost = post => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        post
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const togglePost = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}