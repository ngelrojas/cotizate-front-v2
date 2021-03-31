import React from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'
import {MdLocationOn} from 'react-icons/md'
import {
    Section,
    Article,
    ArticleBody,
    Picture,
    Img,
    Title,
    Excerpt,
    Author,
    Place,
    PercentTitle,
    PercentNumber,
    Bar,
    Go
} from './styles'

interface Ibullentin {
    title: string
}
const Bulletin: React.FC<Ibullentin> = props => {
    return (
        <Section>
            <Article>
                <Picture>
                    <Go to="/my-article">
                        <Img
                            src="https://placebeard.it/640x360"
                            alt="cotizate"
                        />
                    </Go>
                </Picture>
                <Title>{props.title}</Title>
            </Article>
            <ArticleBody>
                <Row>
                    <Col sm={6} md={12} lg={6}>
                        <Row start="lg">
                            <Col sm={12} md={12} lg={12}>
                                <Author>
                                    <p>Autor:</p>
                                    <p>Aljandro Matos</p>
                                </Author>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6} md={12} lg={6}>
                        <Row end="lg">
                            <Col sm={12} md={12} lg={12}>
                                <Place>
                                    <span>
                                        <Go to="/categoria/santa-cruz">
                                            Bolivia - Santa Cruz de la Sierra
                                        </Go>
                                    </span>
                                    <MdLocationOn />
                                </Place>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Excerpt>
                            <Go to="/">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris bet forme{' '}
                            </Go>
                        </Excerpt>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={6} lg={6}>
                        <Row start="lg">
                            <Col sm={6} lg={12}>
                                <PercentTitle>alcanzado</PercentTitle>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                        <Row end="lg">
                            <Col sm={6} lg={12}>
                                <PercentNumber>58%</PercentNumber>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={12} lg={12}>
                        <Bar />
                    </Col>
                </Row>
            </ArticleBody>
        </Section>
    )
}
export default Bulletin
