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
    TitleCity,
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
                            pathname: `/detail-proyect/${'slug'}`,
                            state: {
                                idProyecto: `${1}`,
                                slug: `${'slug'}`
                            }
                            }}>
                        <Img
                            src={'https://s03.s3c.es/imag/_v0/770x420/6/8/7/700x420_Fotos-del-sol-durante-un-ano.jpg'}
                            alt="cotizate"
                        />
                    </Go>
                </Picture>
                <Row>
                    <Col xs={6} sm={6} md={6} lg={6}>
                        <Title>
                            <Go to={{
                                pathname: '/category',
                                state: {
                                    idCategoria: `${2}`,
                                    nombre: `${'tecnologi'}`,
                                    slug: `${2}`,
                                    imgbanner:`${33}`
                                }
                            }}> 
                            {'ARTE - PINTURA'}
                          </Go>
                        </Title>
                   </Col>
                   <Col xs={6} sm={6} md={6} lg={6}>
                        <TitleCity>                           
                                    <Place>
                                    <MdLocationOn />
                                        <span style={{color:'white'}}>                                                                               
                                            {' '}  {'ciudad'} - {'pais'}                                      
                                        </span>                                    
                                    </Place>                                
                        </TitleCity>
                    </Col>
                </Row>
            </Article>
            <ArticleBody>          
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Excerpt>
                        <Go   to={{
                            pathname:`/detail-proyect/${'slug'}`,
                            state: {
                                idProyecto: `${1}`,
                                slug: `${2}`
                            }
                            }}>
                                {'titulo1'}                                
                            </Go>
                        </Excerpt>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Description>                          
                                {'descripcion'}                          
                        </Description>
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

