import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row} from 'react-styled-flexboxgrid'
import {List, Item, ItemSearch, Go, ItemLogo, Picture} from './styles'
import UserMenu from './user-menu'
//import ListDropdown from '../list-dropdown'
import CotizateLogo from './img/cotizate.png'
import ResponsiveMenu from '../../components/responsive/menu'
import Logo from '../logo'
import SearchingBox from '../../components/searching-box'

type userType = {
    first_name: string
    last_name: string
}
interface Iauth {
    authenticated: boolean
    currentUser: userType
}

const Menu: React.FC<Iauth> = ({authenticated, currentUser}) => {
    return (
        <Grid fluid>
            <Row>
                <ResponsiveMenu />
                <Logo />
                <List>
                    <Item>
                        <Go to="/explorar-proyectos">EXPLORAR</Go>
                    </Item>
                    {authenticated ? (
                    <Item> 
                        <Go to="/crear-proyectos">CREAR PROYECTOS</Go>
                    </Item>
                    ) : (
                        <>
                            <Item>
                                <Go to="/ingresar">CREAR PROYECTOS</Go>
                            </Item>
                        </>
                    )}
                    <ItemLogo>
                        <Go to="/">
                            <Picture>
                                <img src={CotizateLogo} alt="cotizate" />
                            </Picture>
                        </Go>
                    </ItemLogo>
                    <ItemSearch>
                        <SearchingBox />
                    </ItemSearch>
                    {authenticated ? (
                        <Item>
                            <UserMenu username={currentUser.first_name} />
                        </Item>
                    ) : (
                        <>
                            <Item>
                                <Go to="/ingresar">INICIAR SESION</Go>
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
