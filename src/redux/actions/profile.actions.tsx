import {GET_PROFILE, GET_CURRENT_PROFILE, LOADING_USER} from '../types'
import {PersonalProfile} from '../../userProfile'
import API from '../../api'

let token = window.sessionStorage.getItem('token')
let currentPersonal = new PersonalProfile(token)

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

export const LoadPersonalData = (currentUser:number)=>(dispatch: any)=> {
        currentPersonal.currentPersonalProfile(currentUser)
            .then(resp=>{
                dispatch({
                    type: GET_CURRENT_PROFILE,
                    payload: resp.data.data
                })
            })
            .catch(err => console.info(err))
    }
