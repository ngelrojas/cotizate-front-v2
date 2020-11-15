import {
    PROYECTOS_FINALIZADOS_LOAD
} from '../types/homeTypes'
const initialState = {
    proyectos: false
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case PROYECTOS_FINALIZADOS_LOAD:
            return {
                ...state,
                proyectos: true
            }
        default:
            return state
    }
}
