import {
    PROYECTOS_FINALIZADOS_LOAD,
    PROYECTOS_DESTACADOS_LOAD,
    CAUSAS_SOCIALES_LOAD
} from '../types/homeTypes'
const initialState = {
    proyectosDestacados: false,
    featuredProjects:[],
    proyectosFinalizados: false,
    finalizedProjects:[],
    causasSociales: false,
    listCausasSociales:[]
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case PROYECTOS_DESTACADOS_LOAD:
            return {
                ...state,
                proyectosDestacados: true,
                featuredProjects:action.destacados
            }
        case PROYECTOS_FINALIZADOS_LOAD:
            return {
                ...state,
                proyectosFinalizados: true,
                finalizedProjects:action.finalizeds
            }
        case CAUSAS_SOCIALES_LOAD:
            return {
                ...state,
                causasSociales: true,
                listCausasSociales:action.causas
            }
        default:
            return state
    }
}
