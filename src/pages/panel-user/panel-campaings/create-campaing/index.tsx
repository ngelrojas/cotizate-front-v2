import React from 'react'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {Tabs, TabPanel} from 'react-tabs'
import FormBasic from './form-basic'
import FormDescription from './form-description'
import {Content, H1, Title, TabMenu, TabSubMenu} from './styles'

const CreateCampaing: React.FC = () => {
    return (
        <Content>
            <Grid>
                <Row>
                    <Title>
                        <H1> crear campaña</H1>
                    </Title>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={10}>
                                <Tabs>
                                    <TabMenu>
                                        <TabSubMenu>
                                            INFORMACION BASICA
                                        </TabSubMenu>
                                        <TabSubMenu>
                                            INFORMACION DE DESCRIPCION
                                        </TabSubMenu>
                                        <TabSubMenu>
                                            INFORMACION COMPLEMETARIA
                                        </TabSubMenu>
                                    </TabMenu>
                                    <TabPanel>
                                        <FormBasic />
                                    </TabPanel>
                                    <TabPanel>
                                        <FormDescription />
                                    </TabPanel>
                                    <TabPanel>
                                        <h1>informacion complementaria</h1>
                                    </TabPanel>
                                </Tabs>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </Content>
    )
}

export default CreateCampaing
