import React from 'react'
import {Grid, Row} from 'react-styled-flexboxgrid'
import Profile from './panel-profile'
import ProfilePersonal from './panel-personal'
import ProfileCompany from './panel-company'
import {Content, TabItem, TabContent, TabPanels, TabLists} from './styles'

const PanelUser: React.FC = () => {
    return (
        <Content>
            <Grid>
                <Row>
                    <TabContent>
                        <TabLists>
                            <TabItem>datos personales</TabItem>
                            <TabItem>perfil personal</TabItem>
                            <TabItem>datos de empresa</TabItem>
                        </TabLists>
                        <TabPanels>
                            <Profile />
                        </TabPanels>
                        <TabPanels>
                            <ProfilePersonal />
                        </TabPanels>
                        <TabPanels>
                            <ProfileCompany />
                        </TabPanels>
                    </TabContent>
                </Row>
            </Grid>
        </Content>
    )
}

export default PanelUser
