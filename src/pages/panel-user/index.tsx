import React from 'react'
import {Grid, Row} from 'react-styled-flexboxgrid'
import Profile from './panel-profile'
import {Content, TabItem, TabContent, TabPanels, TabLists} from './styles'

const PanelUser: React.FC = () => {
    return (
        <Content>
            <Grid>
                <Row>
                    <TabContent>
                        <TabLists>
                            <TabItem>perfil</TabItem>
                            <TabItem>mis proyectos</TabItem>
                        </TabLists>
                        <TabPanels>
                            <Profile />
                        </TabPanels>
                        <TabPanels>mis proyectos</TabPanels>
                    </TabContent>
                </Row>
            </Grid>
        </Content>
    )
}

export default PanelUser
