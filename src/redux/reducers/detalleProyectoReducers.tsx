import {
    DETALLE_PROYECTO
} from '../types/detalleProyecto.types'
const initialState = {
    statusDetalle: false,
    proyectosDetalle:{},
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case DETALLE_PROYECTO:
            return {
                ...state,
                statusDetalle: true,
                proyectosDetalle:action.detalle
            }                        
        default:
            return state
    }
}
