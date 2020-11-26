import {
    GET_PROFILE,
    GET_CURRENT_PROFILE,
    LOADING_USER,
    SET_ERRORS
} from '../types'
import {PersonalProfile} from '../../userProfile'
import API from '../../api'

let token = window.sessionStorage.getItem('token')
let currentPersonal = new PersonalProfile(token)

/*export const getPerfilData = (token: any) => (dispatch: any) => {*/
    //dispatch({type: LOADING_USER})
    //API.get(`personal/profile/25`, {
        //headers: {Authorization: `Bearer ${token}`}
    //})
        //.then(resp => {
            //dispatch({
                //type: GET_PROFILE,
                //payload: resp.data.data
            //})
        //})
        //.catch(err => console.log(err))
/*}*/

export const LoadPersonalData = (current_user_id:number) =>(dispatch: any)=> {
    dispatch({type: LOADING_USER})
    currentPersonal.currentPersonalProfile(current_user_id)
            .then(resp => {
                console.info(resp.data.data)
                dispatch({
                    type: GET_CURRENT_PROFILE,
                    payload: resp.data.data
                })
            })
            .catch(err => {
                dispatch({
                    type: SET_ERRORS,
                    payload: err
                })
            })
}

/*export const LoadPersonalData = () =>(dispatch: any)=> {*/
    //dispatch({type: LOADING_USER})
    //API.get(`profile/personal/2`, {
        //headers: {Authorization: `Bearer ${token}`}
    //})
            //.then(resp => {
                //dispatch({
                    //type: GET_CURRENT_PROFILE,
                    //payload: resp.data.data
                //})
            //})
            //.catch(err => {
                //dispatch({
                    //type: SET_ERRORS,
                    //payload: err
                //})
            //})
/*}*/
