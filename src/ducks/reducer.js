import axios from 'axios';

const initialState = {
    user: {}
}

const GET_USER_INFO = "GET_USER_INFO"

export default function reducer(state = initialState, action){

    switch (action.type) {
        case GET_USER_INFO:
            return Object.assign({}, state, {user: action.payload})
        default:
            return state;
    }
}

export function getUser(){
    let userData = axios.get('/auth/me').then( res => {
        return res.data
    })
    return{
        type: GET_USER_INFO,
        payload: userData
    }
}