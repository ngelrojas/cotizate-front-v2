import React from 'react'
import {Grid} from 'react-styled-flexboxgrid'
import {Content,Title2,Title, Br} from './styles'
import ListBulletin from '../../components/list-bulletin'
import Banner from './component/Banner'
import Portada from './component/Portada'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Projects from './component/projects';


const Home: React.FC = () => {

    
    return (
        <Content>
            <div style={{ alignContent: 'center'}} >
               <Portada />
             </div>
             <div >
               <Banner />
             </div>
             
             <div style={{ background:'#F9F0E8'}}>
                
                <Title>PROYECTOS DESTACADOS2 </Title>
                <Carousel >
                     <Projects />
                     <Projects />
                     <Projects />
                     <Projects />
                     <Projects />
                     <Projects />
                </Carousel>
               
            </div>   
             <Br/>
            <div style={{ background:'#F9F0E8'}}>
                
                <Title>PROYECTOS DESTACADOS </Title>
                <Carousel >
                    <ListBulletin />
                    {/* <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin /> */}
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
