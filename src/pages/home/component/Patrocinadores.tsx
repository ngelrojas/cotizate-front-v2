import React, {useState, useEffect} from 'react';
import {Sectionportada,SectionPatrocinadores, Div2,ImgPatrocinador,DivCategoria, TitleCategoria } from '../styles/index'
import PortadaImg from '../images/7portada-nueva-crow.png';
import { useHistory } from "react-router-dom";
import {Row, Col, Grid} from 'react-styled-flexboxgrid';
import Amaszonas from '../images/patrocinadores/AMASZONAS.png';
import Comunity from '../images/patrocinadores/COMUNITY.png';
import Patrocinador1 from '../images/patrocinadores/patrocinador1.png';
import Santacruz from '../images/patrocinadores/SANTACRUZ.png';
import YANBAL from '../images/patrocinadores/YANBAL.png';
import Ypfb from '../images/patrocinadores/ypfb.png';
// import Carousel,{ slidesToShowPlugin } from '@brainhubeu/react-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Patrocinadores: React.FC = () => {
    const history = useHistory();
    useEffect(() => {
        
    }, [])
  
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (

            <Carousel         
            // swipeable={false}
            // draggable={false}
            // showDots={true}
            arrows={false}
            responsive={responsive}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            // keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            >
                <Row center="xs">
                     <Col xs={6} sm={4} md={3} >
                      <Row center="xs">
                          <ImgPatrocinador
                            src={Santacruz}
                            alt="cotizate"
                         />                                   
                      </Row>
                     </Col>
                </Row>
                <Row center="xs">
                     <Col xs={6} sm={4} md={3} >
                      <Row center="xs">
                          <ImgPatrocinador
                            src={Comunity}
                            alt="Comunity"
                         />                                   
                      </Row>
                     </Col>
                </Row>
                <Row center="xs">
                     <Col xs={6} sm={4} md={3} >
                      <Row center="xs">
                          <ImgPatrocinador
                            src={Ypfb}
                            alt="Ypfb"
                         />                                   
                      </Row>
                     </Col>
                </Row>
                <Row center="xs">
                     <Col xs={6} sm={4} md={3} >
                      <Row center="xs">
                          <ImgPatrocinador
                            src={YANBAL}
                            alt="YANBAL"
                         />                                   
                      </Row>
                     </Col>
                </Row>         
              
            </Carousel>
            
    )
}

export default Patrocinadores
