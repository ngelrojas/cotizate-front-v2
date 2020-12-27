import React, { useEffect,useState } from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'

import {Article} from './styleDetallecomponent/styleDetalle';

interface Idetalle {
    detalle: {
        id:number,
        title:string,
        video_main:string,
        slug:string,
        description:string,
        public_at:string,
        status:number,
        flag:number,
        profile_ca:number,
        currency:number,
        short_url:string,
        slogan_campaing:string,
        header:{
            id:number,
            qty_day_left:number,
            amount:string,
            amount_reached:string,
            percent_reached:string,
            role:number,
            code_campaing:string,
            user:{
                first_name:string,
                last_name:string
            },
            category:{
                id:number,
                name:string,
                slug:string,
                description:string,
                img_banner:string,
                img_icon:string
            },
            city:{
                id:number,
                name:string,
                slug:string,
                short_name:string,
                code_name:string,
                description:string,
                countries:{
                    id:number,
                    name:string,
                    slug:string,
                    short_name:string,
                    code_name:string,
                    description:string
                }
            }
        },
        profile:{
            id:number,
            cinit:string,
            address:string,
            number_address:String,
            neightbordhood:string,
            cellphone: string,            
            telephone:string,
            description:string,
            complete:any,
            rs_facebook:any,
            rs_twitter:any,
            rs_linkedin:any,
            rs_another:any,
            current_position:string,
            headline:string,
            birthdate:string,
            photo:string,
            user:{
                id:number,
                first_name:string,
                last_name:string,
                email:string
            },
            countries:{
                id:number,
                name:string,
                slug:string,
                short_name:string,
                code_name:string,
                description:string
            },
            cities:{
                id:number,
                name:string,
                slug:string,
                short_name:string,
                code_name:string,
                description:string,
                countries:{
                    id:number,
                    name:string,
                    slug:string,
                    short_name:string,
                    code_name:string,
                    description:string
                }
            }
        }
    }
}


const Detalle: React.FC<Idetalle> = props => {
   
    console.log(props.detalle);
    useEffect(() =>{
    },[]);

    return (
        <>
            <div>
                <h1>detalle 11 </h1>
            </div>
        </>
    )
}
export default Detalle