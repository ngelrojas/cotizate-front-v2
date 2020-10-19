import {
    SET_DEFAULT_CAMPAING,
    SET_CAMPAING,
    SET_ERRORS
} from '../types'

/*interface InitCampaingState {*/
    //id: number,
    //category: string,
    //city: string,
    //qty_day: number,
    //amount: number,
    //role: number 
/*}*/

const initialState = null 

export default function(state = initialState, action: any) {
    switch (action.type) {
        case SET_DEFAULT_CAMPAING:
            return initialState
        case SET_CAMPAING:
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
