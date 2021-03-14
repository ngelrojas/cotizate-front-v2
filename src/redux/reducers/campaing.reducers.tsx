import {
    SET_CAMPAING,
    SET_ERRORS
} from '../types/campaing.types'

const InitCampaingState = {
    answer: false,
    campaing: {}, 
}

export default function(state = InitCampaingState, action: any) {
    
    switch (action.type) {
       
        case SET_CAMPAING:
            return{
                answer: true,
                ...action.payload
            } 

        case SET_ERRORS:
            return {
                answer: false,
                ...action.errors
            }

        default:
            return state 
    }
}
