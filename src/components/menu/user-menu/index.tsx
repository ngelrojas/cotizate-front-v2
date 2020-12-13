import React, {FormEvent} from 'react'
import {SubNav, Item, Go, Span, Title, Divid, CloseBtn} from './styles'

interface Iusername {
    username: string
}

const UserMenu: React.FC<Iusername> = props => {
    const logOut = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        window.sessionStorage.removeItem('token')
        window.location.href = '/'
    }
    return (
        <div>
            <Span>
                <Title>Hola, {props.username}</Title>
                <SubNav>                    
                    <Item>
                        <Divid>MIS PROYECTOS</Divid>
                    </Item>
                    <Item>
                        <Go to="/panel-de-usuario">Mi Panel</Go>
                    </Item>
                    <Item>
                        <Go to="/panel-de-usuario/creados">Proyectos Creados</Go>
                    </Item>
                    <Item>
                        <Go to="/panel-de-usuario/apoyados">
                           Proyectos Apoyados 
                        </Go>
                    </Item>
                    <Item>
                        <Go to="/panel-de-usuario/guardados">Proyectos Guardados</Go>
                    </Item>
                    <Item>
                        <Divid>MI PERFIL</Divid>
                    </Item>
                    <Item>
                        <Go to="/panel-de-usuario">Datos de Registro</Go>
                    </Item>
                    <Item>
                        <Go to="/panel-de-usuario">Perfil de Usuario</Go>
                    </Item>
                    <Item>
                        <Go to="/panel-de-usuario">Notificaciones</Go>
                    </Item>
                    <Item>
                        <CloseBtn type="button" onClick={logOut}>
                           CERRAR SESION 
                        </CloseBtn>
                    </Item>
                </SubNav>
            </Span>
        </div>
    )
}

export default UserMenu
