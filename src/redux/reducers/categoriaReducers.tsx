import {
    OBJETO_CATEGORIAS,
    FILTRO_CATEGORIAS,
    FILTRO_CATEGORIAS_ENTY,
    FILTRO_CRITERIO_CATEGORIAS
} from '../types/categoriaTypes'
const initialState = {
    statusCategorias: false,
    listaCateg:[],
    statusFiltrada:false,
    listaFiltada:[],
    statusCriterio:false,
    listaCriterio:[]
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case OBJETO_CATEGORIAS:
            return {
                ...state,
                statusCategorias: true,
                listaCateg:action.listaCateg
            }
        case FILTRO_CATEGORIAS:
            return {
                ...state,
                statusFiltrada: true,
                listaFiltada:action.listaFiltada
            }
        case FILTRO_CRITERIO_CATEGORIAS:
            return {
                ...state,
                statusCriterio: true,
                listaCriterio:action.listaCriterio
            }
        default:
            return state
    }
}
