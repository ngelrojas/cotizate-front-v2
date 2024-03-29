import {
  LISTA_DENUNCIAS,OBJETO_DENUNCIA,FOLLOW_AUTOR,
  DETALLE_PROYECTO, DETALLE_APORTES, DETALLE_FASES,DETALLE_ACTUALIZACIONES,DETAIL_LIKE, DETAIL_SAVE,DETAIL_RECOMENDACIONES,DETALLE_COMMENTS,DETAIL_PROFILE_REDES
} from '../types/detalleProyecto.types'
import API from '../../api'
import * as Action from '../actions/mensajeActions';
import {requestPost,requestGet} from '..//../service/repository';


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
const denuncias=[
    {
        id:1,
        title:'faseTop',
        description:'es una prueba de color rojo',
    },
    {
      id:2,
      title:'faseTop',
      description:'es una prueba de color rojo',
    },
    {
      id:3,
      title:'faseTop',
      description:'es una prueba de color rojo',
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
    let token = window.sessionStorage.getItem('token') 
     API.get(`like/${idUsueio}`,{ headers: {Authorization: `Bearer ${token}`}}).then(resp => {  
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
    let token = window.sessionStorage.getItem('token')
    let data = {
        liked: like,      
    }   

    API.put(`like/${idUsueio}`,data,{ headers: {Authorization: `Bearer ${token}`}}).then(resp => {  
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
    let token = window.sessionStorage.getItem('token')    
    console.log('idsave header',idheader);
    API.get(`book-mark/${idheader}`,{ headers: {Authorization: `Bearer ${token}`}}).then(resp => {  
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
    let token = window.sessionStorage.getItem('token')   
    let data = {
      marked: save      
    }  
    API.put(`book-mark/${idHeader}`,data,{ headers: {Authorization: `Bearer ${token}`}}).then(resp => {  
    
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
      //console.log('idcateforia proyectos :', categoria);
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
    let token = window.sessionStorage.getItem('token') 
    console.log('redes proyecto : ', profileId, profilecad);
    if(profileId != 0 || profilecad != 0){ 
        API.get(`profile/company/${profileId}/${profilecad}`,{ headers: {Authorization: `Bearer ${token}`}}).then(resp => {  
          //console.log('redes proyecto : ', resp.data);
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
}

export function obtenerActualizaciones(idHeader: any){       
  return (dispatch : any) =>{  
    let token = window.sessionStorage.getItem('token') 
     if(idHeader != 0){ 
           API.get(`alterations/${idHeader}`,{ headers: {Authorization: `Bearer ${token}`}}).then(resp => {          
              if(resp.status === 200){  
                  if(resp.data.data.length > 0){  
                      dispatch({
                          type: DETALLE_ACTUALIZACIONES,
                          status:true,
                          actualizaciones:resp.data.data
                      })    
                  }                    
              }            
           }).catch(err => console.log(err))
     }

   }
}

export function obtnerListaDenuncias(){       
  return (dispatch : any) =>{          
      
     API.get(`denounces`).then(resp => {        
     //console.log('denuncias :', resp.data.data)
      dispatch({
        type: LISTA_DENUNCIAS,
        denuncias:resp.data.data
      }) 

      })
      .catch(err => console.log(err))
      }
}
export function contactarContacto(idUserProyect :number, nombre: string, apellido: string, email:string, descripcion: string){       
  return (dispatch : any) =>{          
    const data ={
      firt_name:nombre,
      last_name:apellido,
      email:email,
      from_user:0,
      to_user:idUserProyect,
      description:descripcion
    }
  API.post(`contacts`,data).then(resp => {      
     if(resp.status === 201){  
        dispatch(Action.showMessage({message: 'Se ha enviado el mensaje', variant:"info"}));       
     }else{
         dispatch(Action.showMessage({message: 'Intente mas tarde por favor', variant:"error"}));
     }            
   })
   .catch(err => console.log(err))

  }
}

export function obtnerDenuncia(iddenucia: number){       
  return (dispatch : any) =>{          
      console.log('ide denuciaa : ', iddenucia);
     API.get(`denounces/${iddenucia}`).then(resp => {  
        dispatch({
          type: OBJETO_DENUNCIA,
          objDenuncia:resp.data.data
        }) 
      })
      .catch(err => console.log(err))
      }
}
export function denunciarSinlogueo(idDenuncia: number, nombre:string, carnet: string, celular: number, descripcion:string, idCanpaings: any, apellido:string, correo: string){       
  return (dispatch : any) =>{          
      const data ={
        first_name:nombre,
        last_name:apellido,
        email:correo,
        cinit:carnet,
        cellphone:celular.toString(),
        comment:descripcion,
        denouncetxt:idDenuncia,
        campaings:idCanpaings,
      }


    API.post(`denounces/public`,data).then(resp => {  
           
       if(resp.status === 201){  
        dispatch(Action.showMessage({message: 'Su denuncia fue realizada', variant:"success"}));   
       }else{
        dispatch(Action.showMessage({message: 'Intente mas tarde por favor', variant:"error"}));
       }            
     })
     .catch(err => {
       console.log(err);
     } // dispatch(Action.showMessage({message: 'Intente mas tarde por favor', variant:"error"})) 
    
     );


  }
}
export function denunciarConlogueo(idDenuncia: number, descripcion:string, idCanpaings:any){       
  return (dispatch : any) =>{          
     // console .log('llega el reporte con logueo',idDenuncia, descripcion, idCanpaings );
      
      let token = window.sessionStorage.getItem('token') 
      let data={
          comment: descripcion,
          denouncetxt:idDenuncia,
          campaings: idCanpaings
         };
      API.post(`denounces`,data,{ headers: {Authorization: `Bearer ${token}`} }).then(resp => {  
        console.log('rspuesta denuncia',resp);       
         if(resp.status === 201){  
          dispatch(Action.showMessage({message: 'Su denunia fue realizada', variant:"success"}));      
         }else{
          dispatch(Action.showMessage({message: 'Intente mas tarde por favor', variant:"info"}));
         }            
       })
       .catch(err => console.log(err))
       

  }
}
export function obtenerFollowerAutor( idFollower: number){       
  return (dispatch : any, getState: any) =>{  
    let token = window.sessionStorage.getItem('token')   
    console.log('resp followers', idFollower, ' udser', getState().user.id )     
    API.get(`followers/${getState().user.id}/${idFollower}`,{ headers: {Authorization: `Bearer ${token}`}}).then(resp => {      
      console.log('resp followers',resp )  
      if(resp.status === 200){ 
        dispatch({
          type: FOLLOW_AUTOR,
          followAutor:resp.data.data.status,
        }) 
      }else{
        console.log('resp followers else false', )  
        dispatch({
          type: FOLLOW_AUTOR,
          followAutor:false
        }) 
      }
       })
       .catch(err => {
          dispatch({
            type: FOLLOW_AUTOR,
            followAutor:false
          }) 
       })
  }
}
export function saveFollowerAutor(follower: boolean, idFollower: number ){       
  return (dispatch : any,getState: any) =>{  
    let token = window.sessionStorage.getItem('token');
    let data={
      follower:getState().user.id,
      following:idFollower,
      status:follower
    };
    API.post(`followers`,data,{ headers: {Authorization: `Bearer ${token}`}}).then(resp => {        
      console.log('sav :', resp);
    })
    .catch(err => console.log('seguidor eeror :', err))
      dispatch({
        type: FOLLOW_AUTOR,
        followAutor:follower
      }) 
  }
}