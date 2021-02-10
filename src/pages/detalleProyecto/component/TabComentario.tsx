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
    DivBorderSinAzulado,
    TextoComentarioTitle,
    TextoComentario   
    } from './styleDetallecomponent/styleDetalle';
    interface IComentario {
    
    }
    const useStyles = makeStyles((theme) => ({
        root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        },
    }));

const TabComentario: React.FC<IComentario> = (props) => {
   
    const classes = useStyles();  
    const { authenticated } = useSelector((stateSelector: any) => {  return stateSelector.profile;  });
    useEffect(() =>{
    },[authenticated]);
         

    return (
        <>                                       
            <DivBorderSinAzulado>
                <Row >
                    <Col xs={12} sm={12} md={12} lg={12}>   
                      <Row >
                        <Col xs={3} sm={3} md={3} lg={2}>                                                 
                            <Row center='xs' >
                                <Avatar alt="Remy Sharp" src={'https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg'} />
                            </Row>                
                        </Col> 
                        <Col xs={9} sm={9} md={9} lg={10}>                          
                                <TextoComentarioTitle>
                                    {'lola llorety'}     
                                </TextoComentarioTitle>       
                                <TextoComentarioTitle>
                                    {'00/00/0000'}     
                                </TextoComentarioTitle>                                                                                            
                        </Col>  
                        <Col xs={12} sm={12} md={12} lg={12}>                                                                   
                        <Row >                        
                                <TextoComentario>
                                   {'Lorem Ipsum y, más recientemente, con software de autoedició lkdeio foggo'}  
                                </TextoComentario>                            
                            </Row>      
                        </Col>     
                      </Row>                                                           
                    </Col>  
                </Row>
            </DivBorderSinAzulado>      

             <DivBorderSinAzulado>
                <Row >
                    <Col xs={12} sm={12} md={12} lg={12}>   
                      <Row >
                        <Col xs={3} sm={3} md={3} lg={3}>                                                 
                            <Row center='xs' >
                                <Avatar alt="Remy Sharp" src={'https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg'} />
                            </Row>                
                        </Col> 
                        <Col xs={9} sm={9} md={9} lg={9}>                          
                                <TextoComentarioTitle>
                                    {'maria llorety'}     
                                </TextoComentarioTitle>       
                                <TextoComentarioTitle>
                                    {'00/00/0000'}     
                                </TextoComentarioTitle>                                                                                            
                        </Col>  
                        <Col xs={12} sm={12} md={12} lg={12}>                                                                   
                        <Row >                        
                                <TextoComentario>
                                   {'Lorem Ipsum y, más recientemente, con software de autoedició lkdeio foggo'}  
                                </TextoComentario>                            
                            </Row>      
                        </Col>     
                      </Row>                                                           
                    </Col>  
                </Row>
            </DivBorderSinAzulado>                                         
        </>
    )
}

export default TabComentario