import React, {useState, useEffect} from 'react';
import {Section, Article, Picture, Go,Img, Title } from '../styles/index'
import {Row, Col} from 'react-styled-flexboxgrid'
import { useHistory } from "react-router-dom";

const Banner: React.FC = () => {
    const [content, setContent] = useState('');
    const history = useHistory();
    useEffect(() => {
        setContent('titulo more longer the now more here please')
    }, []);
    const  gocrowfundig = () => {        
        history.push("/crowfounding");
    };
    const  handleSubmit = () => {        
        history.push("/cotizate");  
    };

    return (
    <>      
        <Row>
            <Col sm={6} md={12} lg={6}>
                <Section>
                    <Article>
                        <Picture>
                            <Go to="/crowfounding">
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
                            <Go to="/cotizate">
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
