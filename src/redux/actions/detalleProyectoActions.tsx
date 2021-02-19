import {
  DETALLE_PROYECTO, DETALLE_APORTES, DETALLE_FASES,DETAIL_LIKE, DETAIL_SAVE
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
  title:'faseLab',
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
          if(resp.data.data.length <= 0){  //cambiar condicion a mayor
              dispatch({
                  type: DETALLE_FASES,
                  status:true,
                  // fases:resp.data.data
                  fases:fasePrueba
              })    
            }                    
        }            
      })
      .catch(err => console.log(err))
      }
}
export function obtenerLike(idUsueio: number){       
  return (dispatch : any) =>{          
    console.log('se ejecuto el like');  
     API.get(`like/${idUsueio}`).then(resp => {  
       console.log('get like',resp.data.data.liked);       
        if(resp.status === 200){  
          dispatch({
            type: DETAIL_LIKE,
            statusLike:resp.data.data.liked
          })                
        }            
      })
      .catch(err => console.log(err))
      }
}
export function onchangeLike(like: boolean, idUsueio:number ){       
  return (dispatch : any) =>{     

    API.put(`like/${idUsueio}`,{liked: like}).then(resp => {  
      console.log('get like',resp.data);       
       if(resp.status === 200){  
         dispatch({
           type: DETAIL_LIKE,
           statusLike:like
         })                
       }            
     })
     .catch(err => console.log(err))
     }
    
    // dispatch({
    //   type: DETAIL_LIKE,
    //   statusLike:like,
    // })  
     
}
export function obtenerSave(idheader: number){       
  return (dispatch : any) =>{     
    console.log('idsave header',idheader);
    API.get(`book-mark/${idheader}`).then(resp => {  
      console.log('get save',resp.data);       
       if(resp.status === 200){  
          dispatch({
            type: DETAIL_SAVE,
            statusSave:resp.data.data.marked,
          })             
       }            
     })
     .catch(err => console.log('error getsave:',err))
                
  }
}

export function onchangeSave(save: boolean,idHeader: number){       
  return (dispatch : any) =>{     
    
    API.put(`book-mark/${idHeader}`,{ marked: save}).then(resp => {  
      console.log('get like',resp.data);       
       if(resp.status === 200){  
         dispatch({
          type: DETAIL_SAVE,
          statusSave:save,
        })              
       }            
     })
     .catch(err => console.log('error onsave: ',err))
     
  
          
  }
}

