import React, { useEffect,useState } from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'
import { useDispatch, useSelector } from "react-redux";
import * as Action from '../../redux/actions/detalleProyectoActions';
import Detalle from './component/Detalle'


interface Idetalle {
    location: any
}

const Projectdetails: React.FC<Idetalle> = props => {
    const dispatch = useDispatch();
    const { idProyecto, slug } = props.location.state;
    const {
        proyectosDetalle,
        statusDetalle
      } = useSelector((stateSelector: any) => {  return stateSelector.detalleProyecto;  });
      console.info("HERE PROYECTO DETALLE")
    console.log(proyectosDetalle);
    
    useEffect(() =>{
     dispatch(Action.ObtenerProyecto(slug));
    },[]);

    return (
        <>
        <Detalle data={proyectosDetalle} />
            
        </>
    )
}
export default Projectdetails
