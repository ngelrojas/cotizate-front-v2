import {
    SET_PROFILE,
    SET_ERRORS
} from '../types/profile.types'

const InitProfileState = {
    authenticated: false,
    profile: {},
}

export default function(state = InitProfileState, action: any) {
    
    switch (action.type) {

        case SET_PROFILE:
            return {
                authenticated: true,
                ...action.payload
            }
        case SET_ERRORS:
            return {
                authenticated: false,
                ...action.errors
            }

        default:
            return state
    }
}
