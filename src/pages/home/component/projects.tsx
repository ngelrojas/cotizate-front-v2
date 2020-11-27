import React, {useState, useEffect} from 'react'
import * as Action from '../../../redux/actions/homeAction';

import {Row, Col, Grid} from 'react-styled-flexboxgrid'
import {MdLocationOn} from 'react-icons/md'
import { FaSave } from 'react-icons/fa'
import LineProgress from '../../../../src/components/LineProgress'

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
    PercentTitle,
    Alcanzado,
    NumberMonto,
    Porcentaje,
    PercentNumber,
    Bar,
    Go
} from './styles'

interface Iproyect {
    data: {
        title:string,
        id: number,
        imagen_main:string,
        slug: string,
        excerpt: string,
        currency: number,
        slogan_campaing:string,
        header:{
            id: number,
            qty_day_left:number,
            amount: string,
            amount_reached:string,
            percent_reached:string,
            role:number,
            code_campaing: string,
            user:{
                first_name: string,
                last_name: string
            },
            category:{
                id:number,
                name: string,
                slug: string,
                description:string
            },
            city:{
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

const Projects: React.FC<Iproyect> = (props)=> {

    const [content, setContent] = useState('')
    console.log(props.data);
    useEffect(() => {
        setContent('titulo more longer the now more here please')
    }, [])
    
    return (
        <>            
            <SectionDetails>
            <Article>
                <Picture>
                    <Go to="/my-article">
                        <Img
                            src="https://placebeard.it/640x360"
                            alt="cotizate"
                        />
                    </Go>
                </Picture>
                <Title>{props.data.header.category.name}</Title>
            </Article>
            <ArticleBody>
                <Row>
                <Col xs={6} sm={6} md={12} lg={6}>
                        <Row start="lg">
                            <Col sm={12} md={12} lg={12}>
                                <Place>
                                   <MdLocationOn />
                                    <span>
                                        <Go to="/category/santa-cruz">                                            
                                          {' '}  {props.data.header.city.name} - {props.data.header.city.countries.name}
                                        </Go>
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
                    <Col sm={12} md={12} lg={12}>
                        <Excerpt>
                            <Go to="/my-article">
                                {props.data.excerpt}
                            </Go>
                        </Excerpt>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Description>
                            {/* <Go to="/"> */}
                                {props.data.excerpt}
                            {/* </Go> */}
                        </Description>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Row start="lg">
                            <Col sm={12} md={12} lg={12}>
                                <Porcentaje>
                                <LineProgress bgcolor={'#7CC142'} completed={props.data.header.percent_reached} />
                                </Porcentaje>                            
                            </Col>
                        </Row>
                    </Col>
                </Row>
           

                <Row>   
                   <Col xs={6} sm={6} md={6} lg={6}>
                   {/* <Col sm={12} md={12} lg={6}> */}
                        <Row start="lg">
                            <Col xs={12} sm={12} md={12} lg={12}>
                               <Alcanzado>
                                    <p> {props.data.header.percent_reached}{'% '} ALCANZADO</p>                                    
                                </Alcanzado>  
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6}>
                    {/* <Col sm={12} md={12} lg={6}> */}
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
                                    <p>Autor:  {props.data.header.user.first_name} {' '} {props.data.header.user.first_name}</p>                                   
                                </Author>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ArticleBody>
        </SectionDetails>
            
        </>
    )
}

export default Projects

