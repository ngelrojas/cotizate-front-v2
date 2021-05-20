import {
    SET_PROFILE,
    SET_ERRORS
} from '../types/profile.types'

const InitProfileState = {
    authenticated: false,
    profile: {},
}

export default function(state = InitProfileState, action: any) {
    console.log(action.type)
    switch (action.type) {

        case SET_PROFILE:
            console.log('FROM ACTIONS')
            console.log(action.payload)
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
