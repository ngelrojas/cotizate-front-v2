import {
  DETALLE_PROYECTO, DETALLE_APORTES, DETALLE_FASES
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
                  statusAporte:true,
                  aportes:resp.data.data
              })                         
        }            
      })
      .catch(err => console.log(err))
      }
}
const fasePrueba=[
  {
  id:12,
  title:'faseTop',
  description:'es una prueba de color rojo',
  amount:'100.00',
  header:22
},
{
  id:13,
  title:'faseTop',
  description:'es una prueba de color rojo',
  amount:'400.00',
  header:23
}
];
export function obtnerFases(idHeader: any){       
  return (dispatch : any) =>{          
      
     API.get(`phases/${idHeader}`).then(resp => {  
       console.log(resp.data.data);
        if(resp.status === 200){             
              dispatch({
                  type: DETALLE_FASES,
                  status:true,
                  // fases:resp.data.data
                  fases:fasePrueba
              })                         
        }            
      })
      .catch(err => console.log(err))
      }
}


