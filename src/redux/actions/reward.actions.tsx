import {SET_REWARD, GET_REWARD, SET_ERRORS} from '../types/rewards.types'

import {Reward} from '../../userReward'

let token = window.sessionStorage.getItem('token')

let Rewards = new Reward(token)

/**
  retrieve list rewards
  - headerID 
*/
export const listRewards = (headerId: number) => (dispatch: any) => {
    
    Rewards.retrieveReward(headerId)
        .then(resp => {
            dispatch({
                type: SET_REWARD,
                payload: resp.data.data
            })
        }).catch(err => {
            dispatch({
                type: SET_ERRORS,
                errors: err
            })
        })
}

/**
get a reward
- rewardId
**/
export const getReward = (rewardId: number) => (dispatch: any) => {
    Rewards.getReward(rewardId)
        .then(resp => {
            console.info("INSIDE GET_REWARD")
            console.log(resp.data.data)
            dispatch({
                type: GET_REWARD,
                payload: resp.data.data
            })
        }).catch(err => {
            dispatch({
                type: SET_ERRORS,
                errors: err
            })
        })
}
