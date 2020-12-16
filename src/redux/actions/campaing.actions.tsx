import {
    SET_CAMPAING,
    SET_ERRORS,
    LOADING_CAMPAING,
} from '../types'

import {CampaingBody} from '../../userCampaings'


let token = window.sessionStorage.getItem('token')

let CampHeader = new CampaingBody(token)

export const RetrieveCampaing = (campaing_id: number) => (dispatch: any) => {
    dispatch({type: LOADING_CAMPAING})

    CampHeader.getRetrieveCBody(campaing_id)
        .then(resp =>{
                
                return  dispatch({
                    type: SET_CAMPAING,
                    payload: resp.data.data
                 })
        }).catch(err =>{
                 dispatch({
                    type: SET_ERRORS,
                    errors: err 
                 })
        })
}
