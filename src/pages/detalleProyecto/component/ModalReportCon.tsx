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
   }
const ModalReportarSin: React.FC<IDetalle> =(props ) => {
    
    const style = useStyles();
    const dispatch = useDispatch();

    const [usuarioName, setUsuarioName] = useState("");
    const [usuarioNameError, setUsuarioNameError] = useState(false);
    const [error, setError] = useState(false);
    const [value, setValue] = useState('');

    const isValidUsuarioName = (usuarioName: any) => {   
        return  usuarioName.length >= 3;
    };

    const { objDenuncia } = useSelector((stateSelector: any) => {  return stateSelector.detalleProyecto; });


    const _onChangeregistro= (e: any) => {
            const texfiel = e.target.name;
            const value = e.target.value;
            if (texfiel === "usuarioName") {
                setUsuarioName(value);
                setUsuarioNameError(!isValidUsuarioName(value));
            } 
      };

    const onchangeEniar= () => {
      // dispatch(Action.contactarContacto(usuarioName,email,nombre));
       props.onHandleClose();
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
                        <Typography variant="h6" style={{color:'#1383C5',borderColor:'#1383C5' }} gutterBottom>
                           Enviar Mensaje 
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} className={style.contentTitle}  >
                        <Grid item xs={12}  >
                        <TextField
                                id="usuarioName"
                                label="Nombre"
                                type={'text'}
                                variant="outlined"
                                name="usuarioName"
                                value={usuarioName}
                                onChange={_onChangeregistro}
                                className={style.TextFielNombre}
                                error={usuarioNameError}
                                helperText={ usuarioNameError &&
                                "El usuario es requerido, no cumple con los requisitos"
                                }
                                required
                                fullWidth
                                inputProps={{
                                maxLength: 20,
                                }}
                            />
                        </Grid>   
                        <Grid item xs={12}  >
                        <DivSeparadorSinColor> 
                            <FormControl component="fieldset" error={error} className={style.formControl2}>                          
                                <RadioGroup aria-label="quiz" name="quiz" value={value}
                                  // onChange={handleRadioChange}
                                   >
                                  
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