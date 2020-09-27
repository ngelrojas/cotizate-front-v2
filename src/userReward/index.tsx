import API from '../api'

export class Reward {
    private token: any
    private resp_reward: any

    constructor(token: any){
        this.token = token
    }

    /*
     * retrieve reward
     */
    retrieveReward = async(campaing_id:number) => {
        this.resp_reward = await API.get(`reward/${campaing_id}`,{
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_reward
    }

    /*
     * retrieve reward
     */
    createReward = async(data_send: any) => {
        this.resp_reward = await API.post(`reward`, data_send, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_reward
    }

    /*
     * update reward
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
