import React from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { Tabs, TabPanels, TabPanel} from '@reach/tabs';
import {MdPanoramaFishEye } from 'react-icons/md'
import '@reach/tabs/styles.css'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import FormBasic from './form-basic'
import FormProfile from './form-profile'
import FormPreview from './form-preview'
import {Content, TabNav, TabSubMenu, IconOn} from './styles'
import {CheckAuthentication} from '../../../../redux/auth'
import {RetrieveCampaing} from '../../../../redux/actions/campaing.actions' 

const UpdateCampaing: React.FC = (props: any) => {

    let history = useHistory()

    function CoolTab(props:any) {
        const { isSelected, children } = props;
        return (
          <TabSubMenu {...props}>
            {isSelected ? <IconOn /> : <MdPanoramaFishEye />}
            {children}
          </TabSubMenu>
        );
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
        props.RetrieveCampaing(ID)

    },[])

    return (
        <Content>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={12}>

                                <Tabs>
                                  <TabNav>
                                  <CoolTab><p>PERFIL</p></CoolTab>
                                  <CoolTab><p>DATOS DE TU PROYECTO</p></CoolTab>
                                  <CoolTab><p>VISTA PREVIA</p></CoolTab>
                                  </TabNav>
                                  <TabPanels>
                                    <TabPanel> <FormProfile /></TabPanel>
                                    <TabPanel> <FormBasic /></TabPanel>
                                    <TabPanel> <FormPreview /></TabPanel>
                                  </TabPanels>
                                </Tabs>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </Content>
    )
}

const mapStateToProps = (state: any) => ({
    campaing: state.campaing
})

const mapActionToProps = {
    RetrieveCampaing   
}

export default connect(mapStateToProps, mapActionToProps)(UpdateCampaing)
