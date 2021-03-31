import React, {useState, useEffect} from 'react'
import * as Action from '../../../redux/actions/homeAction';

import {Row, Col, Grid} from 'react-styled-flexboxgrid'
import {MdLocationOn} from 'react-icons/md'
import { FaSave } from 'react-icons/fa'
import LineProgress from '../../../components/LineProgress'
import Link from '@material-ui/core/Link';
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
import {useHistory} from 'react-router-dom'
interface Iproyectorecomendad {
    data:{
        id: number,
        title: string,
        video_main: string,
        imagen_main: string,
        slug: string,
        excerpt: string,
        description: string,
        created_at: any,
        updated_at: any,
        public_at: any,
        ended_at: any,
        status: number,
        header: {
            id: number,
            user: number,
            category: number,
            city: number,
            qty_day: number,
            amount: string,
            amount_reached: string,
            percent_reached: string,
            qty_day_left: number,
            role: number,
            code_campaing: string
        },
        profile: {
            id: number,
            user: {
                id: number,
                first_name: string,
                last_name: string,
                email: string
            },
            countries: {
                id: number,
                name: string,
                slug: string,
                short_name: string,
                code_name: string,
                description: string
            },
            cities: {
                id: number,
                name: string,
                slug: string,
                short_name: string,
                code_name: string,
                description: string,
                countries: {
                    id: number,
                    name: string,
                    slug: string,
                    short_name: string,
                    code_name: string,
                    description: string
                }
            },
            cinit: string,
            address: string,
            number_address: string,
            neightbordhood: string,
            cellphone: string,
            telephone: string,
            description: string,
            complete: boolean,
            rs_facebook: any,
            rs_twitter: any,
            rs_linkedin: any,
            rs_another: any,
            current_position: string,
            headline: string,
            birthdate: string,
            photo: string,
            header: number
        },
        profile_ca: any,
        currency: {
            id: number,
            name: string,
            symbol: string,
        },
        short_url: string,
        slogan_campaing: string,
    }
}

const ProjectosRecomendados: React.FC<Iproyectorecomendad> = (props)=> {
    let history = useHistory()
    const [content, setContent] = useState('')    
    useEffect(() => {
        setContent('titulo more longer the now more here please')
    }, [])

    const redireccionarDetalle = (url: string)=>{
      
        console.log(url)
        // history.push('/detalle-del-proyecto/'+url);
        window.location.replace('/detalle-del-proyecto/'+url);
        // windows.location.reload();
    }
    
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
                        <Img                            
                            src={'http://165.227.203.226:9000/mediafiles/'+props.data.imagen_main}
                            alt="cotizate"
                        />
                    </Go>
                </Picture>
                <Row>
                    <Col xs={6} sm={6} md={6} lg={6}>
                        <Title>
                            <Go to={{
                                pathname: `/categoria/${props.data.slug}`,
                                state: {
                                    idCategoria: `${props.data.header.category}`,
                                    nombre: `${props.data.slug}`,
                                    slug: `${props.data.slug}`,
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
                                        <span style={{color:'white', }}>                                                                               
                                            {' '}  {props.data.profile.cities.name} - {props.data.profile.countries.name}                                      
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
                        {/* <Go   
                            to={{
                            pathname:`/detalle-del-proyecto/${props.data.slug}`,
                            state: {
                                idProyecto: `${1}`,
                                slug: `${props.data.slug}`
                            }
                            }}
                             
                            >
                                {props.data.title}                                
                            </Go> */}
                             <Link
                                component="button"
                                variant="body2"
                                onClick={() => {
                                    redireccionarDetalle(`${props.data.slug}`)
                                }}
                                >
                                    {props.data.title}     
                                </Link>
                        </Excerpt>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Description>                          
                                {props.data.excerpt}                          
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

