import React from 'react'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {FooterMain} from './styles'
import AboutCotizate from './about.cotizate'
import AttentionClient from './attention.client'
import OurCommunity from './our.community'

const Footer: React.FC = () => {
    return (
        <FooterMain>
            <Grid>
                <Row between="md" top="md">
                    <Col xs={12} sm={4} md={2}>
                        <AboutCotizate />
                    </Col>
                    <Col xs={12} sm={4} md={2}>
                        <AttentionClient />
                    </Col>
                    <Col xs={12} sm={4} md={2}>
                        <OurCommunity />
                    </Col>
                </Row>
            </Grid>
        </FooterMain>
    )
}

export default Footer
