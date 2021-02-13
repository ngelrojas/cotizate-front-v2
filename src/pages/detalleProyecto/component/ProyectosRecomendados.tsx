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
    PercentTitle,
    Alcanzado,
    NumberMonto,
    Porcentaje,
    PercentNumber,
    Bar,
    Go
} from './styleDetallecomponent/index'

interface Iproyectorecomendad {
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
                description:string,
                img_banner:string
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

const ProjectosRecomendados: React.FC<Iproyectorecomendad> = (props)=> {

    const [content, setContent] = useState('')
    // console.log(props.data);
    useEffect(() => {
        setContent('titulo more longer the now more here please')
    }, [])
    
    return (
        <> 
         <Col >     
         <Row start="lg">   
            <SectionDetails>
            <Article>
                <Picture>
                    <Go   to={{
                            pathname: `/detail-proyect/${props.data.slug}`,
                            state: {
                                idProyecto: `${props.data.id}`,
                                slug: `${props.data.slug}`
                            }
                            }}>
                        <Img
                            src={'https://s03.s3c.es/imag/_v0/770x420/6/8/7/700x420_Fotos-del-sol-durante-un-ano.jpg'}
                            alt="cotizate"
                        />
                    </Go>
                </Picture>
                <Title>
                    <Go to={{
                        pathname: '/category',
                        state: {
                            idCategoria: `${props.data.header.category.id}`,
                            nombre: `${props.data.header.category.name}`,
                            slug: `${props.data.header.category.slug}`,
                            imgbanner:`${props.data.header.category.img_banner}`
                        }
                    }}> 
                     {props.data.header.category.name}
                   </Go>
                </Title>
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
                        <Go   to={{
                            pathname:`/detail-proyect/${props.data.slug}`,
                            state: {
                                idProyecto: `${props.data.id}`,
                                slug: `${props.data.slug}`
                            }
                            }}>
                                {props.data.title}                                
                            </Go>
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

export default ProjectosRecomendados

