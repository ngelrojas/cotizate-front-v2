import React from 'react'
import {H5, List, Item, Go} from './styles'

const AttentionClient: React.FC = () => {
    return (
        <>
            <H5>ATENCION AL CLIENTE</H5>
            <List>
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
            </List>
        </>
    )
}

export default AttentionClient
