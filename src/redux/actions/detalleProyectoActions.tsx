import {
  DETALLE_PROYECTO, DETALLE_APORTES, DETALLE_FASES,DETALLE_ACTUALIZACIONES,DETAIL_LIKE, DETAIL_SAVE,DETAIL_RECOMENDACIONES,DETALLE_COMMENTS,DETAIL_PROFILE_REDES
} from '../types/detalleProyecto.types'
import API from '../../api'

export function ObtenerProyecto(name: string){       
    return (dispatch : any) =>{          
        
       API.get(`campaing-public-detail/${name}`).then(resp => {
         
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
                  fases:resp.data.data
              })    
            }                    
        }            
      })
      .catch(err => console.log(err))
      }
}
export function obtnerComentario(idHeader: any){       
  return (dispatch : any) =>{          
      
     API.get(`comments/${1}`).then(resp => {        
     
        if(resp.status === 200){  
          if(resp.data.data.length >= 1){          
              dispatch({
                  type: DETALLE_COMMENTS,
                  status:true,
                  coments:resp.data.data
              }) 
          }                         
        }            
      })
      .catch(err => console.log(err))
      }
}
export function obtenerLike(idUsueio: number){       
  return (dispatch : any) =>{          
   
     API.get(`like/${idUsueio}`).then(resp => {  
       console.log('get like',resp.data.data.liked);       
        if(resp.status === 200){  
          dispatch({
            type: DETAIL_LIKE,
            statusLike:resp.data.data.liked
          })                
        }else{
          dispatch({
            type: DETAIL_LIKE,
            statusLike:false //en caso q no exista el like
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
       } else
       {
          dispatch({
            type: DETAIL_SAVE,
            statusSave:false
          }) 
       }           
     })
     .catch(err => console.log('error getsave:',err))
                
  }
}

export function onchangeSave(save: boolean,idHeader: number){       
  return (dispatch : any) =>{     
 
    API.put(`book-mark/${idHeader}`,{ marked: save}).then(resp => {  
    
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

export function obtenerProyectosRecomendados(categoria: any){       
  return (dispatch : any) =>{          
      
     API.get(`category/${categoria}`).then(resp => {  
    
        if(resp.status === 200){  
          if(resp.data.data.length > 0){  
              dispatch({
                  type: DETAIL_RECOMENDACIONES,
                  proyectosRec:resp.data.data,
              })    
            }                    
        }            
      })
      .catch(err => console.log(err))
      }
}

export function obtenerRedesProyecto(profileId: number,profilecad: number){       
  return (dispatch : any) =>{     
  
    API.get(`profile/company/${profileId}/${profilecad}`).then(resp => {  
       if(resp.status === 200){  
          dispatch({
            type: DETAIL_PROFILE_REDES,
            profilesObj:resp.data.data,
          })              
       }            
     })
     .catch(err => console.log('error onsave: ',err))                 
  }
}

export function obtenerActualizaciones(idHeader: any){       
  return (dispatch : any) =>{          
     API.get(`alterations/${idHeader}`).then(resp => {  
     
        if(resp.status === 200){  
          if(resp.data.data.length > 0){  
              dispatch({
                  type: DETALLE_ACTUALIZACIONES,
                  status:true,
                  actualizaciones:resp.data.data
              })    
            }                    
        }            
      })
      .catch(err => console.log(err))
      }
}

