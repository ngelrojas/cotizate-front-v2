import React from 'react'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {Content, Title} from './styles'

const Confirmation: React.FC = () => {
    return (
        <Content>
            <Grid>
                <Row>
                    <Col xs={12} lg={12}>
                        <Row center="lg">
                            <Col xs={12} sm={6} lg={6}>
                                <Title>
                                    SU CONTRASENA HA SI DO ACTUALIZADA
                                </Title>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </Content>
    )
}

export default Confirmation
