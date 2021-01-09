import {SET_PHASES, SET_ERRORS} from '../types/phases.types'

import {Phases} from '../../userPhases'

let token = window.sessionStorage.getItem('token')

let Phase = new Phases(token)

export const getPhase = (phaseId: number) => (dispatch: any) => {
    
    Phase.getPhases(phaseId)
        .then(resp => {
            dispatch({
                type: SET_PHASES,
                payload: resp.data.data
            })
        }).catch(err => {
            dispatch({
                type: SET_ERRORS,
                errors: err
            })
        })
}
