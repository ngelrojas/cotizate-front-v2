import {
    SET_DEFAULT_CAMPAING,
    SET_CAMPAING,
    SET_ERRORS
} from '../types'

const InitCampaingState = {
    campaing: {}, 
    errors: {}
}

export default function(state = InitCampaingState, action: any) {
    console.info('ACTIONS')
    console.info(action.type)
    switch (action.type) {

        case SET_DEFAULT_CAMPAING:
            return InitCampaingState
        
        case SET_CAMPAING:
            return {
                campaing: action.payload
            }

        case SET_ERRORS:
            return {
                errors: action.payload
            }

        default:
            return state
    }
}
