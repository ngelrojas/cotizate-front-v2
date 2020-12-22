import {
    SET_DEFAULT_CAMPAING,
    SET_CAMPAING,
    SET_ERRORS
} from '../types/campaing.types'

const InitCampaingState = {
    answer: false,
    campaing: {}, 
    errors: {}
}

export default function(state = InitCampaingState, action: any) {

    switch (action.type) {

        case SET_DEFAULT_CAMPAING:
            return InitCampaingState
        
        case SET_CAMPAING:
            return {
                ...state,
                answer: true,
                campaing: action.campaing
            }

        case SET_ERRORS:
            return {
                ...state,
                answer: false,
                errors: action.campaing
            }

        default:
            return state 
    }
}
