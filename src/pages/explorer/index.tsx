import React from 'react'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {TabPanel} from 'react-tabs'
import Bulletin from '../../components/bulletin'
import {Content, TabHead, TabLists, TabContent, Title} from './styles'

const ExploreProject: React.FC = () => {
    return (
        <Content>
            <Grid>
                <Row>
                    <Col lg={12}>
                        <Row center="lg">
                            <Col lg={6}>
                                <Title>EXPLORAR PROYECTOS</Title>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <TabContent>
                        <TabLists>
                            <TabHead>PROYECTOS DESTACADOS</TabHead>
                            <TabHead>CAUSAS SOCIALES</TabHead>
                            <TabHead>PROYECOS FINALIZADOS</TabHead>
                        </TabLists>
                        <TabPanel>
                            <Row>
                                <Col xs={12} sm={6} lg={4}>
                                    <Bulletin title="this is my another proyect with long title" />
                                </Col>
                                <Col xs={12} sm={6} lg={4}>
                                    <Bulletin title="tmore and the is si so beatiful in the boos joanee" />
                                </Col>
                                <Col xs={12} sm={6} lg={4}>
                                    <Bulletin title="tchangdel ende your relationship and lucy giveme an coffee" />
                                </Col>
                            </Row>
                        </TabPanel>
                        <TabPanel>
                            <Grid>
                                <Row>
                                    <Col>
                                        <h1>causas sociales</h1>
                                    </Col>
                                </Row>
                            </Grid>
                        </TabPanel>
                        <TabPanel>
                            <Grid>
                                <Row>
                                    <Col>
                                        <h1>proyectos finalizados</h1>
                                    </Col>
                                </Row>
                            </Grid>
                        </TabPanel>
                    </TabContent>
                </Row>
            </Grid>
        </Content>
    )
}

export default ExploreProject
