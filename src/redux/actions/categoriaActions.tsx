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

