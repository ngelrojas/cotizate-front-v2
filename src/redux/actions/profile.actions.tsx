import {GET_PROFILE, LOADING_USER} from '../types'
import API from '../../api'

export const getPerfilData = (token: any) => (dispatch: any) => {
    dispatch({type: LOADING_USER})
    API.get(`personal/profile/25`, {
        headers: {Authorization: `Bearer ${token}`}
    })
        .then(resp => {
            dispatch({
                type: GET_PROFILE,
                payload: resp.data.data
            })
        })
        .catch(err => console.log(err))
}
