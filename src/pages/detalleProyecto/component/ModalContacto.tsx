import React,{ useEffect, useState} from 'react';
import { Dialog, DialogContent, Button, Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Typography, InputAdornment } from "@material-ui/core";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { useSelector,useDispatch } from "react-redux";
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    icono: {
        width: '40px',
        height: '40px',
    },
    contentTitle: {
        textAlign: 'center',
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  interface IDetalle {
    open:boolean,
    onHandleClose: any
   }
const ModalContacto: React.FC<IDetalle> =(props ) => {
    
    const style = useStyles();
    const dispatch = useDispatch();

    const [usuarioName, setUsuarioName] = useState("");
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
   
    const [usuarioNameError, setUsuarioNameError] = useState(false);
    const [nombreError, setNombreError] = useState(false);
    const [emailError, setEmailError] = useState(false);
   
    const isValidUsuarioName = (usuarioName: any) => {   
        return  usuarioName.length >= 3;
    };
    const isValidNombre = (nombre: any) => {    
        return  nombre.length >= 3 ;
    };
    const isValidEmail = (email:any) => {    
        return  email.length >= 3;
    };



    const _onChangeregistro= (e: any) => {
            const texfiel = e.target.name;
            const value = e.target.value;
            if (texfiel === "usuarioName") {
                setUsuarioName(value);
                setUsuarioNameError(!isValidUsuarioName(value));
            }
            if (texfiel === "nombre") {
                setNombre(value);
                setNombreError(!isValidNombre(value));
            }
            if (texfiel === "email") {
                setEmail(value);
                setEmailError(!isValidEmail(value));
            }
          
            
      };
    const isFormValid=()=> {
        return isValidUsuarioName(usuarioName) && isValidNombre(nombre) && 
        isValidEmail(email) 
      }
    const registrarUsuarioNuevo= () => {
       // dispatch(Action.registrarUsuario(usuarioName.trim(),nombre.trim(),apellido.trim()));
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
                   
                    <Grid item xs={12} className={style.contentTitle}  >
                        <Typography variant="h6" gutterBottom>
                           Enviar Mensaje
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} className={style.contentTitle}  >
                    <Grid item xs={6}  >
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
                    <Grid item xs={6} >
                    <TextField
                            id="email"
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
                            id="nombre"
                            label="Nombre"
                            type={'text'}
                            variant="outlined"
                            name="nombre"
                            value={nombre}
                            onChange={_onChangeregistro}
                            className={style.TextFiel}
                            error={nombreError}
                            helperText={ nombreError &&
                            "El nombre es requerido, no cumple con los requisitos"
                            }
                            required
                            fullWidth
                            inputProps={{
                            maxLength: 20,
                            }}
                        />
                      
                
                    <Grid container item xs={12}  >
                        <Grid item xs={6} >
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={style.submit}
                                onClick = {props.onHandleClose}                            
                           >
                            CANCELAR
                        </Button>     
                        </Grid>   
                        <Grid item xs={6}  >
                            <Button 
                               onClick={registrarUsuarioNuevo}
                               variant="contained"
                               fullWidth
                               disabled={!isFormValid()}
                               color="secondary"
                                >
                                REGISTRATE
                            </Button>
                        </Grid> 
                    </Grid>
                
            </DialogContent>
        </Dialog>
    );
}
export default ModalContacto;