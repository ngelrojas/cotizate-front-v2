import React, {useState, useEffect} from 'react';
import {Sectionportada, Div2,ImgPatrocinador,DivCategoria, TitleCategoria } from '../styles/index'
import PortadaImg from '../images/7portada-nueva-crow.png';
import { useHistory } from "react-router-dom";
import {Row, Col, Grid} from 'react-styled-flexboxgrid';
import Amaszonas from '../images/patrocinadores/AMASZONAS.png';
import Comunity from '../images/patrocinadores/COMUNITY.png';
import Patrocinador1 from '../images/patrocinadores/patrocinador1.png';
import Santacruz from '../images/patrocinadores/SANTACRUZ.png';
import YANBAL from '../images/patrocinadores/YANBAL.png';
import Ypfb from '../images/patrocinadores/ypfb.png';
import Carousel,{ slidesToShowPlugin } from '@brainhubeu/react-carousel';


const Patrocinadores: React.FC = () => {
    const history = useHistory();
    useEffect(() => {
        
    }, [])
    const  handleSubmit = () => {        
        
    };
    return (
            <Carousel
            plugins={[
                'infinite',
                'arrows',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                   numberOfSlides: 3
                  }
                },
              ]}   
            >
                {/* <Sectionportada> */}
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
      
                {/* </Sectionportada> */}
                
            </Carousel>      
    )
}

export default Patrocinadores
