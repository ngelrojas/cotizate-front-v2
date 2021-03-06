import React from 'react'
import {Grid, Row} from 'react-styled-flexboxgrid'
import FormRegister from './forms'
import {H1, Content} from './styles'

const Register: React.FC = () => {
    return (
        <Content>
            <Grid>
                <Row>
                    <H1>REGISTRARSE</H1>
                </Row>
                <Row>
                    <FormRegister />
                </Row>
            </Grid>
        </Content>
    )
}

export default Register
