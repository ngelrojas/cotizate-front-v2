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
import {Campaings} from '../../../../userCampaings'

const UpdateCampaing: React.FC = () => {
    const [dcamp, setDcamp] = React.useState()
    let history = useHistory()
    let token = window.sessionStorage.getItem('token')
    let dataCampaing = new Campaings(token)

    const RetrieveCampaing = (camp_id:number) =>{
        dataCampaing.retrieveCampaing(camp_id).then(res => {
            setDcamp(res.data.data)
        }).catch(err => {
            console.error(err)
        })
    } 

    React.useEffect(()=>{
        if(!CheckAuthentication()){
            history.push('/')
        }
        // TODO: create a function get query parameter from URL
        // and replace number 4 to var query parameter
        RetrieveCampaing(4)

    },[])

    return (
        <Content>
            <Grid>
                <Row>
                    <Title>
                        <H1> actualizar campaña</H1>
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
                                        <FormBasic {...dcamp} />
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

export default UpdateCampaing
