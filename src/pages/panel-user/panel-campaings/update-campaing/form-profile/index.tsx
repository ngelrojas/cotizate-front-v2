import React from 'react'
import {Tabs, TabPanels, TabPanel} from '@reach/tabs';
import {Row, Col} from 'react-styled-flexboxgrid'
import {MdPanoramaFishEye } from 'react-icons/md'
import {useHistory} from 'react-router-dom'
import Personal from './personal'
import Association from './association'
import {CheckAuthentication} from '../../../../../redux/auth'

import {
    TabSubMenuPro,
    IconOn,
    TabNavProfile
} from '../styles'

const FormProfile: React.FC = () => {

    let history = useHistory()

    function CoolTab(props:any) {
        const { isSelected, children } = props;
        return (
          <TabSubMenuPro {...props}>
            {isSelected ? <IconOn /> : <MdPanoramaFishEye />}
            {children}
          </TabSubMenuPro>
        );
    }

    React.useEffect(()=>{
        if(!CheckAuthentication()){
            history.push('/')
        }
    },[])

    return (
        <>
            <Row>
                <Col xs={12}>
                    <Row center="xs">
                        <Col xs={12}>

                            <Tabs>
                              <TabNavProfile>
                                  <CoolTab> Perfil Personal</CoolTab>
                                  <CoolTab> Perfil Asociación/Empresa/Otros</CoolTab>
                              </TabNavProfile>
                              <TabPanels>
                                      <TabPanel><Personal /></TabPanel>
                                      <TabPanel><Association /></TabPanel>
                              </TabPanels>
                            </Tabs>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </>

    )
}

export default FormProfile
