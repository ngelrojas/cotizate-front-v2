import React, { useEffect,useState } from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'
import ReactPlayer from 'react-player'
import LineProgress from '../../../components/LineProgress'

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { AnyIfEmpty, useDispatch, useSelector } from "react-redux";
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

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import ModalReportarSin from './ModalReportarSin';

import {
     DivSeparadorSinColor,
     LinkAzul2,
     ButtonBordeAzul,
     DivBorderSinColor,
     Texto2,
     Texto3
    } from './styleDetallecomponent/styleDetalle';
import { isConstructorDeclaration } from 'typescript';

    interface IReportar {
    
    }

    const useStyles = makeStyles((theme) => ({
        root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        },
        formControl: {
            width:'100%'
            // margin: theme.spacing(1),
          },
          button: {
            // margin: theme.spacing(1, 1, 0, 0),
          },
    }));


const Reportar: React.FC<IReportar> = (props) => {
    const history = useHistory();
    const classes = useStyles();
    
    const { authenticated,id } = useSelector((stateSelector: any) => {  return stateSelector.user;  });
    const { listDenuncias } = useSelector((stateSelector: any) => {  return stateSelector.detalleProyecto; });
  
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('seleccione una');

    const [openModalSin,setOpenModalSin ] = useState(false)

    
      const reportarLogueado = (event: any) => {
        event.preventDefault();
    
        
        if (value != '') {    
            alert('reportar... en proceso');
          setHelperText('You got 1!');
          setError(false);
        
        } else {
          setHelperText('Please select an option.');
          setError(true);
          alert('favor seleccione uno para reportar');
        }
      };
      const reportarSinLogueo = (event: any) => {
        event.preventDefault();
    
        
        if (value != '') {    
          console.log('elijio : ', value);
          setHelperText('You got 1!');
          setError(false);
          setOpenModalSin(true);
        } else {
          setHelperText('Please select an option.');
          setError(true);
          alert('favor seleccione uno para reportar');
        }
      };
      const onHandleCloseSin=()=>{
           setOpenModalSin(false);
       }
    const handleRadioChange = (event: any) => {
        console.log('radio', event.target.value);
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
      };

    
  
 

    return (
        <>        
                <DivSeparadorSinColor>
                    <Col xs={12} sm={12} md={12} lg={12}>                        
                                <LinkAzul2 to="/descripcion">{'* si crees que este proyecto va en contra de las politicas de Cotizate reporta este proyecto'}</LinkAzul2>                                                    
                    </Col>  
                  </DivSeparadorSinColor>       
                  <DivSeparadorSinColor >
                    <Col xs={12} sm={12} md={12} lg={12}> 
                        <Row center='xs' >
                          {authenticated? <ButtonBordeAzul onClick={reportarLogueado}>Reporte este proyecto a cotizate logu</ButtonBordeAzul>
                            :  <ButtonBordeAzul onClick={reportarSinLogueo}>Reporte este proyecto a cotizate sin</ButtonBordeAzul> 
                           }
                           
                       </Row>                       
                    </Col>  
                  </DivSeparadorSinColor>  
                  {/* <Col xs={12} sm={12} md={12} lg={12}> 
                    <Row>  */}
                    <DivSeparadorSinColor> 
                        <FormControl component="fieldset" error={error} className={classes.formControl}>                          
                            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                                {listDenuncias.map((value :any, index : any)=>(
                                    <DivBorderSinColor>
                                        <Col xs={12} sm={12} md={12} lg={12}>   
                                            <Col xs={12} sm={12} md={12} lg={12}>                                                 
                                                <Texto2>
                                                    <FormControlLabel value={value.id.toString()} control={<Radio />} label="" />
                                                     {value.title}   
                                                </Texto2>                    
                                            </Col> 
                                            <Col xs={12} sm={12} md={12} lg={12}>                                                                   
                                                <Texto3>
                                                  {value.description}    
                                                </Texto3>   
                                            </Col>  
                                                                    
                                        </Col>  
                                   </DivBorderSinColor>  

                                ))}
                               
                               
                                                            
                            </RadioGroup>
                            {/* <FormHelperText>{helperText}</FormHelperText>                             */}
                        </FormControl>
                        </DivSeparadorSinColor>
                      {/* </Row>
                    </Col> */}
                  
                  <ModalReportarSin 
                     open={openModalSin}
                     idDenuncia={value}
                     onHandleClose={onHandleCloseSin}
                  />
                             
        </>
    )
}

export default Reportar