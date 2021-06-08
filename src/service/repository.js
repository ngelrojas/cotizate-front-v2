import { apiService } from "./service";
import * as Actions from "../redux/actions/mensajeActions";

import {
  loadingRequest,
  loadingEndRequest,
} from "../redux/actions/loading.action";

const _hanldeThen = (res, dispatch) => {
  dispatch(loadingEndRequest());
  const result = res.data;

  return Promise.resolve(result);
    // if (result && result.status === 0) {
    //   return Promise.resolve(result);
    // } 
    // dispatch(
    //   Actions.showMessage({ message: result.mensaje, variant: "error" })
    // );
  

};

const _hanldeCatch = (error, dispatch) => {
  dispatch(loadingEndRequest());
  console.log(error);
  if (error.response) {
    const { status, data, config } = error.response;
    console.log(status, data, config);

    if (error.code === "ECONNABORTED") {
      
      dispatch(
        Actions.showMessage({ message: "Tiempo Agotado", variant: "error" })
      );
      
    } else if (status === 404) {
      
      dispatch(
        Actions.showMessage({
          message: "Error Pagina no encontrada",
          variant: "error",
        })
      );
    } else if (!error.response) {

      dispatch(
        Actions.showMessage({
          message: "Verifique su conexion a internet",
          variant: "error",
        })
      );
    } else {
      dispatch(
        Actions.showMessage({
          message: "Intente nuevamente por favor",
          variant: "error",
        })
      );
    }
  } else {
    dispatch(
      Actions.showMessage({
        message: "Intente nuevamente por favor",
        variant: "error",
      })
    );
  }
  return Promise.reject(error);
};

export const requestGet = (url, data, dispatch) => {  
  dispatch(loadingRequest());
  const token = window.sessionStorage.getItem('token');
  const headers = { ...data, headers: { ...data, token: token } , data:{...data}};
  return apiService
    .get(url, headers)
    .then((response) => {
      return _hanldeThen(response, dispatch);
    })
    .catch((error) => {
      return _hanldeCatch(error, dispatch);
    });
};

export const requestPost = (url, data, dispatch) => {
  dispatch(loadingRequest());
  const token = window.sessionStorage.getItem('token');
  const config = { headers: { "Content-Type": "application/json","token":token } };
  return apiService
    .post(url, data, config)
    .then((response) => {
      return _hanldeThen(response, dispatch);
    })
    .catch((error) => {
      return _hanldeCatch(error, dispatch);
    });
};
