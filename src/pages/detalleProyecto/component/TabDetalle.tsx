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
import Fases from './Fases';

  
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

interface ITab {
    decripcion:string,
}

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));


const TabDetalle: React.FC<ITab> = (props) => {
   
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event : any, newValue : any) => {
        setValue(newValue);
    };

    
      
    
    const { authenticated } = useSelector((stateSelector: any) => {  return stateSelector.profile;  });
    console.log('autentica: ', authenticated);
    useEffect(() =>{
    },[authenticated]);
    return (
        <>
           <DivSeparador>
                    <Col xs={12} sm={12} md={12} lg={12}>
                    <div className={classes.root}>
                        <AppBar position="static" color="inherit">
                            <Tabs style={{background:'#F5F5F5'}} value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" variant="scrollable"  scrollButtons="on" >
                            <Tab label="Descripcion" {...a11yProps(0)} />
                            <Tab label="Fases" {...a11yProps(1)} />
                            { authenticated? <Tab label="Aportaciones" {...a11yProps(2)} /> : <Tab label="Aportaciones" {...a11yProps(2)} disabled  />} 
                            <Tab label="Comentarios" {...a11yProps(3)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                            <Texto> 
                                {props.decripcion}
                            </Texto>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                                   <Fases />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Aportaciones
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Item Comentarios
                        </TabPanel>
                    </div>
                             {/* <LinkAzul to="/descripcion">{'Descripcion'}</LinkAzul> {' '}
                             <Go to="/descripcion">{'Fases'} </Go> {' '}
                             <Go to="/descripcion">{'Aportacion'} </Go> {' '}
                             <Go to="/descripcion">{'Comentarios'} </Go> {' '}
                             <Go to="/descripcion">{'Actualizaciones'} </Go>  */}
                       
                       
                    </Col>                    
           </DivSeparador>   
      
        </>
    )
}


export default TabDetalle