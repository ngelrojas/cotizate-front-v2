import {
    PROYECTOS_FINALIZADOS_LOAD
} from '../types/homeTypes'
import API from '../../api'

const lista1 = [
    {
        "id": 8,
        "title": "second project from FRON-END",
        "slug": "second-project-from-fron-end",
        "imagen_main":"url en traajo",
        "excerpt": "<p>no problem this is a excerpt</p>",
        "header": {
            "id": 5,
            "user": {
                "first_name": "jhon",
                "last_name": "doe Rojas"
            },
            "category": {
                "id": 1,
                "name": "Cultura",
                "slug": "cultura",
                "description": "this is a cultura"
            },
            "city": {
                "id": 5,
                "name": "Tarija",
                "slug": "tarija",
                "short_name": "tj",
                "code_name": "TJ",
                "description": "tarija",
                "countries": {
                    "id": 1,
                    "name": "Bolivia",
                    "slug": "bolivia",
                    "short_name": "bo",
                    "code_name": "BO",
                    "description": "bolivia"
                }
            },
            "qty_day_left": 0,
            "amount": "90000.000",
            "amount_reached": "0.000",
            "percent_reached": "0.000",
            "role": 2,
            "code_campaing": "CAMP796044242"
        },
        "currency": 1,
        "slogan_campaing": "ok"
    },
    {
        "id": 7,
        "title": "Project FROM FRONT-END",
        "slug": "project-from-front-end",
        "imagen_main":"url en traajo",
        "excerpt": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat vel leo id iaculis</p>",
        "header": {
            "id": 4,
            "user": {
                "first_name": "jhon",
                "last_name": "doe Rojas"
            },
            "category": {
                "id": 1,
                "name": "Cultura",
                "slug": "cultura",
                "description": "this is a cultura"
            },
            "city": {
                "id": 2,
                "name": "Santa Cruz",
                "slug": "santa-cruz",
                "short_name": "scz",
                "code_name": "SCZ",
                "description": "santa cruz",
                "countries": {
                    "id": 1,
                    "name": "Bolivia",
                    "slug": "bolivia",
                    "short_name": "bo",
                    "code_name": "BO",
                    "description": "bolivia"
                }
            },
            "qty_day_left": 0,
            "amount": "13700.000",
            "amount_reached": "0.000",
            "percent_reached": "0.000",
            "role": 2,
            "code_campaing": "CAMP181585132"
        },
        "currency": 1,
        "slogan_campaing": "ok not problem"
    }

  ];

export function listaDetalle(header_id: number){       
    return (dispatch : any) =>{          
        dispatch({type: PROYECTOS_FINALIZADOS_LOAD,
            proyectos:lista1
        })
    console.log("llego el primer actions");
    API.get(`campaing-public/${header_id}`).then(resp => {
          if(resp.status == 200){

            dispatch({type: PROYECTOS_FINALIZADOS_LOAD,
                proyectos:resp.data.data
            })
          }
            
        })
        .catch(err => console.log(err))


           
    }
}
