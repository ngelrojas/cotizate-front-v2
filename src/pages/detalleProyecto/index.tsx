import React from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'
// import {
    
// } from './styles';

interface Idetalle {
    location: any
}
const Projectdetails: React.FC<Idetalle> = props => {

    const { idProyecto, slug } = props.location.state;
       console.log(idProyecto);
    return (
        <div>
            <h1>detalle {idProyecto} del proyectos {slug}</h1>
        </div>
    )
}
export default Projectdetails
