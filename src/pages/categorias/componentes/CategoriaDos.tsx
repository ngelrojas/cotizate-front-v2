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

interface ICategoryDos {
    data: {
        id: number,
        title:string, 
        slug:string,
        excerpt: string,
        flag:number,
        imagen_main:string,
        currency:number,
        slogan_campaing:string,
        
        header:{
            id:number,            
            qty_day_left:number,
            amount:string,
            amount_reached:string,
            percent_reached:string,
            role:number,
            code_campaing:number,  
            user:{
                first_name:string,
                last_name:string,
            },
            category:{
                id:number,
                name:string,
                slug:string,
                description:string,
                img_banner:string,
                img_icon:string,
            },
            city:{
                id:number,
                name:string,
                slug:string,
                short_name:string,
                code_name:string,
                description:String,
                countries:{
                    id:number,
                    name:string,
                    slug:string,
                    short_name:string,
                    code_name:string,
                    description:String,
                }
            }      
        }
    }
}

const CategoryDos: React.FC<ICategoryDos> = (props)=> {

  
    // console.log(props.data);
    
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
                                        {/* <Go to="/">  */}                                        
                                          {' '}  {props.data.header.city.name} - {props.data.header.city.countries.name}                                           
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
                                    <p>Autor:  {props.data.header.user.first_name} {' '} {props.data.header.user.last_name}</p>                                     
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

export default CategoryDos

