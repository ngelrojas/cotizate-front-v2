import React from 'react'
import {useHistory} from 'react-router-dom'
import { Tabs, TabPanels, TabPanel} from '@reach/tabs';
import {MdPanoramaFishEye } from 'react-icons/md'
import '@reach/tabs/styles.css'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import FormBasic from './form-basic'
import FormProfile from './form-profile'
import {Content, TabNav, TabSubMenu, IconOn} from './styles'
import {CheckAuthentication} from '../../../../redux/auth'

const CreateCampaing: React.FC = () => {
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

    React.useEffect(()=>{
        if(!CheckAuthentication()){
            history.push('/')
        }
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
                                  <CoolTab> <p>DATOS DE TU PROYECTO</p></CoolTab>
                                  <CoolTab> <p>PERFIL</p></CoolTab>
                                  <CoolTab><p>VISTA PREVIA</p></CoolTab>
                                  </TabNav>
                                  <TabPanels>
                                      <TabPanel><FormBasic /></TabPanel>
                                    <TabPanel> <FormProfile /></TabPanel>
                                    <TabPanel>3</TabPanel>
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

export default CreateCampaing
