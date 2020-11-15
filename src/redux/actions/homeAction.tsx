import {
    PROYECTOS_FINALIZADOS_LOAD
} from '../types/homeTypes'
import API from '../../api'


export function listaDetalle(){       
    return (dispatch : any) =>{          
        dispatch({type: PROYECTOS_FINALIZADOS_LOAD})
    console.log("llego el primer actions");
    //   const body ={
    //       "docId": form.carnet,                    
    //       "producto": form.codigoProducto                    
    //   };
    //   requestPost('/usuario/registrar',body,dispatch)
    //   .then((response)=>{
    //     if(response && response.data){
    //       dispatch({  
    //         type: AGREGAR_REGISTRO_EXITO,
    //         showMessage: true,
    //         mensajeRegistro:response.data.mensaje,
    //       });                                                                   
    //     }
    //   })
           
    }
}
