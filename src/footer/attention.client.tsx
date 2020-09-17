import React from 'react'
import {H5, ListOC, Item, Go} from './styles'

const AttentionClient: React.FC = () => {
    return (
        <>
            <H5>ATENCION AL CLIENTE</H5>
            <ListOC>
                <Item>
                    <Go to="#">Guia de usuario</Go>
                </Item>
                <Item>
                    <Go to="#">Cookies</Go>
                </Item>
                <Item>
                    <Go to="#">Formas de Pago</Go>
                </Item>
                <Item>
                    <Go to="#">Terminos y condiciones de uso</Go>
                </Item>
                <Item>
                    <Go to="#">Trabaje con nosotros</Go>
                </Item>
            </ListOC>
        </>
    )
}

export default AttentionClient
