import {SET_PROFILE} from '../types'

const initialState = {
    authenticated: false,
    credential: {},
    loading: false
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case SET_PROFILE:
            return {
                authenticated: true,
                loading: false,
                ...action.payload
            }
        default:
            return state
    }
}
