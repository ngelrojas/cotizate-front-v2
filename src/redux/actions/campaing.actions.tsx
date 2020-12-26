import {
    SET_CAMPAING,
    SET_ERRORS,
} from '../types/campaing.types'

import {CampaingBody} from '../../userCampaings'


let token = window.sessionStorage.getItem('token')

let CampHeader = new CampaingBody(token)

export const RetrieveCampaing = (campaing_id: number) => (dispatch: any) => {

    CampHeader.getRetrieveCBody(campaing_id)
        .then(resp =>{ 
                dispatch({
                    type: SET_CAMPAING,
                    payload: resp.data.data,
                 })
        }).catch(err =>{
                 dispatch({
                    type: SET_ERRORS,
                    errors: err 
                 })
        })

}
