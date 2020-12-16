import React,{useState,useEffect} from 'react'
// import {Grid} from 'react-styled-flexboxgrid'
import {Content, Contentbody} from './styles'
import Portal from './componentes/Portal'
import * as Action from '../../redux/actions/categoriaActions';
import { useDispatch, useSelector } from "react-redux";
import Category from './componentes/Category';

interface Icateg {
    location:any
}


const Categorias: React.FC<Icateg>  = (props) => {
    const dispatch = useDispatch();
    const { nombre, idCategoria, slug } = props.location.state;
    console.log("parametro :", nombre , "  id : ",idCategoria , "  slug : ",slug );
    const { statusCategorias, listaCateg } = useSelector((stateSelector: any) => {
        return stateSelector.categorias;
      });

    useEffect(()=>{
        dispatch(Action.obtenerCategorias(slug));
    },[]);

    return (
        <>
        <Content>
          <Portal />  
        </Content>
        <Contentbody> 
            {/* <h1>Estamos trabajando : {nombre}</h1> */}
           <br/>
           <br/>
           {listaCateg.map((value : any, index : number) =>(
                        <Category key={index} data={value} />
            ))} 
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           
           </Contentbody>

        </>
    )
}

export default Categorias