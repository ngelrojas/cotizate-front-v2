import {GET_PROFILE} from '../types'

const initialState = {
    authenticated: false,
    profileData: {},
    loading: false
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case GET_PROFILE:
            return {
                authenticated: true,
                ...action.getPerfilData(initialState)
            }
        default:
            return state
    }
}
