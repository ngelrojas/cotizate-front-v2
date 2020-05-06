import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import FormRegister from './forms'
import {Form} from './styles'

const Register: React.FC = () => {
    return (
        <main>
            <Grid>
                <Row>
                    <h1>Registrarse</h1>
                </Row>
                <Row>
                    <FormRegister />
                </Row>
            </Grid>
        </main>
    )
}

export default Register
