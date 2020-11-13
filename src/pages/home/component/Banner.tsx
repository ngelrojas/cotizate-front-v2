import React, {useState, useEffect} from 'react';
import {Section, Article, Picture, Go,Img, Title } from '../styles/index'
import {Row, Col} from 'react-styled-flexboxgrid'
import { useHistory } from "react-router-dom";
import Cotizate from '../images/4.1.jpg';
import Crowdfunding from '../images/5.2.jpg';

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
                                    src={Crowdfunding}
                                    alt="cotizate"
                                />
                            </Go>
                        </Picture>
                    </Article>
               </Section>
            </Col>
            <Col sm={6} md={12} lg={6}>
                <Section>
                    <Article>
                        <Picture>
                            <Go to="/cotizate">
                                <Img
                                    src={Cotizate}
                                    alt="cotizate"
                                />
                            </Go>
                        </Picture>
                    </Article>
                 </Section>
            </Col>
        </Row>          
    </>
      
    )
}

export default Banner
