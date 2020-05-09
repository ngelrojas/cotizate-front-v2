import React from 'react'
import {Grid, Row} from 'react-styled-flexboxgrid'
import FormLogin from './forms'
import {H1, Content} from './styles'

const Login: React.FC = () => {
    return (
        <Content>
            <Grid>
                <Row>
                    <H1>INGRESAR</H1>
                </Row>
                <Row>
                    <FormLogin />
                </Row>
            </Grid>
        </Content>
    )
}

export default Login
