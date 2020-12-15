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

interface Icountries {
    id: number,
    short_name: string,
    code_name: string,
    description: string,
    name: string
}

interface Icities {
    id: number,
    shortname: string,
    codename: string,
    description: string,
    countries:number, 
    name: string
}

interface Iuser {
    id: number
    email: string
    first_name: string
    last_name: string

}

type propsCamp = {
    id: number
    profile: Iuser 
    cinit: string
    cellphone: string
    telephone: string
    country_id: number
    countries: Icountries 
    cities: Icities
    city_id: number
    address: string
    photo: any 
    neightbordhood: string
    number_address: number
    rs_facebook: string
    rs_twitter: string
    rs_linkedin: string
    rs_another: string
    description: string
    current_position: string
    headline: string
}

const FormProfile: React.FC<propsCamp> = (propsCamp) => {

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
                                      <TabPanel><Personal {...propsCamp} /></TabPanel>
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
