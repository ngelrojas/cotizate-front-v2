import React, {FormEvent} from 'react'
import {SubNav, Item, Go, Span, Title} from './styles'

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
                        <Go to="/panel-de-usuario">dashboard</Go>
                    </Item>
                    <Item>
                        <Go to="/create-proyectos">crear proyectos</Go>
                    </Item>
                    <Item>
                        <Go to="/mis-proyectos">mis proyectos</Go>
                    </Item>
                    <Item>
                        <button type="button" onClick={logOut}>
                            SALIR
                        </button>
                    </Item>
                </SubNav>
            </Span>
        </div>
    )
}

export default UserMenu
