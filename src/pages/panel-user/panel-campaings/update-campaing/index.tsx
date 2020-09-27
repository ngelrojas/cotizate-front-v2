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
            console.log(res.data.data)
            setDcamp(res.data.data)
        }).catch(err => {
            console.error(err)
        })
    } 
    
    const GetCampID = () =>{
        let url_param:string = window.location.pathname
        let camp_id = url_param.replace(/[^0-9]/g,'')
        let cmpID = parseInt(camp_id)
        return cmpID
    }

    React.useEffect(()=>{
        if(!CheckAuthentication()){
            history.push('/')
        }

        let ID = GetCampID()
        
        RetrieveCampaing(ID)

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
                                        <FormDescription {...dcamp} />
                                    </TabPanel>
                                    <TabPanel>
                                        <FormCatTag {...dcamp} />
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
