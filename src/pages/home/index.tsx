import React from 'react'
import {Grid} from 'react-styled-flexboxgrid'
import {Content,Title2,Title, Br} from './styles'
import ListBulletin from '../../components/list-bulletin'
import Banner from './component/Banner'
import Portada from './component/Portada'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const Home: React.FC = () => {

    
    return (
        <Content>
            <Grid style={{ alignContent: 'center'}} >
               <Portada />
             </Grid>
             <Grid >
               <Banner />
             </Grid>
            <Grid style={{ background:'#F9F0E8'}}>
                
                <Title>PROYECTOS DESTACADOS </Title>
                <Carousel >
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                </Carousel>
               
            </Grid>   
            <Br/>
            <Grid style={{ background:'#F9F0E8'}} >
            <Title>PROYECTOS FINALIZADOS </Title>
            <Carousel >
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
            </Carousel>
            </Grid>
            <Br/>
            <Grid style={{ background:'#F9F0E8'}}>
            <Title>CAUSAS SOCIALES </Title>
            <Carousel arrows={true} dots={true}>
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
                    <ListBulletin />
            </Carousel>
            </Grid>
        </Content>
    )
}

export default Home
