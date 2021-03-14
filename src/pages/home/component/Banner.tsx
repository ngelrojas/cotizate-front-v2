import React, {useState, useEffect} from 'react';
import {SectionBanner, ArticleBanner, Picture, Go,Img, Title } from '../styles/index'
import {Row, Col} from 'react-styled-flexboxgrid'
import { useHistory } from "react-router-dom";
import Cotizate from '../images/4.1.jpg';
import Crowdfunding from '../images/5.2.jpg';
import BannerArte from '../images/arte-con-texto.png';
import BannerEcologia from '../images/ecologia-con-texto.png';
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
        <Row >
            <Col xs={12} sm={6} md={6} lg={6}>
            <Row center="xs">
                <SectionBanner>
                    <ArticleBanner>
                        <Picture>
                            <Go to="/crowfounding">
                                <Img
                                    src={BannerArte}
                                    alt="cotizate"
                                />
                            </Go>
                        </Picture>
                    </ArticleBanner>
               </SectionBanner>
               </Row> 
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
            <Row center="xs">
                <SectionBanner>
                    <ArticleBanner>
                        <Picture>
                            <Go to="/cotizate">
                                <Img
                                    src={BannerEcologia}
                                    alt="cotizate"
                                />
                            </Go>
                        </Picture>
                    </ArticleBanner>
                 </SectionBanner>
                 </Row>   
            </Col>
        </Row>          
    </>
      
    )
}

export default Banner
