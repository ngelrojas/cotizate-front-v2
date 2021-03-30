import {
    DETALLE_PROYECTO, DETALLE_APORTES,DETALLE_FASES,DETALLE_ACTUALIZACIONES, DETAIL_SAVE,DETAIL_LIKE,DETAIL_RECOMENDACIONES,DETALLE_COMMENTS,DETAIL_PROFILE_REDES
} from '../types/detalleProyecto.types'
const initialState = {
    statusDetalle: false,
    proyectosDetalle:{
        id:0,
        title:'',
        video_main:'',
        slug:'',
        description:'',
        public_at:'',
        status:'',
        flag:'',
        profile_ca:0,
        currency:0,
        short_url:'',
        slogan_campaing:'',
        header:{
            id:0,
            qty_day_left:0,
            amount:'',
            amount_reached:'',
            percent_reached:'',
            role:0,
            code_campaing:'',
            user:{
                first_name:'',
                last_name:''
            },
            category:{
                id:0,
                name:'',
                slug:'',
                description:'',
                img_banner:'',
                img_icon:''
            },
            city:{
                id:0,
                name:'',
                slug:'',
                short_name:'',
                code_name:'',
                description:'',
                countries:{
                    id:'',
                    name:'',
                    slug:'',
                    short_name:'',
                    code_name:'',
                    description:''
                }
            }
        },
        profile:{
            id:0,
            cinit:'',
            address:'',
            number_address:'',
            neightbordhood:'',
            cellphone: '',            
            telephone:'',
            description:'',
            complete:'',
            rs_facebook:'',
            rs_twitter:'',
            rs_linkedin:'',
            rs_another:'',
            current_position:'',
            headline:'',
            birthdate:'',
            photo:'',
            user:{
                id:'',
                first_name:'',
                last_name:'',
                email:''
            },
            countries:{
                id:0,
                name:'',
                slug:'',
                short_name:'',
                code_name:'',
                description:''
            },
            cities:{
                id:0,
                name:'',
                slug:'',
                short_name:'',
                code_name:'',
                description:'',
                countries:{
                    id:0,
                    name:'',
                    slug:'',
                    short_name:'',
                    code_name:'',
                    description:''
                }
            }
        }
    },
    statusAportes: false,
    aportes:[],
    statusFases:false,
    fases:[],
    statusComments:false,
    comments:[],
    statusLike:false,
    statusSave:false,
    proyectosRec:[],
    statusProfile:false,
    profiles:{
        rs_another: null,
        rs_facebook: null,
        rs_linkedin: null,
        rs_twitter: null
    },
    statusActualizaciones:false,
    actualizacionesList:[]
}

export default function(state = initialState, action: any) {
    switch (action.type) {
        case DETALLE_PROYECTO:
            return {
                ...state,
                statusDetalle: true,
                proyectosDetalle:action.detalle
            }   
            case DETALLE_APORTES:
                return {
                    ...state,
                    statusAportes: action.statusAporte,
                    aportes:action.aportes
                }   
            case DETALLE_FASES:
                return {
                    ...state,
                    statusFases: action.status,
                    fases:action.fases
                } 
            case DETALLE_COMMENTS:
                return {
                    ...state,
                    statusComments: action.status,
                    comments:action.coments
                } 
            case DETAIL_LIKE:
                return {
                    ...state,
                    statusLike: action.statusLike
                }   
            case DETAIL_SAVE:
                return {
                    ...state,
                    statusSave: action.statusSave
                }   
            case DETAIL_RECOMENDACIONES:
                return {
                    ...state,
                    proyectosRec: action.proyectosRec
                }   
            case DETALLE_ACTUALIZACIONES:
                return {
                    ...state,
                    statusActualizaciones:action.status,
                    actualizacionesList: action.actualizaciones
                }                   
        default:
            return state
    }
}
