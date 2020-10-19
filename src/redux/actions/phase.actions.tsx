import {GET_PROFILE, LOADING_USER} from '../types'
import API from '../../api'

export const getPhaseData = (token: any, header_id: number) => (dispatch: any) => {
    dispatch({type: LOADING_USER})
    API.get(`phase/${header_id}`, {
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
