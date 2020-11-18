import {
    SET_AUTHENTICATED,
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

        case GET_CURRENT_PROFILE:
            return {
                authenticated: true,
                loading: false,
                ...action.payload
            }

        default:
            return state
    }
}
