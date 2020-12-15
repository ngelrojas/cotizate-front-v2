import {
    OBJETO_CATEGORIAS
} from '../types/categoriaTypes'
const initialState = {
    statusCategorias: false,
    listaCateg:[]
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case OBJETO_CATEGORIAS:
            return {
                ...state,
                statusCategorias: true,
                listaCateg:action.listaCateg
            }
        default:
            return state
    }
}
