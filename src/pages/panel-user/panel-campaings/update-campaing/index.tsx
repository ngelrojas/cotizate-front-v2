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
import {CampaingBody} from '../../../../userCampaings'
import {RetrieveCampaing} from '../../../../redux/actions/campaing.actions' 

type profileType = {
    first_name: string
    last_name: string
    id: number
}

interface Iauth {
    authenticated: boolean
    currentUser: profileType
}

const UpdateCampaing: React.FC = (props: any) => {

    const [dcamp, setDcamp] = React.useState()
    let history = useHistory()
    let token = window.sessionStorage.getItem('token')
    let dataCampaing = new CampaingBody(token)

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

/*    const RetrieveCampaing = (camp_id:number) =>{*/
        //dataCampaing.getRetrieveCBody(camp_id).then(res => {
            //setDcamp(res.data.data)
        //}).catch(err => {
            //console.error(err)
        //})
    /*}*/

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
