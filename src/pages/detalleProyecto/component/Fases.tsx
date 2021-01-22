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

    interface IReportar {
    
    }

    const useStyles = makeStyles((theme) => ({
        root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        },
    }));


const Fases: React.FC<IReportar> = (props) => {
   
    const classes = useStyles();   
    const history = useHistory();
    const { authenticated } = useSelector((stateSelector: any) => {  return stateSelector.profile;  });
    useEffect(() =>{
    },[authenticated]);
    
  
    const ClicAportando=()=>{          
          console.log("cliccc");
    }
    const redirecionLoin=()=>{        
       history.push("/registrarse");
    }

    return (
        <>        
                  <DivSeparadorSinColor>
                    <Col xs={12} sm={12} md={12} lg={12}>                              
                          {'FASE 1'}      
                    </Col>  
                  </DivSeparadorSinColor>       
                  <DivSeparadorSinColor >
                    <Col xs={12} sm={12} md={12} lg={12}> 
                        <Row center='xs' >                            
                            {'icono'}
                       </Row>                       
                    </Col>  
                    <Col xs={12} sm={12} md={12} lg={12}> 
                        <Row center='xs' >
                            {/* <ButtonBordeAzul>Reporte este proyecto a cotizate</ButtonBordeAzul> */}
                            {'icono'}
                       </Row>                       
                    </Col>  
                  </DivSeparadorSinColor>                                       
        </>
    )
}

export default Fases