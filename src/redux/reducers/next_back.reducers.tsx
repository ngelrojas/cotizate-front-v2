import {NEXT, BACK} from '../types'

const initialState = {
    counter: 0
}

export default function(state = initialState, action: any) {

    switch(action.type){
        case NEXT:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case BACK:
            return {
                ...state,
                counter: state.counter - 1,
            }
        default:
            return state
    }

}
