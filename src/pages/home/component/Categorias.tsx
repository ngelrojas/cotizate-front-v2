import React, {useState, useEffect} from 'react';
import {Sectionportada, Div2,ImgCategoria,DivCategoria,LineMostaza, TitleCategoria, Go } from '../styles/index'
import PortadaImg from '../images/7portada-nueva-crow.png';
import { useHistory } from "react-router-dom";
import {Row, Col, Grid} from 'react-styled-flexboxgrid';
import * as Action from '../../../redux/actions/homeAction';
import { useDispatch, useSelector } from "react-redux";
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
    const dispatch = useDispatch();
    const {
        listaCategorias
      } = useSelector((stateSelector: any) => {
        return stateSelector.home;
      });
    useEffect(() => {
         dispatch(Action.getCategorias());
    }, [])

    return (
            <>
            <LineMostaza/>
                <Sectionportada>
                <Row center="xs">
                  {listaCategorias.map((value : any, index : number) =>(
                     <Col  key={index} xs={4} sm={2} md={2} >
                      <Row center="xs">
                         <DivCategoria>
                            <Go to={{
                                    pathname: '/category',
                                    state: {
                                      idCategoria: `${value.id}`,
                                      nombre: `${value.name}`,
                                      slug: `${value.slug}`,
                                      imgbanner:`${value.img_banner}`
                                    }
                                  }}>
                             <ImgCategoria
                                 src={'165.227.203.226:9000/mediafiles/'+value.imagen}
                                 alt={value.descripcion}
                             />   
                             
                             <TitleCategoria> {value.name}</TitleCategoria>    
                             </Go>
                         </DivCategoria>                                           
                      </Row>
                     </Col>
                  ))}                                            

                </Row>      
                </Sectionportada>
                <LineMostaza/>
            </>      
    )
}

export default Portada
