import React from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'
import {FooterMain, GridC, RowC, H6, Img, SpaceDiv} from './styles'
import AboutCotizate from './about.cotizate'
import AttentionClient from './attention.client'
import OurCommunity from './our.community'
import FacebookIcon from './images/facebook-icon.png'
import TwitterIcon from './images/twitter-icon.png'
import InstagramIcon from './images/instagram-icon.png'
import WhatsappIcon from './images/whatsapp-icon.png'

const Footer: React.FC = () => {
    return (
        <FooterMain>
            <GridC fluid>
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
                <RowC>
                    <SpaceDiv>
                        <a href="https://www.facebook.com/cotizate" target="_blank" rel="noopener noreferrer">
                            <Img src={FacebookIcon} alt="cotizate-icon-facebook" />
                        </a>
                    </SpaceDiv>
                    <SpaceDiv>
                        <a href="https://www.twitter.com/cotizate" target="_blank" rel="noopener noreferrer">
                            <Img src={TwitterIcon} alt="cotizate-icon-twitter" />
                        </a>
                    </SpaceDiv>
                    <SpaceDiv>
                        <a href="https://www.instagram.com/cotizate" target="_blank" rel="noopener noreferrer">
                            <Img src={InstagramIcon} alt="cotizate-icon-instagram" />
                        </a>
                    </SpaceDiv>
                    <SpaceDiv>
                        <a href="https://wa.me/59171654195" target="_blank" rel="noopener noreferrer">
                            <Img src={WhatsappIcon} alt="cotizate-icon-whatsapp" />
                        </a>
                    </SpaceDiv>
                </RowC>
                <RowC>
                    <H6>Todos los derechos son reservados cotizate</H6>
                </RowC>
            </GridC>
        </FooterMain>
    )
}

export default Footer
