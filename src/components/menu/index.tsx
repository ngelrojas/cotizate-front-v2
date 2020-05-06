import React from 'react'
import {Grid, Row} from 'react-styled-flexboxgrid'
import {List, Item, Go, ItemLogo, Picture} from './styles'
import DropDown from '../dropdown'
import CotizateLogo from './img/cotizate.png'
import ResponsiveMenu from '../../components/responsive/menu'
import Logo from '../logo'

const Menu: React.FC = () => {
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
                        <DropDown />
                    </Item>
                    <Item>
                        <Go to="/registrarse">REGISTRARSE</Go>
                    </Item>
                    <Item>
                        <Go to="/login">INGRESAR</Go>
                    </Item>
                </List>
            </Row>
        </Grid>
    )
}

export default Menu
