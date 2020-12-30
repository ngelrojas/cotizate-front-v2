import {
    SET_PROFILECA,
    SET_ERRORS
} from '../types/profileca.types'

const InitCompanyState = {
    answer: false,
    profileca: {}, 
}

export default function(state = InitCompanyState, action: any) {
    
    switch (action.type) {
       
        case SET_PROFILECA:
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
