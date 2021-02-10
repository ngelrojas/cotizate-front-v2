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

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';


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

    
    const { authenticated } = useSelector((stateSelector: any) => {  return stateSelector.user;  });
    useEffect(() =>{
    },[authenticated]);
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('seleccione una');


    
      const handleSubmit = (event: any) => {
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
                            <ButtonBordeAzul onClick={handleSubmit}>Reporte este proyecto a cotizate</ButtonBordeAzul>
                       </Row>                       
                    </Col>  
                  </DivSeparadorSinColor>  
                  {/* <Col xs={12} sm={12} md={12} lg={12}> 
                    <Row>  */}
                    <DivSeparadorSinColor> 
                        <FormControl component="fieldset" error={error} className={classes.formControl}>                          
                            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                                <DivBorderSinColor>
                                    <Col xs={12} sm={12} md={12} lg={12}>   
                                        <Col xs={12} sm={12} md={12} lg={12}>                                                 
                                            <Texto2>
                                                <FormControlLabel value="tipo1" control={<Radio />} label="" />
                                                Este proyecto no respeta las reglas    
                                            </Texto2>                    
                                        </Col> 
                                        <Col xs={12} sm={12} md={12} lg={12}>                                                                   
                                            <Texto3>
                                            - Contiene Discurso de acoso , odio y razismo    
                                            </Texto3>   
                                        </Col>  
                                        <Col xs={12} sm={12} md={12} lg={12}>                                                                   
                                            <Texto3>
                                            - Ofrese recompensas Prohibidas    
                                            </Texto3>   
                                        </Col>        
                                        <Col xs={12} sm={12} md={12} lg={12}>                                                                   
                                            <Texto3>
                                            - Contiene Discurso de acoso , odio y razismo   
                                            </Texto3>   
                                        </Col>                                     
                                    </Col>  
                                </DivBorderSinColor>  
                                <DivBorderSinColor>
                                    <Col xs={12} sm={12} md={12} lg={12}>   
                                        <Col xs={12} sm={12} md={12} lg={12}>                                                 
                                            <Texto2>
                                            <FormControlLabel value="tipo2" control={<Radio />} label="" />
                                            Este proyecto infringe propiedad intelectual   
                                            </Texto2>                    
                                        </Col> 
                                        <Col xs={12} sm={12} md={12} lg={12}>                                                                   
                                            <Texto3>
                                            - Este proyecto infringe derechos de autor   
                                            </Texto3>   
                                        </Col>                                                                      
                                    </Col>  
                                </DivBorderSinColor> 
                                <DivBorderSinColor>
                                    <Col xs={12} sm={12} md={12} lg={12}>   
                                        <Col xs={12} sm={12} md={12} lg={12}>                                                 
                                            <Texto2>
                                            <FormControlLabel value="tipo3" control={<Radio />} label="" />
                                                Recompensa  
                                            </Texto2>                    
                                        </Col> 
                                        <Col xs={12} sm={12} md={12} lg={12}>                                                                   
                                            <Texto3>
                                            - Apoye y no resivi mi recompensa  
                                            </Texto3>   
                                        </Col>                                                          
                                    </Col>  
                                </DivBorderSinColor>                                  
                            </RadioGroup>
                            <FormHelperText>{helperText}</FormHelperText>                            
                        </FormControl>
                        </DivSeparadorSinColor>
                      {/* </Row>
                    </Col> */}
                  
                   
                             
        </>
    )
}

export default Reportar