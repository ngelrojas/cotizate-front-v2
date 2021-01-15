import {
    DETALLE_PROYECTO
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
