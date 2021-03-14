import {
    OBJETO_CATEGORIAS,
    FILTRO_CATEGORIAS,
    FILTRO_CATEGORIAS_ENTY,
    FILTRO_CRITERIO_CATEGORIAS
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

export function filtrarCategorias(header_id: number){       
  return (dispatch : any) =>{          
    console.log("llego datos.....", header_id);
     API.get(`campaing-public/${header_id}`).then(resp => {
      console.log(resp);
        if(resp.status === 200 ){
         
            if(resp.data.data.length > 0){              
                  dispatch({
                      type: FILTRO_CATEGORIAS,
                      listaFiltada:resp.data.data
                  })
         }
        }            
      })
      .catch(err => console.log(err))
      }
}
export function buscarCategorias(category: string, criterio: string ){       
  return (dispatch : any) =>{          
    console.log("llego datos.....", category, " criterio: ", criterio);
     API.get(`category/${category}/${criterio}`).then(resp => {
      console.log(resp);
        if(resp.status === 200 ){
         
            if(resp.data.data.length > 0){              
                  dispatch({
                      type: FILTRO_CRITERIO_CATEGORIAS,
                      listaCriterio:resp.data.data
                  })
            }
        }            
      })
      .catch(err => console.log(err))
      }
}



