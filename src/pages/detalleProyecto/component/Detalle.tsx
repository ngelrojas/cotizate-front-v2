import React, { useEffect,useState } from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'
import ReactPlayer from 'react-player'
import LineProgress from '../../../components/LineProgress'

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import {Article, SectionDetails, Picture, 
    DivPrincipal,
    DivPortada,
    TilePortada,
    TitleVideo1,
    Porcentaje,
     Img,
     Contenedor,
     AlcanceText,
     Alcanzado,
     NumberMontoMeta,
     Aportetitle,
     AporteNumber,
     TileDias,
     Div1,
     DivCod,
     TileCode,
     BotonAportar,
     DivTitle,
     Input,
     DivSociable,
     ButtonEnlace,
     BotonCopiar,
    } from './styleDetallecomponent/styleDetalle';

interface Idetalle {
    detalle: {
        id:number,
        title:string,
        video_main:string,
        slug:string,
        description:string,
        public_at:string,
        status:number,
        flag:number,
        profile_ca:number,
        currency:number,
        short_url:string,
        slogan_campaing:string,
        header:{
            id:number,
            qty_day_left:number,
            amount:string,
            amount_reached:string,
            percent_reached:string,
            role:number,
            code_campaing:string,
            user:{
                first_name:string,
                last_name:string
            },
            category:{
                id:number,
                name:string,
                slug:string,
                description:string,
                img_banner:string,
                img_icon:string
            },
            city:{
                id:number,
                name:string,
                slug:string,
                short_name:string,
                code_name:string,
                description:string,
                countries:{
                    id:number,
                    name:string,
                    slug:string,
                    short_name:string,
                    code_name:string,
                    description:string
                }
            }
        },
        profile:{
            id:number,
            cinit:string,
            address:string,
            number_address:String,
            neightbordhood:string,
            cellphone: string,            
            telephone:string,
            description:string,
            complete:any,
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
                first_name:string,
                last_name:string,
                email:string
            },
            countries:{
                id:number,
                name:string,
                slug:string,
                short_name:string,
                code_name:string,
                description:string
            },
            cities:{
                id:number,
                name:string,
                slug:string,
                short_name:string,
                code_name:string,
                description:string,
                countries:{
                    id:number,
                    name:string,
                    slug:string,
                    short_name:string,
                    code_name:string,
                    description:string
                }
            }
        }
    }
}


const Detalle: React.FC<Idetalle> = props => {
   
    console.log(props.detalle);
    useEffect(() =>{
    },[]);

    return (
        <>
        <Col xs={12} sm={12} md={12} lg={12} >     
          <DivPrincipal> 
                       <Row center="xs">
                            <Col xs={12} sm={12} md={12} lg={12}>
                               <DivPortada>
                                  <TilePortada> 
                                     {'LA LUCHA POR LA  LIBERACIÓN REFORMA EDUCATIVA Y VOTO UNIVERSAL'}
                                    </TilePortada>
                                </DivPortada>  
                            </Col>
                        </Row>
           <Row start="lg">   
           <Col xs={12} sm={6} md={6} lg={6}> 
              <SectionDetails>
                    <Article>
                        <Picture>
                            {/* <Go to={{
                                pathname: '/',
                                state: { }
                            }}> */}
                               {/* <ReactPlayer width={'99.9%'} url='https://www.youtube.com/watch?v=QaXhVryxVBk' /> */}
                               <ReactPlayer width={'99.9%'} url={props.detalle.video_main} />
                            {/* </Go> */}
                        </Picture>
                        <Row >
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <Row start="lg">
                                   <Col xs={12} sm={12} md={12} lg={12}>
                                   <TitleVideo1>Arte - pintura oleo</TitleVideo1>
                                   </Col>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <Row start="lg">
                                   <Col xs={12} sm={12} md={12} lg={12}>
                                      <TitleVideo1>bbbbbb</TitleVideo1>
                                   </Col>
                                </Row>
                            </Col>
                            
                        </Row>
                    </Article>          
              </SectionDetails>
           </Col>
           <Col xs={12} sm={6} md={6} lg={6}>
               <Contenedor>
                <Row>   
                   <Col xs={8} sm={8} md={8} lg={6}>                   
                        <Row start="lg">
                            <Col xs={12} sm={12} md={12} lg={12}>
                               <Alcanzado>
                                    {/* <p> {props.data.header.percent_reached}{'% '} ALCANZADO</p> */}
                                    <AlcanceText> {'ALCANZADOS BS 1000 '} </AlcanceText>
                                    
                                </Alcanzado>  
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={6}>                    
                        <Row end="lg">
                            <Col xs={12} sm={12} md={12} lg={12}>   
                               <Alcanzado>
                               {/* <NumberMontoMeta> {props.data.header.amount_reached } Bs</NumberMontoMeta>   */}
                                  <NumberMontoMeta> {'1500'} Bs</NumberMontoMeta>
                               </Alcanzado>                          
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Row start="lg">
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Porcentaje>
                                <LineProgress bgcolor={'#7CC142'} completed={'50'} />                                
                                </Porcentaje>                            
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Row start="lg">
                            <Col xs={12} sm={12} md={12} lg={12}>                                
                               <AporteNumber>{10}</AporteNumber> <Aportetitle>{'Aportadore'}</Aportetitle>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Row start="lg">
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Div1>
                                    <TileDias>{'FALTAN 60 DIAS'}</TileDias> 
                                </Div1>                               
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Row start="lg">
                            <Col xs={6  } sm={6} md={6} lg={6}>
                                <Div1>
                                <IconButton >
                                    <ThumbUpAltIcon />
                                </IconButton>
                                </Div1>
                            </Col>
                            <Col xs={6} sm={6} md={6} lg={6}>
                               <Div1>
                                  <IconButton >
                                    <BookmarkBorderIcon />
                                  </IconButton>
                                </Div1>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row start="lg">
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Row start="lg">
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <DivCod>
                                    <TileCode>{'COD: 000111'}</TileCode> 
                                </DivCod>                               
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Contenedor>
                    <Row center='xs' >
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Row >
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <Div1>
                                    <BotonAportar >Aportar</BotonAportar>
                                    </Div1>                               
                                </Col>
                            </Row>
                        </Col>
                    </Row>
           </Col>
           <Col xs={12} sm={12} md={12} lg={12}>
            <Row start="lg">
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div style={{ background:'#F5F5F5'}}>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <DivTitle>
                        {'COMPARTE EN TUS REDES SOCIALES'   }
                        </DivTitle>  
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}> 
                      <DivSociable> 
                      <Row>
                          <Col xs={12} sm={12} md={6} lg={4}>
                            <FacebookIcon style={{width:"30%" }} /> {' '} 
                            <TwitterIcon style={{width:"30%" }} />  {' '} 
                            <WhatsAppIcon style={{width:"30%" }}/> {' '} 
                          
                          </Col> 
                          <Col xs={12} sm={12} md={6} lg={4}>
                              <Row end="lg">
                                
                                  <ButtonEnlace  >http//:cotizate.com</ButtonEnlace>
                                
                              </Row>
                          </Col>
                          <Col xs={12} sm={12} md={6} lg={4}>
                              <Row end="lg">
                                <BotonAportar style={{width:"50%", background: "#1383C5"}} >Copiar</BotonAportar>
                              </Row>
                          </Col>
                        </Row>
                      </DivSociable>
                    </Col>     
                  </div>                                                                                          
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>           
                    <div style={{ background:'#F5F5F5'}}>
                        {'COMPARTE EN TUS REDES SOCIALES'}
                    </div>                                                  
                </Col>
            </Row>           
           </Col>
        </Row>
        </DivPrincipal>
        </Col>  
        </>
    )
}
export default Detalle