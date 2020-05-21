import {GET_PROFILE} from '../types'

const initialState = {
    authenticated: false,
    credential: {},
    loading: false
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state
            }
        default:
            return state
    }
}
