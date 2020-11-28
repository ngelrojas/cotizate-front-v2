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
    const  handleSubmit = () => {        
        
    };
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
            // infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            // keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            >
                
                   <ImgPatrocinador
                        src={Santacruz}
                        alt="cotizate"
                    />
                    <ImgPatrocinador
                        src={Comunity}
                        alt="cotizate"
                    />
                    <ImgPatrocinador
                        src={Ypfb}
                        alt="cotizate"
                    />
                      <ImgPatrocinador
                        src={Santacruz}
                        alt="cotizate"
                    />
                    <ImgPatrocinador
                        src={Comunity}
                        alt="cotizate"
                    />
                    <ImgPatrocinador
                        src={Ypfb}
                        alt="cotizate"
                    />
                      <ImgPatrocinador
                        src={Santacruz}
                        alt="cotizate"
                    />
                    <ImgPatrocinador
                        src={Comunity}
                        alt="cotizate"
                    />
                    <ImgPatrocinador
                        src={Ypfb}
                        alt="cotizate"
                    />
              
            </Carousel>
            
    )
}

export default Patrocinadores