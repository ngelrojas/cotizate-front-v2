import React,{useState,useEffect} from 'react'
// import {Grid} from 'react-styled-flexboxgrid'
import {Content} from './styles'
import Portal from './componentes/Portal'
import * as Action from '../../redux/actions/categoriaActions';
import { useDispatch, useSelector } from "react-redux";

interface Icateg {
    location:any
}


const Categorias: React.FC<Icateg>  = (props) => {
    const dispatch = useDispatch();
    const { nombre, idCategoria, slug } = props.location.state;
    console.log("parametro :", nombre , "  id : ",idCategoria , "  slug : ",slug );

    useEffect(()=>{
        dispatch(Action.obtenerCategorias(slug));
    },[]);

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