import {
    OBJETO_CATEGORIAS
} from '../types/categoriaTypes'
import API from '../../api'

export function obtenerCategorias(categoria: string){       
    return (dispatch : any) =>{          
        
       API.get(`category/${categoria}`).then(resp => {
           console.log('resp  :',resp.data.data );
          if(resp.status === 200){
            dispatch({
                type: OBJETO_CATEGORIAS,
                listaCateg:resp.data.data
            })
          }
            
        })
        .catch(err => console.log(err))
        }
}
export function filtrarCategorias(filtro : any){       
  return (dispatch : any) =>{ 
         console.log("llego la peticion: ",filtro )
  //    API.get(`category`).then(resp => {
  //       if(resp.status === 200){             
  //         if(resp.data.length > 0){               
  //             dispatch({
  //                 type: CATEGORIAS_LISTA,
  //                 categorias:resp.data
  //             })
  //         }
  //       }            
  //     })
  //     .catch(err => console.log(err))
      }
}


