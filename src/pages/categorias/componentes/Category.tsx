import React, {useState, useEffect} from 'react'
import * as Action from '../../../redux/actions/homeAction';

import {Row, Col, Grid} from 'react-styled-flexboxgrid'
import {MdLocationOn} from 'react-icons/md'
import { FaSave } from 'react-icons/fa'
import LineProgress from '../../../components/LineProgress'

import {
    SectionDetails,
    Article,
    ArticleBody,
    Picture,
    Img,
    Title,
    Excerpt,
    Description,
    Author,
    CodigoFaltante,
    Place,
    Alcanzado,
    NumberMonto,
    Porcentaje,
    PercentNumber,
    Go,
    TextoImg,
    TextoDescription
} from './stylesCategory'

interface ICategory {
    data: {
        id: number,
        title:string, 
        video_main:string,      
        imagen_main:string,
        slug: string,
        excerpt: string,
        description: string,
        created_at:string,
        updated_at: any,
        public_at: string,
        ended_at:any,
        status:number,
        profile_ca:number,
        short_url:string,
        slogan_campaing:string,
        header:{
            id:number,
            user:number,
            category:number,
            city:number,
            qty_day:number,
            amount:string,
            amount_reached:string,
            percent_reached:string,
            qty_day_left:number,
            role:number,
            code_campaing:number,
        },
        currency:{
            id:number,
            name:string,
            symbol:string
        },
        profile:{
            id: number,
            cinit:string,
            amount: string,
            address:string,
            number_address:string,
            neightbordhood:string,
            cellphone: string,
            telephone:string,
            description:string,
            complete: boolean,
            rs_facebook:any,
            rs_twitter:any,
            rs_linkedin:any,
            rs_another:any,
            current_position:string,
            headline:string,
            birthdate:string,
            photo:string,
            user:{
                id:number,
                first_name: string,
                last_name: string,
                email:string
            },
            countries:{
                id:number,
                name: string,
                slug: string,
                short_name:string,
                code_name:string,
                description:string
            },
            cities:{
                id: number,
                name: string,
                slug: string,
                short_name: string,
                code_name: string,
                description: string,
                countries:{
                    id: number,
                    name: string,
                    slug: string,
                    short_name: string,
                    code_name: string,
                    description: string                    
                }
            }
        }
    }
}

const Category: React.FC<ICategory> = (props)=> {

  
    // console.log(props.data);
    // useEffect(() => {
        
    // }, [])
    
    return (
        <> 
         <Col >     
         <Row start="lg">   
            <SectionDetails>
            <Article>
                <Picture>
                  <Go   to={{
                            pathname: `/detalle-del-proyecto/${props.data.slug}`,
                            state: {
                                idProyecto: `${props.data.id}`,
                                slug: `${props.data.slug}`
                            }
                            }}>
                        {/* <Img
                            src={'http://165.227.203.226:9000/mediafiles/'+props.data.imagen_main}
                            alt="cotizate"
                        /> */}
                        <TextoImg dangerouslySetInnerHTML={{__html:props.data.imagen_main}} /> 
                    </Go>
                </Picture>
                <Title>{props.data.title}</Title>
            </Article>
            <ArticleBody>
                <Row>
                <Col xs={6} sm={6} md={12} lg={6}>
                        <Row start="lg">
                            <Col sm={12} md={12} lg={12}>
                                <Place>
                                   <MdLocationOn />
                                    <span>
                                        {/* <Go to="/">                                             */}
                                          {' '}  {props.data.profile.cities.name} - {props.data.profile.cities.countries.name}                                           
                                        {/* </Go> */}
                                    </span>                                    
                                </Place>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={6} sm={6} md={12} lg={6}>
                        <Row end="lg">
                            <Col sm={12} md={12} lg={12}>
                                {/* <Author>
                                    <p>Autor:</p>
                                    <p>Aljandro Matos</p>
                                </Author> */}
                               
                            </Col>
                        </Row>
                    </Col>
 
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Excerpt>
                            {/* <Go to="/my-article"> */}
                                {props.data.title}                                
                            {/* </Go> */}
                        </Excerpt>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Description>
                            {/* <Go to="/"> */}
                                {props.data.excerpt}
                            {/* </Go> */}
                        </Description>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Row start="lg">
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Porcentaje>
                                <LineProgress bgcolor={'#7CC142'} completed={props.data.header.percent_reached} />                                
                                </Porcentaje>                            
                            </Col>
                        </Row>
                    </Col>
                </Row>
           

                <Row>   
                   <Col xs={6} sm={6} md={6} lg={6}>                   
                        <Row start="lg">
                            <Col xs={12} sm={12} md={12} lg={12}>
                               <Alcanzado>
                                    <p> {props.data.header.percent_reached}{'% '} ALCANZADO</p>                                                                        
                                </Alcanzado>  
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6}>                    
                        <Row end="lg">
                            <Col xs={12} sm={12} md={12} lg={12}>                             
                               <NumberMonto> {props.data.header.amount_reached } Bs</NumberMonto>                               
                            </Col>
                        </Row>
                    </Col>
                </Row>
               
               <Row>
                   <Col xs={6} sm={6} md={6} lg={6}>
                        <Row start="lg">
                            <Col xs={12} sm={12} md={12} lg={12}>
                               <CodigoFaltante>
                                    <p>Faltan: {props.data.header.qty_day_left} Dias</p>
                                </CodigoFaltante>  
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={6}>
                        <Row end="lg">
                            <Col xs={12} sm={12} md={12} lg={12}>                             
                               <PercentNumber>Cod: {props.data.header.code_campaing }</PercentNumber>                               
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Row start="lg">
                            <Col sm={12} md={12} lg={12}>
                                <Author>
                                    <p>Autor:  {props.data.profile.user.first_name} {' '} {props.data.profile.user.last_name}</p>                                     
                                </Author>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ArticleBody>
        </SectionDetails>
        </Row>
        </Col>   
        </>
    )
}

export default Category

