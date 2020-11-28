import React, {useState, useEffect} from 'react';
import {Sectionportada, Div2,ImgCategoria,DivCategoria,LineMostaza, TitleCategoria } from '../styles/index'
import PortadaImg from '../images/7portada-nueva-crow.png';
import { useHistory } from "react-router-dom";
import {Row, Col, Grid} from 'react-styled-flexboxgrid';
import Arte from '../images/categorias/artes.png';
import Ecologico from '../images/categorias/ecologico.png';
import Fotografia from '../images/categorias/fotografia.png';
import Games from '../images/categorias/games-.png';
import Musica from '../images/categorias/musica.png';
import Quimica from '../images/categorias/quimica.png';
import Salud from '../images/categorias/salud.png';
import Solidario from '../images/categorias/solidario.png';
import Teatro from '../images/categorias/teatro.png';
import Tegnologia from '../images/categorias/tegnologia.png';

const Portada: React.FC = () => {
    const history = useHistory();
    useEffect(() => {
        
    }, [])
    const  handleSubmit = () => {        
        
    };
    return (
            <>
            <LineMostaza/>
                <Sectionportada>
                <Row>
                        <Col xs={2} sm={2} md={2} >
                            <Row end="lg">
                                <DivCategoria>
                                    <ImgCategoria
                                        src={Ecologico}
                                        alt="Ecologico"
                                    />      
                                    <TitleCategoria> Ecologico</TitleCategoria>    
                                    </DivCategoria>                                           
                            </Row>
                        </Col>
                        <Col xs={2} sm={2} md={2} >
                            <Row end="lg">  
                                <DivCategoria>
                                    <ImgCategoria
                                        src={Fotografia}
                                        alt="Fotografia"
                                    />      
                                    <TitleCategoria> Fotografia</TitleCategoria>       
                                    </DivCategoria>                        
                            </Row>
                        </Col>
                        <Col xs={2} sm={2} md={2} >
                            <Row end="lg">                        
                                <DivCategoria>
                                    <ImgCategoria
                                        src={Games}
                                        alt="Games"
                                    />      
                                    <TitleCategoria> Games</TitleCategoria>       
                                    </DivCategoria>                      
                            </Row>
                        </Col>
                        <Col xs={2} sm={2} md={2} >
                            <Row end="lg">     
                                <DivCategoria>
                                    <ImgCategoria
                                        src={Quimica}
                                        alt="Quimica"
                                    />      
                                    <TitleCategoria> Quimica</TitleCategoria>       
                                    </DivCategoria>                  
                            </Row>
                        </Col>
                        <Col xs={2} sm={2} md={2} >
                            <Row end="lg"> 
                                <DivCategoria>
                                    <ImgCategoria
                                        src={Salud}
                                        alt="Salud"
                                    />      
                                    <TitleCategoria> Salud</TitleCategoria>       
                                    </DivCategoria>                  
                            </Row>
                        </Col>                                 
                </Row>      
                </Sectionportada>
                <LineMostaza/>
            </>      
    )
}

export default Portada