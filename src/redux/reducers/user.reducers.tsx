import {
    SET_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    GET_PROFILE,
    GET_CURRENT_PROFILE,
    LOADING_USER
} from '../types'
const initialState = {
    authenticated: false,
    credential: {},
    loading: false
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            }
        case SET_UNAUTHENTICATED:
            return initialState
        case SET_USER:
            return {
                authenticated: true,
                loading: false,
                ...action.payload
            }
        case GET_PROFILE:
            console.info(action.payload)
            break
        case GET_CURRENT_PROFILE:
            return{
                ...action.payload
            }
        case LOADING_USER:
            return {...state, loading: true}
        default:
            return state
    }
}
