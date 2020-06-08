import React from 'react'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {Content, H1, Title, Table, Th, BtnCreate} from './styles'

const PanelCampaing: React.FC = () => {
    return (
        <Content>
            <Grid>
                <Row>
                    <Title>
                        <H1>mis campañas</H1>
                    </Title>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Row end="xs">
                            <Col xs={4}>
                                <BtnCreate to="/panel-de-usuario/crear-campania">
                                    crear campaña
                                </BtnCreate>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={10}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <Th>NOMBRE</Th>
                                            <Th>CIUDAD</Th>
                                            <Th>ALCANZADO</Th>
                                            <Th>ESTADO</Th>
                                            <Th>OPCIONES</Th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>rednodes 2</td>
                                            <td>La paz</td>
                                            <td>56%</td>
                                            <td>publicado</td>
                                            <td>
                                                <button>actualizar</button>
                                                <button>eliminar</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </Content>
    )
}

export default PanelCampaing
