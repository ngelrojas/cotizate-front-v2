import {
  DETALLE_PROYECTO, DETALLE_APORTES
} from '../types/detalleProyecto.types'
import API from '../../api'

export function ObtenerProyecto(name: string){       
    return (dispatch : any) =>{          
        
       API.get(`campaing-public-detail/${name}`).then(resp => {
           console.log('resp  :',resp );
          if(resp.status === 200){           
                dispatch({
                    type: DETALLE_PROYECTO,
                    detalle:resp.data.data
                })                         
          }            
        })
        .catch(err => console.log(err))
        }
}
export function obtnerAportes(idAporte: any){       
  return (dispatch : any) =>{          
      
     API.get(`reward/${idAporte}`).then(resp => {         
        if(resp.status === 200){             
              dispatch({
                  type: DETALLE_APORTES,
                  status:true,
                  aportes:resp.data.data
              })                         
        }            
      })
      .catch(err => console.log(err))
      }
}



