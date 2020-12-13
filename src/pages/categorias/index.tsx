import React from 'react'
// import {Grid} from 'react-styled-flexboxgrid'
import {Content} from './styles'
import Portal from './componentes/Portal'
interface Icateg {
    location:any
}

const Categorias: React.FC<Icateg>  = (props) => {

    const { nombre, idCategoria } = props.location.state;

    console.log("parametro :", nombre , "  id : ",idCategoria );

    return (
        <Content>
          <Portal />  
            <h1>Estamos trabajando : {nombre}</h1>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
        </Content>
    )
}

export default Categorias