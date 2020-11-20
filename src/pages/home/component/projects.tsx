import React, {useState, useEffect} from 'react'
import {List,Section} from './styles'
import Projectdetails from './Projectdetails'
import * as Action from '../../../redux/actions/homeAction';

import {Row, Col, Grid} from 'react-styled-flexboxgrid'
import {MdLocationOn} from 'react-icons/md'
import { FaSave } from 'react-icons/fa'

import {
    SectionDetails,
    Article,
    ArticleBody,
    Picture,
    Img,
    Title,
    Excerpt,
    Author,
    CodigoFaltante,
    Place,
    PercentTitle,
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
            {/* <List> */}
                {/* <li> */}
                {/* {propsCamp.data} */}
                   {/* <Projectdetails title={props.data.title} data={props.data}/>    */}
                {/* </li>    */}                                                  
            {/* </List>             */}
            
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
                <Col sm={6} md={12} lg={6}>
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

                    <Col sm={6} md={12} lg={6}>
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
                            <Go to="/">
                                {props.data.excerpt}
                            </Go>
                        </Excerpt>
                    </Col>
                </Row>
                {/* <Row>
                    <Col sm={6} md={6} lg={6}>
                        <Row start="lg">
                            <Col sm={6} lg={12}>
                                <PercentTitle>alcanzado</PercentTitle>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                        <Row end="lg">
                            <Col sm={6} lg={12}>
                                <PercentNumber>58%</PercentNumber>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={12} lg={12}>
                        <Bar />
                    </Col>
                </Row> */}
               
               <Row>
                   <Col sm={6} md={12} lg={6}>
                        <Row start="lg">
                            <Col sm={12} md={12} lg={12}>
                               <CodigoFaltante>
                                    <p>Faltan: {props.data.header.qty_day_left} Dias</p>                                    
                                </CodigoFaltante>  
                            </Col>
                        </Row>
                    </Col>

                    <Col sm={6} md={12} lg={6}>
                        <Row end="lg">
                            <Col sm={6}  lg={12}>                             
                               <PercentNumber>Cod: {props.data.header.code_campaing }</PercentNumber>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={12} lg={12}>
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

