const SET_USER ="SET_USER"
const SET_TOKEN ="SET_TOKEN"

const defaultState = {
    items:[],
    isFetching:true,
    user:{},
    token:null,
}

export default function reposReducer(state = defaultState,action){
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user:action.payload
            }
        case SET_TOKEN:
            return {
                ...state,
                token:action.payload
            }
        default:return state
    }
}

export const setUser = (user)=>({
    type:SET_USER,
    payload: user
})

export const setToken = (token)=>({
    type:SET_TOKEN,
    payload: token
})