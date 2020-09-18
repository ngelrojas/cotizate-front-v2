import React from 'react'
import {useHistory} from 'react-router-dom'
import { Tabs, TabPanels, TabPanel} from '@reach/tabs';
import {MdPanoramaFishEye } from 'react-icons/md'
import '@reach/tabs/styles.css'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import FormBasic from './form-basic'
import FormDescription from './form-description'
import FormCatTag from './form-catags'
import FormRewards from './form-rewards'
import FormProfile from './form-profile'
import {Content, H1, Title, TabNav, TabSubMenu, IconOn} from './styles'
import {CheckAuthentication} from '../../../../redux/auth'



const CreateCampaing: React.FC = () => {
    let history = useHistory()

    function CoolTab(props:any) {
        // `isSelected` comes from `TabList` cloning the `CoolTab`.
        const { isSelected, children } = props;
        // make sure to forward *all* props received from TabList
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
      <CoolTab> <br />DATOS DE TU PROYECTO</CoolTab>
      <CoolTab> <br />PERFIL</CoolTab>
      <CoolTab><br />VISTA PREVIA</CoolTab>
      </TabNav>
      <TabPanels>
        <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel>
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
