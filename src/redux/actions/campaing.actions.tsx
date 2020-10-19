import {
    SET_CAMPAING,
    SET_ERRORS,
    LOADING_UI,
    LOADING_CAMPAING,
    CLEAR_ERRORS,
} from '../types'

import {CampaingHeader} from '../../userCampaings'


let token = window.sessionStorage.getItem('token')

let CampHeader = new CampaingHeader(token)

export const CreateCampaingHeader = (campaingData: any) => (dispatch: any) => {
    dispatch({type: LOADING_CAMPAING})

    CampHeader.createCampaingHeader(campaingData)
        .then(resp =>{
                 dispatch({
                    type: SET_CAMPAING,
                    payload: resp.data.data
                 })
        }).catch(err =>{
                 dispatch({
                    type: SET_ERRORS,
                    payload: err 
                 })
        })
}
