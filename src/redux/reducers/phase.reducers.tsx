import {
    SET_DEFAULT_PHASE,
    SET_PHASE,
    SET_ERRORS
} from '../types'

const initialState = null 

export default function(state = initialState, action: any) {
    switch (action.type) {
        case SET_DEFAULT_PHASE:
            return initialState
        case SET_PHASE:
            return {
                ...action.payload
            }
        case SET_ERRORS:
            return {
                errors: action.payload
            }
        default:
            return state
    }
}
