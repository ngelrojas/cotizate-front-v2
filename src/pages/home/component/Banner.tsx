import React, {useState, useEffect} from 'react';
import {Section, Article, Picture, Go,Img, Title } from '../styles/index'
import {Row, Col} from 'react-styled-flexboxgrid'

const Banner: React.FC = () => {
    const [content, setContent] = useState('')
    useEffect(() => {
        setContent('titulo more longer the now more here please')
    }, [])

    return (
    <>      
        <Row>
            <Col sm={6} md={12} lg={6}>
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
                        {/* <Title>hola quehace</Title> */}
                    </Article>
               </Section>
            </Col>
            <Col sm={6} md={12} lg={6}>
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
                        {/* <Title>hola quehace</Title> */}
                    </Article>
                 </Section>
            </Col>
        </Row>          
    </>
      
    )
}

export default Banner
