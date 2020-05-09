import React, {useState} from 'react'
import {WrapMenu, Go, Item, List} from './styles'
import {Menu2Outline} from '@styled-icons/evaicons-outline/Menu2Outline'
import DropDown from '../../dropdown'

const ResponsiveMenu: React.FC = () => {
    const [isopen, SetIsopen] = useState(false)

    return (
        <WrapMenu>
            <Menu2Outline onClick={() => SetIsopen(!isopen)} size="40" />
            {isopen ? (
                <List>
                    <Item>
                        <Go to="/crear-proyectos">CREAR PROYECTOS</Go>
                    </Item>
                    <Item>
                        <Go to="/explorar-proyectos">EXPLORAR PROYECTOS</Go>
                    </Item>
                    <Item>
                        <DropDown />
                    </Item>
                    <Item>
                        <Go to="/registrarse">REGISTRARSE</Go>
                    </Item>
                    <Item>
                        <Go to="/ingresar">INGRESAR</Go>
                    </Item>
                </List>
            ) : null}
        </WrapMenu>
    )
}

export default ResponsiveMenu
