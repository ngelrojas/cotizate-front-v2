import React, {useState, useEffect} from 'react';
import {SectionBanner, ArticleBanner, Picture, Go,Img, Title } from '../styles/index'
import {Row, Col} from 'react-styled-flexboxgrid'
import { useHistory } from "react-router-dom";
import Cotizate from '../images/4.1.jpg';
import Crowdfunding from '../images/5.2.jpg';
import * as Action from '../../../redux/actions/homeAction';
import { useDispatch, useSelector } from "react-redux";

const Banner: React.FC = () => {
    const [content, setContent] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        
        
    }, []);
   


    return (
    <>      
        <Row>
            <Col sm={6} md={6} lg={6}>
                <SectionBanner>
                    <ArticleBanner>
                        <Picture>
                            <Go to="/crowfounding">
                                <Img
                                    src={Crowdfunding}
                                    alt="cotizate"
                                />
                            </Go>
                        </Picture>
                    </ArticleBanner>
               </SectionBanner>
            </Col>
            <Col sm={6} md={6} lg={6}>
                <SectionBanner>
                    <ArticleBanner>
                        <Picture>
                            <Go to="/cotizate">
                                <Img
                                    src={Cotizate}
                                    alt="cotizate"
                                />
                            </Go>
                        </Picture>
                    </ArticleBanner>
                 </SectionBanner>
            </Col>
        </Row>          
    </>
      
    )
}

export default Banner
