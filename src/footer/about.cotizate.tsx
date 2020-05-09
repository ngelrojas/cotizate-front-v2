import React from 'react'
import {H5, List, Item, Go} from './styles'

const AboutCotizate: React.FC = () => {
    return (
        <>
            <H5>SOBRE COTIZATE</H5>
            <List>
                <Item>
                    <Go to="#"> Quienes Somos</Go>
                </Item>
                <Item>
                    <Go to="#"> Equipo</Go>
                </Item>
                <Item>
                    <Go to="#"> Blog</Go>
                </Item>
                <Item>
                    <Go to="#"> Patrocinadores</Go>
                </Item>
                <Item>
                    <Go to="#"> Preguntas Frecuentes</Go>
                </Item>
                <Item>
                    <Go to="#"> Contactos</Go>
                </Item>
            </List>
        </>
    )
}
export default AboutCotizate
