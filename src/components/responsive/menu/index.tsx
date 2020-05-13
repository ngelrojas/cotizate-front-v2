import React, {useState} from 'react'
import {connect} from 'react-redux'
import {WrapMenu, Go, Item, List} from './styles'
import {Menu2Outline} from '@styled-icons/evaicons-outline/Menu2Outline'
import DropDown from '../../dropdown'
import UserMenu from '../../menu/user-menu'

type userType = {
    name: string
    last_name: string
}

interface Iauth {
    authenticated: boolean
    currentUser: userType
}
const ResponsiveMenu: React.FC<Iauth> = ({authenticated, currentUser}) => {
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
                    {authenticated ? (
                        <Item>
                            <UserMenu username={currentUser.name} />
                        </Item>
                    ) : (
                        <>
                            <Item>
                                <Go to="/registrarse">REGISTRARSE</Go>
                            </Item>
                            <Item>
                                <Go to="/ingresar">INGRESAR</Go>
                            </Item>
                        </>
                    )}
                </List>
            ) : null}
        </WrapMenu>
    )
}
const mapStateToProps = (state: any) => ({
    authenticated: state.user.authenticated,
    currentUser: state.user
})
export default connect(mapStateToProps)(ResponsiveMenu)
