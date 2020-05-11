import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {Content, Title, SubTitle} from './styles'

const ActivationAccount: React.FC = () => {
    return (
        <Content>
            <Grid>
                <Row>
                    <Col lg={12}>
                        <Row center="lg">
                            <Col lg={7}>
                                <Title>BIENVENIDO A COTIZATE</Title>
                                <SubTitle>su cuenta a sido activada.</SubTitle>
                                <SubTitle>
                                    por favor{' '}
                                    <Link to="/ingresar">ingrese</Link> y
                                    complete su perfil para poder crear
                                    proyectos.
                                </SubTitle>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </Content>
    )
}

export default ActivationAccount
