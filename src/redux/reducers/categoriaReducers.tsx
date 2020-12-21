import {
    OBJETO_CATEGORIAS,
    FILTRO_CATEGORIAS,
    FILTRO_CATEGORIAS_ENTY
} from '../types/categoriaTypes'
const initialState = {
    statusCategorias: false,
    listaCateg:[],
    statusFiltrada:false,
    listaFiltada:[]
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case OBJETO_CATEGORIAS:
            return {
                ...state,
                statusCategorias: true,
                listaCateg:action.listaCateg
            }
        case OBJETO_CATEGORIAS:
            return {
                ...state,
                statusFiltrada: true,
                listaFiltada:action.listaFiltada
            }
        default:
            return state
    }
}
