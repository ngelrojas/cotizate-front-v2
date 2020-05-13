import React from 'react'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {TabList} from 'react-tabs'
import Profile from './panel-profile'
import {Content, Title, TabItem, TabContent, TabPanels} from './styles'

const PanelUser: React.FC = () => {
    return (
        <Content>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <Title>PANEL DE USUARIO</Title>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <TabContent>
                        <TabList>
                            <TabItem>perfil</TabItem>
                            <TabItem>mis proyectos</TabItem>
                        </TabList>
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
