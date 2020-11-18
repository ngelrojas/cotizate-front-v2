import {
    PROYECTOS_FINALIZADOS_LOAD
} from '../types/homeTypes'
const initialState = {
    proyectos: false,
    featuredProjects:[]
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case PROYECTOS_FINALIZADOS_LOAD:
            return {
                ...state,
                proyectos: true,
                featuredProjects:action.proyectos
            }
        default:
            return state
    }
}
