import React from 'react'
import {useHistory} from 'react-router-dom'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {Tabs, TabPanel} from 'react-tabs'
import FormBasic from './form-basic'
import FormDescription from './form-description'
import FormCatTag from './form-catags'
import FormRewards from './form-rewards'
import FormProfile from './form-profile'
import {Content, H1, Title, TabMenu, TabSubMenu} from './styles'
import {CheckAuthentication} from '../../../../redux/auth'

const CreateCampaing: React.FC = () => {
    let history = useHistory()
    React.useEffect(()=>{
        if(!CheckAuthentication()){
            history.push('/')
        }
    },[])

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
                                            RESUMEN Y DESCRIPCION
                                        </TabSubMenu>
                                        <TabSubMenu>
                                            CATEGORIA Y TAGS
                                        </TabSubMenu>
                                        <TabSubMenu>
                                            RECOMPENSAS
                                        </TabSubMenu>
                                        <TabSubMenu>
                                            PERFIL
                                        </TabSubMenu>
                                    </TabMenu>
                                    <TabPanel>
                                        <FormBasic />
                                    </TabPanel>
                                    <TabPanel>
                                        <FormDescription />
                                    </TabPanel>
                                    <TabPanel>
                                        <FormCatTag />
                                    </TabPanel>
                                    <TabPanel>
                                        <FormRewards />
                                    </TabPanel>
                                    <TabPanel>
                                        <FormProfile />
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
