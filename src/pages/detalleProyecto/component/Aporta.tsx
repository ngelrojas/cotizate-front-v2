import React, { useEffect,useState } from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'
import ReactPlayer from 'react-player'
import LineProgress from '../../../components/LineProgress'

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { useDispatch, useSelector } from "react-redux";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Avatar from '@material-ui/core/Avatar';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {MdLocationOn} from 'react-icons/md';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Moment from 'react-moment';
import { useHistory } from "react-router-dom";

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
import { isConstructorDeclaration } from 'typescript';

    function TabPanel(props : any) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      function a11yProps(index : any) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

interface IAporta {
    nroAporte:number,
    aporte:{
        id:number,
        title:string,
        description:string,
        amount:string,
        expected_delivery:string,
        user:0,
        all_cities:any,
        pick_up_locally:any,
        header:number,
        cities:any
    }
 
}

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));


const Aporta: React.FC<IAporta> = (props) => {
   
    const classes = useStyles();   
    const history = useHistory();
    const { authenticated } = useSelector((stateSelector: any) => {  return stateSelector.profile;  });
    useEffect(() =>{
    },[authenticated]);
    const [aporte1, setAporte1] = useState(false); 
    const _onChangeform = (e: any) => {
        const texfield = e.target.name;
        const textValue = e.target.value;
        if (texfield === "txtEnviar") {
            console.log(textValue);
            setAporte1(textValue);
        }
     
      };
    const ClicAportando=()=>{          
          console.log("cliccc", aporte1);
    }
    const redirecionLoin=()=>{        
       history.push("/registrarse");
    }
       console.log(props.nroAporte);

    return (
        <>        
             <DivSeparador2>
                        <Col xs={12} sm={12} md={12} lg={12}>
                           <Col xs={12} sm={12} md={12} lg={12}>
                                    <TitleAportaciones>                                      
                                      {props.aporte.title}
                                    </TitleAportaciones>  
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                               <ImgPortal
                                src={'https://img.freepik.com/vector-gratis/fondo-plano-naturaleza_1308-20252.jpg?size=626&ext=jpg'}
                                />
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                    <TitleAportaciones2>
                                      {' "aporte con mas  Bs. 100 O mas " '}
                                    </TitleAportaciones2>  
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                    <SubTitleAportacion>
                                      {' Esta recompensa garante '}
                                    </SubTitleAportacion>  
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                    <Texto>
                                      {'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. '}
                                    </Texto>  
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                    <Texto>
                                      {'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais '}
                                    </Texto>  
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                                <Row>
                                  <Col xs={6} sm={6} md={6} lg={6}>
                                            <TextoSubtitulo>
                                            {'Entrega prevista'}
                                            </TextoSubtitulo>                                      
                                  </Col>
                                  <Col xs={6} sm={6} md={6} lg={6}>
                                       <Row end="lg">                                      
                                            <TextoSubtitulo>
                                                {'Envio:'}
                                            </TextoSubtitulo>
                                       </Row>
                                  </Col>        
                                </Row>             
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>     
                               <Row>
                                  <Col xs={6} sm={6} md={6} lg={6}>
                                        <TextoSubtitulo>                       
                                            <Moment format="DD/MM/YYYY">{props.aporte.expected_delivery}</Moment>
                                        </TextoSubtitulo>
                                      
                                  </Col>
                                  <Col xs={6} sm={6} md={6} lg={6}>                                      
                                       <Row end="lg">
                                         <TextoSubtitulo>
                                            {props.aporte.all_cities? 
                                             'Toda Bolivia'
                                              :null
                                            }
                                         </TextoSubtitulo>                                     
                                       </Row>
                                  </Col>
                                </Row>                          
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>     
                               <Row end="lg">                                  
                                    <TextoSubtitulo2>
                                        {props.aporte.pick_up_locally?
                                         '* incluye valor del envio'
                                         :  null
                                        }                                        
                                    </TextoSubtitulo2>                                                                                                    
                                </Row>                          
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12}>
                            <Row center='xs' >
                                
                            <TextField
                                id="outlined-number"
                                name="txtEnviar"                              
                                type="number"
                                onChange={_onChangeform}
                                style={{background:'#FFFFFF', width:'65%'}}
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
                              {authenticated? <ButtonBordeAzul onClick={ClicAportando} style={{width:'65%',height:'45px', background: '#F69939', color:'#FFFFFF', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} >Enviar </ButtonBordeAzul>                                                        
                              :<ButtonBordeAzul onClick={redirecionLoin}  style={{width:'65%',height:'45px', background: '#F69939', color:'#FFFFFF', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} >Enviar </ButtonBordeAzul>                                                        
                            }                            
                                
                            </Row>  
                          </Col>              

                        </Col>
                    </DivSeparador2>
                        
        </>
    )
}


export default Aporta