import React, { useEffect,useState } from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'
import { useDispatch, useSelector } from "react-redux";
import * as Action from '../../redux/actions/detalleProyectoActions';

// import {
    
// } from './styles';

interface Idetalle {
    location: any
}
const Projectdetails: React.FC<Idetalle> = props => {
    const dispatch = useDispatch();
    const { idProyecto, slug } = props.location.state;
       

    useEffect(() =>{
     dispatch(Action.ObtenerProyecto(slug));
    },[]);

    return (
        <div>
            <h1>detalle {idProyecto} del proyectos {slug}</h1>
        </div>
    )
}
export default Projectdetails
