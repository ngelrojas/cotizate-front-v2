import React,{ useEffect, useState} from 'react';
import { Dialog, DialogContent, Button, Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, InputAdornment } from "@material-ui/core";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { useSelector,useDispatch } from "react-redux";
import * as Action from '../../../redux/actions/detalleProyectoActions';
import { ButtonBordeAzul   } from './styleDetallecomponent/styleDetalle';

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
        background:'#1383C5'
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

}));


  interface IDetalle {
    open:boolean,
    onHandleClose: any,
    idUserProyect:number,
   }
const ModalContacto: React.FC<IDetalle> =(props ) => {
    
    const style = useStyles();
    const dispatch = useDispatch();

    const [usuarioName, setUsuarioName] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [email, setEmail] = useState("");
    const [apellido, setApellido] = useState("");
   
    const [usuarioNameError, setUsuarioNameError] = useState(false);
    const [descripcionError, setDescripcionError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [apellidoError, setApellidoError] = useState(false);
   
    const isValidUsuarioName = (usuarioName: any) => {   
        return  usuarioName.length >= 3;
    };
    const isValidDescriocion = (descripcio: any) => {    
        return  descripcio.length >= 20 ;
    };
    const isValidEmail = (email:any) => {    
        return  email.length >= 3;
    };
    const isValidApellido = (apellid:any) => {    
        return  apellid.length >= 3;
    };



    const _onChangeregistro= (e: any) => {
            const texfiel = e.target.name;
            const value = e.target.value;
            if (texfiel === "usuarioName") {
                setUsuarioName(value);
                setUsuarioNameError(!isValidUsuarioName(value));
            }
            if (texfiel === "descripcion") {
                setDescripcion(value);
                setDescripcionError(!isValidDescriocion(value));
            }
            if (texfiel === "email") {
                setEmail(value);
                setEmailError(!isValidEmail(value));
            }
            if (texfiel === "apellido") {
                setApellido(value);
                setApellidoError(!isValidApellido(value));
            }
          
            
      };
    const isFormValid=()=> {
        return isValidUsuarioName(usuarioName) && isValidDescriocion(descripcion) && 
        isValidEmail(email) 
      }
    const registrarUsuarioNuevo= () => {
       dispatch(Action.contactarContacto(props.idUserProyect, usuarioName, apellido,email,descripcion));
       props.onHandleClose();
    }

    return (
        <Dialog
            disableEscapeKeyDown
            disableBackdropClick
            open={props.open}
            onClose={props.onHandleClose}
           // TransitionComponent={Transition}
        >
        <DialogContent >
                 <Grid container >
                    <Grid item xs={12} className={style.contentTitle1}  >
                        <Typography variant="h6" style={{color:'#ffffff'}} gutterBottom>
                           Enviar Mensaje
                        </Typography>
                    </Grid>
                    <Grid container  className={style.contentTitle}  >
                    <Grid item xs={6}  >
                       <TextField
                            label="Nombre"
                            type={'text'}
                            variant="outlined"
                            name="usuarioName"
                            value={usuarioName}
                            onChange={_onChangeregistro}
                            style={{ margin: 6   }}
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
                    <Grid item xs={6} >
                         <TextField                 
                            label="Apellido"
                            type={'text'}
                            variant="outlined"
                            name="apellido"
                            value={apellido}
                            style={{ margin: 6   }}
                            onChange={_onChangeregistro}
                            className={style.TextFielNombre}
                            error={apellidoError}
                            helperText={ apellidoError &&
                            "El Apellido es requerido-"
                            }
                            required
                            fullWidth
                            inputProps={{
                            maxLength: 20,
                            }}
                        />                    
                    </Grid>
                    <Grid item xs={12}  >
                         <TextField
                            label="Email"
                            type={'text'}
                            variant="outlined"
                            name="email"
                            value={email}
                            onChange={_onChangeregistro}
                            className={style.TextFielEmail}
                            error={emailError}
                            helperText={ emailError &&
                            "El email es requerido, no cumple con los requisitos"
                            }
                            required
                            fullWidth
                            inputProps={{
                            maxLength: 20,
                            }}
                          />
                    </Grid> 

                        </Grid>    
                            <TextField
                            label="Mensaje"
                            style={{ margin: 8 }}
                            name="descripcion"
                            value={descripcion}
                            onChange={_onChangeregistro}
                            rows={3}
                            helperText={ descripcionError &&
                                "La descripcion debe es requerida"
                                }
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            />
                      
                
                    <Grid container item xs={12}  >
                        <Grid item xs={6} >
                           
                        <ButtonBordeAzul  onClick = {props.onHandleClose}  style={{width:'90%',height:'40px', background: '#F69939', color:'#FFFFFF', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} >
                            CANCELAR 
                        </ButtonBordeAzul>
                                      

                        </Grid>   
                        <Grid item xs={6}  >
                        <ButtonBordeAzul    onClick={registrarUsuarioNuevo}  
                       //disabled={!isFormValid()}
                        style={{width:'90%',height:'40px', background: '#F69939', color:'#FFFFFF', border: '1px solid #F69939',fontWeight: 'bold',borderRadius: '5px' }} >
                            ENVIAR 
                        </ButtonBordeAzul>

                        
                        </Grid> 
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
export default ModalContacto;