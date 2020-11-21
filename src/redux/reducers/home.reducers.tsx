import {
    PROYECTOS_FINALIZADOS_LOAD
} from '../types/homeTypes'
const initialState = {
    proyectosDestacados: false,
    featuredProjects:[]
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case PROYECTOS_FINALIZADOS_LOAD:
            return {
                ...state,
                proyectosDestacados: true,
                featuredProjects:action.destacados
            }
        default:
            return state
    }
}
