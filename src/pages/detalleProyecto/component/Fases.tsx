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

import {Article,
     Img,
     Texto,
     TitleFase,
     DivSeparadorSinColor,
     DivSeparador2,

    } from './styleDetallecomponent/styleDetalle';
import { isConstructorDeclaration } from 'typescript';

    interface IFases {
       fase: {
         id:number,
         title:string,
         description:string,
         amount:string,
         header:number
       }
    }

    const useStyles = makeStyles((theme) => ({
        root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        },
    }));


const Fases: React.FC<IFases> = (props) => {
   
    const classes = useStyles();   
    const history = useHistory();
    const { authenticated } = useSelector((stateSelector: any) => {  return stateSelector.profile;  });
    useEffect(() =>{
    },[authenticated]);
    
    const [txtFase, setTxtFase] = useState(0); 
    const _onChangeform = (e: any) => {
        const texfield = e.target.name;
        const textValue = e.target.value;
        if (texfield === "txtFaseBox") {
            console.log(textValue);
            setTxtFase(textValue);
        }
     
      };
    

    return (
        <>        
                  <DivSeparadorSinColor>
                    <Col xs={12} sm={12} md={12} lg={12}>  
                        <TitleFase>
                          {props.fase.title}
                        </TitleFase>                            
                          
                    </Col>  
                  </DivSeparadorSinColor>       
                  <DivSeparador2 >
                    <Col xs={12} sm={12} md={12} lg={12}>                                                 
                        <TitleFase>
                            {props.fase.title}
                        </TitleFase>                                          
                    </Col>             
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <Texto>
                               {props.fase.description}
                        </Texto>                              
                    </Col> 
                  </DivSeparador2>   
                  <DivSeparadorSinColor>
                    <Col xs={12} sm={12} md={12} lg={12}>                              
                       <Row end='xs' >
                               <TextField
                                disabled
                                id="outlined-number"
                                name="txtFaseBox"
                                defaultValue={props.fase.amount}
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
                  </DivSeparadorSinColor>                                   
        </>
    )
}

export default Fases