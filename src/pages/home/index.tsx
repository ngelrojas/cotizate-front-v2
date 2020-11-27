import React, { useEffect,useState } from 'react'
import {Grid} from 'react-styled-flexboxgrid'
import {Content,Title2,Title,LineCeleste,LineMostaza, Br,DivPortada} from './styles'
import ListBulletin from '../../components/list-bulletin'
import Banner from './component/Banner'
import Portada from './component/Portada'
import Categorias from './component/Categorias';
import Patrocinadores from './component/Patrocinadores';
// import Carousel,{ slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import Projects from './component/projects';
import { useDispatch, useSelector } from "react-redux";
import * as Action from '../../redux/actions/homeAction';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home: React.FC = () => {

  const {
    proyectosDestacados,
    featuredProjects,
    proyectosFinalizados,
    finalizedProjects,
    causasSociales,
    listCausasSociales
  } = useSelector((stateSelector: any) => {
    return stateSelector.home;
  });
  const dispatch = useDispatch();
  useEffect(() => {        
    dispatch(Action.proyectosDestacados(5));
    dispatch(Action.proyectosFinalizados(7));
    dispatch(Action.causasSociales(1));
}, []);

useEffect(() => {   

  console.log(proyectosFinalizados);

}, [featuredProjects,proyectosFinalizados,finalizedProjects]);

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
        <Content>
            <DivPortada >
                  <Portada />
             </DivPortada>
             <div >
                  <Banner />
             </div>
             {proyectosDestacados?
             <div style={{ background:'#F9F0E8'}}>             
                <Title>PROYECTOS DESTACADOS </Title>
                <Carousel  responsive={responsive} >
                  {featuredProjects.map((value : any, index : number) =>(
                     <Projects data={value} />
                  ))}
                    
                
                </Carousel>
               
            </div>   
             : null }
             <Br/>
             {/* {proyectosFinalizados?
             <div style={{ background:'#F9F0E8'}}>             
                <Title>PROYECTOS FINALIZADOS </Title>
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
                  {finalizedProjects.map((value : any, index : number) =>(
                     <Projects data={value} />
                  ))}
                    
                
                </Carousel>
               
            </div>   
             : null }
             <Br/>
             {causasSociales?
             <div style={{ background:'#F9F0E8'}}>             
                <Title>PROYECTOS FINALIZADOS </Title>
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
                  {listCausasSociales.map((value : any, index : number) =>(
                     <Projects data={value} />
                  ))}
                    
                
                </Carousel>
               
            </div>   
             : null } */}
             <Br/>
             <div>
                  <Title>CATEGORIAS </Title>
                  {/* <Br/> */}
                  <Categorias />
             </div>
               <Br/>
             <div>
                  <Title>PATROCINADORES </Title>
                  <LineCeleste/>
                  <Br/>
                    <Patrocinadores/>
                  <LineCeleste/>
             </div>


            {/* <div style={{ background:'#F9F0E8'}}>
                
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
            </div> */}
        </Content>
    )
}

export default Home
