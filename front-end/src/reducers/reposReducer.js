const SET_USER = "SET_USER"
const SET_TOKEN = "SET_TOKEN"
const SET_BLOCK = "SET_BLOCK"
const SET_POST = "SET_POST"
const ADD_POST = "ADD_POST"

const defaultState = {
    items: [],
    isFetching: true,
    user: {},
    token: null,
    blockStatus: 'none',
    posts: []
}

export default function reposReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case SET_BLOCK:
            return {
                ...state,
                blockStatus: action.payload
            }
        case ADD_POST:
            state.posts.push(action.payload)
            return {
                ...state
            }
        case SET_POST:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state

    }
}

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

export const addPost = (post) => ({
    type: ADD_POST,
    payload: post
})


export const setPosts = (posts) => ({
    type: SET_POST,
    payload: posts
})

export const setToken = (token) => ({
    type: SET_TOKEN,
    payload: token
})

export const setBlockStatus = (status) => ({
    type: SET_BLOCK,
    payload: status
})