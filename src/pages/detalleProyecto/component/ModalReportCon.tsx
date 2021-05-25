import React,{ useEffect, useState} from 'react';
import { Dialog, DialogContent, Button, Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

import {Row, Col} from 'react-styled-flexboxgrid'
import { TextField, Typography, InputAdornment } from "@material-ui/core";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { useSelector,useDispatch } from "react-redux";
import * as Action from '../../../redux/actions/detalleProyectoActions';
import { BorderColor } from '@material-ui/icons';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {
    DivSeparadorSinColor,
    LinkAzul2,
    ButtonBordeAzul,
    DivBorderSinColor,
    Texto2,
    Texto3
   } from './styleDetallecomponent/styleDetalle';

const useStyles = makeStyles((theme) => ({
    icono: {
        width: '40px',
        height: '40px',
    },
    contentTitle: {
        textAlign: 'center',
    },
    contentTitle1: {
        textAlign: 'center',
        background:'#ffffff',
    },
    contentButton: {
        textAlign: 'center',
    },
    contentDialog: {
         background: '#bgfg55',
        width: '70%',
    },
    TextFiel: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    TextFielNombre: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        paddingRight:theme.spacing(1),
    },
    TextFielEmail: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        paddingLeft:theme.spacing(1),
    },
    formControl: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    formControl2: {
        width:'100%'
      },

}));


  interface IDetalle {
    open:boolean,
    onHandleClose: any,
    idDenuncia:any,
    idCanpaings:any,
   }
const ModalReportarSin: React.FC<IDetalle> =(props ) => {
    
    const style = useStyles();
    const dispatch = useDispatch();
    const [error, setError] = useState(false);
    const [value, setValue] = useState('');
    const [descripcion, setDescripcion] = useState("");
    const [descripcionError, setDescripcionError] = useState(false);


    const isValidDescripcion = (descripcion: any) => {   
        return  descripcion.length >= 5;
    };

    const { objDenuncia } = useSelector((stateSelector: any) => {  return stateSelector.detalleProyecto; });


    const _onChangeregistro= (e: any) => {
            const texfiel = e.target.name;
            const value = e.target.value;

            if (texfiel === "descripcion") {
                setDescripcion(value);
                setDescripcionError(!isValidDescripcion(value));
            }  
      };

    const onchangeEniar= () => {
        if(isValidDescripcion(descripcion)){
            
                dispatch(Action.denunciarConlogueo(props.idDenuncia, descripcion,props.idCanpaings));
                props.onHandleClose();
                setDescripcion('');
        }
    
    }
   
    useEffect(()=>{
         if(props.idDenuncia > 0){
            dispatch(Action.obtnerDenuncia(props.idDenuncia));
         }
        
    },[props.idDenuncia])

    return (
        <Dialog
            disableEscapeKeyDown
            disableBackdropClick
            open={props.open}
            onClose={props.onHandleClose}
        >
        <DialogContent >
                   
                    <Grid item xs={12} className={style.contentTitle1}  >
                    <ButtonBordeAzul >  Reportar este proyecto a Cotizate</ButtonBordeAzul> 
                    
                    </Grid>
                    <Grid container item xs={12} className={style.contentTitle}  > 
                        <Grid item xs={12}  >
                        <DivSeparadorSinColor> 
                            <FormControl component="fieldset"  className={style.formControl2}>                          
                                <RadioGroup aria-label="quiz" name="quiz" value={value} >
                                  
                                        <DivBorderSinColor>
                                            <Col xs={12} sm={12} md={12} lg={12}>   
                                                <Col xs={12} sm={12} md={12} lg={12}>                                                 
                                                    <Texto2>
                                                        <FormControlLabel value={value.toString()} control={<Radio />} label="" />
                                                        {objDenuncia.title} 
                                                    </Texto2>                    
                                                </Col> 
                                                <Col xs={12} sm={12} md={12} lg={12}>                                                                   
                                                    <Texto3>
                                                    {objDenuncia.description}    
                                                    </Texto3>   
                                                </Col>  
                                                                        
                                            </Col>  
                                    </DivBorderSinColor>                                                                                                     
                                                                
                                </RadioGroup>                            
                            </FormControl>
                            </DivSeparadorSinColor>

                        </Grid>                    
                    </Grid>      
                    <Grid item xs={12}  >
                             <TextareaAutosize aria-label="minimum height"
                               style={{width:'100%', marginTop:'10px', fontSize:'16px', borderColor:'rgb(118, 118, 118)'}}
                               rowsMin={6}
                               name="descripcion"
                               value={descripcion}                               
                               onChange={_onChangeregistro}
                               placeholder="Descripcion" />
                    </Grid>                                              
                    <Grid container item xs={12}  >
                        <Grid item xs={6} >                           
                            <ButtonBordeAzul  onClick = {props.onHandleClose}  style={{width:'90%',height:'40px', background: '#F69939', color:'#FFFFFF', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} >
                                CANCELAR 
                            </ButtonBordeAzul>                                      
                        </Grid>   
                        <Grid item xs={6}  >
                        <ButtonBordeAzul    onClick={onchangeEniar}                         
                          style={{width:'90%',height:'40px', background: '#F69939', color:'#FFFFFF', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} >
                            ENVIAR 
                        </ButtonBordeAzul>                        
                        </Grid>  
                    </Grid>
                
            </DialogContent>
        </Dialog>
    );
}
export default ModalReportarSin;