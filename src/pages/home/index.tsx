import React, { useEffect,useState } from 'react'
import {Grid} from 'react-styled-flexboxgrid'
import {Content,Title2,Title, Br,DivPortada} from './styles'
import ListBulletin from '../../components/list-bulletin'
import Banner from './component/Banner'
import Portada from './component/Portada'
import Carousel,{ slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Projects from './component/projects';
import { useDispatch, useSelector } from "react-redux";

const Home: React.FC = () => {

  const {
    proyectos
  } = useSelector((stateSelector: any) => {
    return stateSelector.home;
  });

  useEffect(() => {
    
  }, [proyectos]);

    return (
        <Content>
            <DivPortada >
                  <Portada />
             </DivPortada>
             <div >
                  <Banner />
             </div>
             {proyectos?
             <div style={{ background:'#F9F0E8'}}>
             {/* https://brainhubeu.github.io/react-carousel/docs/examples/customArrows */}
                <Title>PROYECTOS DESTACADOS </Title>
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
                     <Projects />
                     <Projects />
                     <Projects /> 
                </Carousel>
               
            </div>   
             : null }
             <Br/>
            <div style={{ background:'#F9F0E8'}}>
                
                <Title>PROYECTOS DESTACADOS </Title>
                <Carousel >
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                </Carousel>
               
            </div>   
            <Br/>
            <div style={{ background:'#F9F0E8'}} >
            <Title>PROYECTOS FINALIZADOS </Title>
            <Carousel >
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
            </Carousel>
            </div>
            <Br/>
            <div style={{ background:'#F9F0E8'}}>
            <Title>CAUSAS SOCIALES </Title>
            <Carousel 
            // arrows={true} dots={true}
            >
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
            </Carousel>
            </div>
        </Content>
    )
}

export default Home
