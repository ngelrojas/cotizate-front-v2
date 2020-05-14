import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row} from 'react-styled-flexboxgrid'
import {List, Item, Go, ItemLogo, Picture} from './styles'
import UserMenu from './user-menu'
import ListDropdown from '../list-dropdown'
import CotizateLogo from './img/cotizate.png'
import ResponsiveMenu from '../../components/responsive/menu'
import Logo from '../logo'

type userType = {
    first_name: string
    last_name: string
}
interface Iauth {
    authenticated: boolean
    currentUser: userType
}

const Menu: React.FC<Iauth> = ({authenticated, currentUser}) => {
    console.log(currentUser)
    return (
        <Grid fluid>
            <Row>
                <ResponsiveMenu />
                <Logo />
                <List>
                    <Item>
                        <Go to="/crear-proyectos">CREAR PROYECTOS</Go>
                    </Item>
                    <Item>
                        <Go to="/explorar-proyectos">EXPLORAR PROYECTOS</Go>
                    </Item>
                    <ItemLogo>
                        <Go to="/">
                            <Picture>
                                <img src={CotizateLogo} alt="cotizate" />
                            </Picture>
                        </Go>
                    </ItemLogo>
                    <Item>
                        <ListDropdown />
                    </Item>
                    {authenticated ? (
                        <Item>
                            <UserMenu username={currentUser.first_name} />
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
            </Row>
        </Grid>
    )
}
const mapStateToProps = (state: any) => ({
    authenticated: state.user.authenticated,
    currentUser: state.user
})
export default connect(mapStateToProps)(Menu)
