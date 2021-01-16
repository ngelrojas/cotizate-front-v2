import API from '../api'

export class Reward {
    private token: any
    private resp_reward: any

    constructor(token: any){
        this.token = token
    }

    /*
     * retrieve list rewards related
     * - headerId
     */
    retrieveReward = async(headerId:number) => {
        this.resp_reward = await API.get(`reward/${headerId}`,{
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_reward
    }

    /*
     * get reward
     * - headerId
     * - rewardId
     */
    getReward = async(rewardId: number) => {
        this.resp_reward = await API.get(`rewardr/${rewardId}`,{
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_reward
    }
    /*
     * create reward
     */
    createReward = async(data_send: any) => {
        this.resp_reward = await API.post(`reward`, data_send, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_reward
    }

    /*
     * update reward
     * reward_id = reward id
     * data_send = data to update
     */
    updateReward = async(reward_id:number, data_send: any) => {
        this.resp_reward = await API.put(`reward/${reward_id}`, data_send, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_reward
    }

    /*
     * delete reward
     */
    deleteReward = async(campaing_id:number) => {
        this.resp_reward = await API.delete(`reward/${campaing_id}`,{
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_reward
    }
}
