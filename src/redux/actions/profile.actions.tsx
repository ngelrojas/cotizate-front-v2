import {
    SET_USER,
    SET_PROFILE,
    SET_ERRORS,
    LOADING_UI,
    LOADING_USER,
    CLEAR_ERRORS,
    SET_UNAUTHENTICATED
} from '../types'
import API from '../../api'

export const getPerfilData = (token: any) => (dispatch: any) => {
    dispatch({type: LOADING_USER})
    API.get(`/persoanl/profile`, {
        headers: {Authorization: `Bearer ${token}`}
    })
        .then(resp => {
            dispatch({
                type: SET_PROFILE,
                payload: resp.data.data
            })
            console.log(resp)
        })
        .catch(err => console.log(err))
}
