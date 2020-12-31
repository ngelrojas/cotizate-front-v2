import {
    SET_PROFILECA,
    SET_ERRORS,
} from '../types/profileca.types'

import {CompanyProfile} from '../../userProfile'

let token = window.sessionStorage.getItem('token')

let companyProfile = new CompanyProfile(token)

export const RetrieveCompany = (pf_id: number, pc_id:number) => (dispatch: any) => {

    companyProfile.retrieveCompany(pf_id, pc_id)
        .then(resp =>{ 
                console.info("IN ACTIONS PROFILE CA")
                console.info(resp.data.data)
                dispatch({
                    type: SET_PROFILECA,
                    payload: resp.data.data,
                 })
        }).catch(err =>{
                 dispatch({
                    type: SET_ERRORS,
                    errors: err 
                 })
        })

}
