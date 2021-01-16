import {
    SET_REWARD,
    GET_REWARD,
    SET_ERRORS
} from '../types/rewards.types'

const initialState = {
    answer: false,
    rewards: {}, 
} 

export default function(state = initialState, action: any) {
    switch (action.type) {

        case SET_REWARD:
            return {
                answer: true,
                ...action.payload
            }
        case GET_REWARD:
            return {
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
