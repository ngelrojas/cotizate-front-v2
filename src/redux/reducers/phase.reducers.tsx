import {
    SET_PHASES,
    SET_ERRORS
} from '../types/phases.types'

const initialState = {
    answer: false,
    phases: {}, 
} 

export default function(state = initialState, action: any) {
    switch (action.type) {

        case SET_PHASES:
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
