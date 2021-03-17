import React, { useEffect,useState } from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'
import ReactPlayer from 'react-player'
import LineProgress from '../../../components/LineProgress'

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';
import { useDispatch, useSelector } from "react-redux";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarksTwoToneIcon from '@material-ui/icons/BookmarksTwoTone';
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {MdLocationOn} from 'react-icons/md';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';
import {copiarTextoToPapelera } from '../../../lib/FuncionesGenerales';
import TabDetalle from './TabDetalle';
import Aporta from './Aporta';
import Reportar from './Reportar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProyectosRecomendados from './ProyectosRecomendados'

import * as Action from '../../../redux/actions/detalleProyectoActions';

  
import {Article, SectionDetails, Picture, 
    DivPrincipal,
    DivPortada,
    TilePortada,
    TitleVideo1,
    DivTitlevideo,
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
     DivSeparador,
     Texto,
     LinkAzul,
     Go,
     Br,
     Title,
     ImgPortal,
     DivSin,
     DivSeparadorSinColor,
     LinkAzul2,
     ButtonBordeAzul,
     DivBorderSinColor,
     Texto2,
     Texto3,
     Autor,
     DivSeparador2,
     TitleDonacion,
     TitleAportaciones,
     TitleAportaciones2,
     SubTitleAportacion,
     TextoSubtitulo,
     TextoSubtitulo2
    } from './styleDetallecomponent/styleDetalle';


interface IDetalle {
    data: {
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

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));


const Detalle: React.FC<IDetalle> = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { authenticated,id } = useSelector((stateSelector: any) => {  return stateSelector.user;  });
    const {
        proyectosDetalle, aportes, statusAportes, statusLike, statusSave,proyectosRec,profiles
      } = useSelector((stateSelector: any) => {
        return stateSelector.detalleProyecto;
      });
    let idProyectoHeader:number;
        idProyectoHeader= props.data.header.id; 

    const copiarLink =(data: string)=>{       
        copiarTextoToPapelera(data);
    }
    useEffect(() =>{      
        dispatch(Action.obtnerAportes(props.data.header.id));
        dispatch(Action.obtnerFases(props.data.header.id));
        dispatch(Action.obtnerComentario(props.data.header.id));
        dispatch(Action.obtenerProyectosRecomendados('tecnologia')); //quemado categoria/ slug
        if(authenticated){
            dispatch(Action.obtenerLike(props.data.header.id));
            dispatch(Action.obtenerSave(props.data.header.id)); //headerid
        }
       
   },[]);

   const [siguiente, SetSiguiente]= useState(0)
   const _onChangeSiguiente = (e: any) => {
        const texfield = e.target.name;
        const textValue = e.target.value;
        if (texfield === "txtSiguiente") {
            console.log(textValue);
            SetSiguiente(textValue);
        }  
   };

///proyectos finalizados temporal aqui cambiar por  recomendados--------------------
   const {
    proyectosDestacados,
    featuredProjects,
    proyectosFinalizados,
    finalizedProjects,
    causasSociales,
    listCausasSociales,
    categoriasStatus
  } = useSelector((stateSelector: any) => {
    return stateSelector.home;
  });

  useEffect(() => {   
  }, [featuredProjects,proyectosFinalizados,finalizedProjects,categoriasStatus]);

//----------------------------------------------------------------------------------
const [dispositivoMovil, setDispositivoMovil] = useState(false);


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const verificarDispositivo =() =>{
    if( navigator.userAgent.match(/Android/i)
          || navigator.userAgent.match(/iPhone/i)
          || navigator.userAgent.match(/BlackBerry/i)
          || navigator.userAgent.match(/Windows Phone/i)){
                 setDispositivoMovil(true);
        }else{
          setDispositivoMovil(false);
        }
  }
  useEffect(() => {        
    verificarDispositivo();
      console.log('disposiito :',dispositivoMovil);
  }, [dispositivoMovil]);
//------------------------------------------------------------
   const handleSubmitnex =()=>{    
       if(siguiente >0){
          alert('en proceso... siguiente.. bs : '+ siguiente );
       }else{
        alert('ingrese un monto');
       }       
   }

   
   const onchangeLike = ()=> {
        if(statusLike){
            dispatch(Action.onchangeLike(false, props.data.header.id));           
        }else{
            dispatch(Action.onchangeLike(true, props.data.header.id));          
        }
   }

   const onchangeSave = ()=> {
       if(statusSave){
           dispatch(Action.onchangeSave(false, props.data.header.id)); //es idheader
       }else{
           dispatch(Action.onchangeSave(true, props.data.header.id)); //es idheades
       }
    
  }

  useEffect(()=>{    
  },[statusLike, statusSave, authenticated])

  useEffect(()=>{    
     dispatch(Action.obtenerRedesProyecto(props.data.profile.id, props.data.profile_ca));
  },[])

    return (
        <>
        <Col xs={12} sm={12} md={12} lg={12} >     
          <DivPrincipal> 
           <Row center="xs">
                            <Col xs={12} sm={12} md={12} lg={12}>
                               <DivPortada>
                                  <TilePortada> 
                                     {props.data.title}
                                    </TilePortada>
                                </DivPortada>  
                            </Col>
                        </Row>
           <Row start="lg">   
                <Col xs={12} sm={6} md={6} lg={6}> 
                    <SectionDetails>
                            <Article>
                                <Picture>                       
                                    <ReactPlayer width={'99.9%'} url={props.data.video_main} />                    
                                </Picture>
                                <Row >                                                
                                    <Col xs={12} sm={12} md={12} lg={12}>
                                    <DivTitlevideo>
                                        <Row>                                                            
                                                <Col xs={6} sm={6} md={6} lg={6}>                                                                           
                                                    <TitleVideo1>{props.data.header.category.name}</TitleVideo1>                                              
                                                </Col>                                                          
                                                <Col xs={6} sm={6} md={6} lg={6}>                                          
                                                    <TitleVideo1> <MdLocationOn /> {props.data.header.city.name}{' - '} {props.data.header.city.countries.name} </TitleVideo1>
                                                </Col>                               
                                        </Row>
                                        </DivTitlevideo>
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
                                            <AlcanceText> {'ALCANZADOS BS: '}{props.data.header.amount_reached} </AlcanceText>                                    
                                        </Alcanzado>  
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={6}>                    
                                <Row end="lg">
                                    <Col xs={12} sm={12} md={12} lg={12}>   
                                    <Alcanzado>                               
                                        <NumberMontoMeta> {'Meta: '}{props.data.header.amount} Bs</NumberMontoMeta>
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
                                            <TileDias>{'FALTAN'} {props.data.header.qty_day_left} {' DIAS'}</TileDias> 
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
                                            {authenticated? 
                                            <IconButton onClick={onchangeLike} >
                                            {statusLike?  <ThumbUpAltIcon />: <ThumbUpAltOutlinedIcon /> }
                                            </IconButton>
                                            : 
                                            <IconButton  >
                                                <ThumbUpAltTwoToneIcon />
                                            </IconButton>
                                            }
                                        </Div1>
                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                    <Div1>
                                            {authenticated? 
                                                <IconButton onClick={onchangeSave} >
                                                    {statusSave?  <BookmarkIcon />: <BookmarkBorderIcon /> } 
                                                </IconButton>
                                                :
                                                <IconButton >
                                                    <BookmarksTwoToneIcon />    
                                                </IconButton>
                                            }
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
                                            <TileCode>{'COD: '}{props.data.header.code_campaing}</TileCode> 
                                        </DivCod>                               
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        </Contenedor>
                            <Row  >
                                <Col xs={12} sm={12} md={12} lg={12}>
                                    <Row center='xs' >

                                            <BotonAportar >Aportar</BotonAportar>   
                                    </Row>
                                </Col>
                            </Row>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
            <Row start="lg">
                <Col xs={12} sm={6} md={6} lg={6}>
                  <DivSeparador>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <DivTitle>
                        {'COMPARTE EN TUS REDES SOCIALES'   }
                        </DivTitle>  
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}> 
                      <DivSociable> 
                      <Row>
                          <Col xs={12} sm={12} md={6} lg={4}>
                            {profiles.rs_facebook &&
                                <Go  to={{ pathname: `${profiles.rs_facebook}` }} target="_blank" >
                                   <FacebookIcon style={{width:"22%" }} /> {' '} 
                                </Go>
                             }
                             {profiles.rs_linkedin &&
                                <Go  to={{ pathname: `${profiles.rs_linkedin}` }} target="_blank" >
                                    <LinkedInIcon style={{width:"22%" }} />  {' '} 
                                </Go>
                             }
                             {profiles.rs_twitter &&
                                <Go  to={{ pathname: `${profiles.rs_twitter}` }} target="_blank" >
                                    <TwitterIcon style={{width:"22%" }} />  {' '} 
                                </Go>
                             }        
                             {profiles.rs_another &&
                                <Go  to={{ pathname: `${profiles.rs_another}` }} target="_blank" >
                                    <LinkIcon style={{width:"22%" }} />  
                                </Go>
                             }
                          </Col> 
                          <Col xs={12} sm={12} md={6} lg={4}>
                              <Row end="lg">                                
                                  <ButtonEnlace>{props.data.short_url}</ButtonEnlace>                                
                              </Row>
                          </Col>
                          <Col xs={12} sm={12} md={6} lg={4}>
                              <Row end="lg">
                                <BotonAportar onClick={()=> copiarLink(props.data.short_url)} style={{width:"50%", background: "#1383C5"}} >Copiar</BotonAportar>
                              </Row>
                          </Col>
                        </Row>
                      </DivSociable>
                    </Col>     
                    
                  </DivSeparador>  
            
                  <TabDetalle  decripcion={props.data.description} />                                                                                              
           
                 <Reportar />

                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>                      
                    <DivSeparador>
                    <Col xs={12} sm={12} md={12} lg={12}>
                     <Row> 
                        <Col xs={12} sm={3} md={3} lg={3}>
                            <Row center='xs' >
                               <div className={classes.root}>
                                 <Avatar alt="Remy Sharp" src="https://hipertextual.com/files/2015/11/albert-einstein-retrato-scaled.jpg" className={classes.large} />
                               </div>
                            </Row>
                        </Col>
                        <Col xs={12} sm={9} md={9} lg={9}>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                
                                <Autor>
                                 {props.data.profile.user.first_name}{' '}{props.data.profile.user.last_name}
                                </Autor>
                                
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                
                                  <LinkAzul to="/descripcion" style={{fontSize:"12px"}}>{'3 proyectos creados'}</LinkAzul> {' '}
                                
                                  <LinkAzul to="/descripcion" style={{fontSize:"12px"}} >{'2 proyectos apoyados'}</LinkAzul> {' '}                                
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <div style={{marginTop:"2%", marginBottom:"2%"}} > 
                                   {props.data.profile.rs_facebook? <> 
                                      <Go  to={{ pathname:  `${props.data.profile.rs_facebook}` }} target="_blank" >
                                         <FacebookIcon style={{marginLeft:'2%' }} /> {' '}
                                      </Go>
                                    </>: null
                                    }
                                   {props.data.profile.rs_twitter? <>  
                                      <Go  to={{ pathname:  `${props.data.profile.rs_twitter}` }} target="_blank" >
                                         <TwitterIcon style={{marginLeft:'2%'  }} />  {' '} 
                                      </Go>
                                   </>: null
                                   }
                                   {props.data.profile.rs_linkedin? <>  
                                       <Go  to={{ pathname:  `${props.data.profile.rs_linkedin}` }} target="_blank" >
                                         <LinkedInIcon style={{marginLeft:'2%'  }} />  {' '} 
                                       </Go>
                                   </>: null 
                                   }
                                    {props.data.profile.rs_another? <>  
                                       <Go  to={{ pathname:  `${props.data.profile.rs_another}` }} target="_blank" >
                                         <LinkIcon style={{marginLeft:'2%'  }} />  {' '} 
                                       </Go>
                                   </>: null 
                                   }
                                </div>
                            </Col>                          
                        </Col>

                      </Row>   
                       <Col xs={12} sm={12} md={12} lg={12}>
                            <Row center='xs' >
                                <div style={{marginTop:"2%", marginBottom:"2%", width:'100%'}} > 
                                <ButtonBordeAzul style={{width:'39%',height:'40px', background: '#F69939', color:'#FFFFFF', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} >Siguiendo </ButtonBordeAzul>
                                <ButtonBordeAzul style={{ width:'39%', height:'40px', background: '#FFFFFF', color:'#F69939', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} >Contacto</ButtonBordeAzul>
                                </div>
                            </Row>  
                        </Col>                                                                            
                    </Col>                    
                  </DivSeparador> 
                  <DivSeparador2>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Col xs={12} sm={12} md={12} lg={12}>
                                <Row center='xs' >
                                    <TitleDonacion>
                                        Donacion 
                                    </TitleDonacion>                                    
                                </Row>  
                        </Col> 
                        <Col xs={12} sm={12} md={12} lg={12}>
                            <Row center='xs' >
                                
                            <TextField
                                id="outlined-number"
                                name="txtSiguiente"
                                value={siguiente}
                                onChange={_onChangeSiguiente}
                                type="number"
                                style={{background:'#FFFFFF', width:'65%', paddingBottom :'2px'}}
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        Bs.
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                            
                            </Row>  
                          </Col> 
                          <Col xs={12} sm={12} md={12} lg={12}>
                            <Row center='xs' >                                
                                <ButtonBordeAzul style={{width:'65%',height:'45px', background: '#F69939', color:'#FFFFFF', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} onClick={handleSubmitnex}>Enviar </ButtonBordeAzul>                                                        
                            </Row>  
                          </Col>                
                          </Col>   
                   </DivSeparador2> 
                        {aportes.map((value: any, index: any) => (
                            <Aporta aporte={value} nroAporte={index} />
                        ))}                                       
                </Col>
            </Row>           
           </Col>
           </Row>

           {proyectosRec?
                <div style={{ background:'#F9F0E8'}}>     
                  <Br/>        
                    <Title>RECOMENDADOS </Title>
                    <div style={{ padding:'5px'}} >
                        <Carousel  responsive={responsive} showDots={dispositivoMovil} arrows={dispositivoMovil}  >
                            {proyectosRec.map((value : any, index : number) =>(
                                <ProyectosRecomendados key={index} data={value} />
                            ))}                                    
                        </Carousel>
                    </div>               
                </div>   
             : null }

        </DivPrincipal>
          <Br/>
        </Col>  
        </>
    )
}


export default Detalle