import React from 'react';
import {Snackbar, IconButton, SnackbarContent, Typography} from '@material-ui/core';
import { amber, blue,grey} from '@material-ui/core/colors';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import * as Actions from "../../redux/actions/mensajeActions"; 
import {makeStyles} from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import InfoIcon from '@material-ui/icons/Info';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import WarningIcon from '@material-ui/icons/Warning';
const useStyles = makeStyles(theme => ({
    root   : {},
    success: {
        // backgroundColor: green[600],
        backgroundColor: "#d4edda",
        color          : '#155724'
    },
    error  : {
      backgroundColor: grey['900'],// theme.palette.error.dark,
        color          : '#FFFFFF' //theme.palette.getContrastText(theme.palette.error.dark)
    },
    info   : {
        backgroundColor: blue[600],
        color          : '#FFFFFF'
    },
    warning: {
        backgroundColor: amber[600],
        color          : '#FFFFFF'
    }
}));


const Mensaje: React.FC = () => {
    const dispatch = useDispatch();
    const {
        showing,options
      } = useSelector((stateSelector: any) => {
        return stateSelector.message;
      });

    const classes = useStyles();

    return (
        <Snackbar
            {...options}
            open={showing}
            onClose={() => dispatch(Actions.hideMessage())}
            classes={{
                root: classes.root
            }}
            ContentProps={{
                variant        : 'body2',
                headlineMapping: {
                    body1: 'div',
                    body2: 'div'
                }
            }}
        >
            <SnackbarContent
              // className={classes[options.variant]}
                message={
                    <div className="flex items-center">
                      { options.message === 'success'&& <CheckCircleOutlineIcon />}
                      { options.message === 'warning'&& <WarningIcon />}
                      { options.message === 'error'&& <ErrorOutlineIcon />}
                      { options.message === 'info'&& <InfoIcon />}                      
                      <Typography className="mx-8">{options.message}</Typography>
                    </div>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => dispatch(Actions.hideMessage())}
                    >
                        <CloseIcon />
                    </IconButton>
                ]}
            />
        </Snackbar>
    );
}

export default Mensaje;