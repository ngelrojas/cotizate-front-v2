import {
    SET_PROFILE,
    SET_ERRORS
} from '../types/profile.types'
import {PersonalProfile} from '../../userProfile'

let token = window.sessionStorage.getItem('token')
let profilePersonal = new PersonalProfile(token)

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

export const loadPersonalData = (current_profile_id:number) =>(dispatch: any)=> {

    profilePersonal.currentPersonalProfile(current_profile_id)
            .then(resp => {
                console.log("SEND TO REDUCERS")
                console.log(resp.data.data)
                dispatch({
                    type: SET_PROFILE,
                    payload: resp.data.data
                })
            })
            .catch(err => {
                dispatch({
                    type: SET_ERRORS,
                    errors: err
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
