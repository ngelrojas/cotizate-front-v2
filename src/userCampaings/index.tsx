import API from '../api'

export class Campaings {
    private token: any 
    private resp_campaing: any

    constructor(token: any){
        this.token = token
    }

    /*
     * list all campaings
    */
    listCampaings = async ()=>{
        this.resp_campaing = await API.get(`campaing`, {
            headers:{Authorization: `Bearer ${this.token}`}
        })
        return this.resp_campaing
    }

    /*
     * create campaings
    */
    createCampaing = async(data_send: any) => {
        this.resp_campaing = await API.post(`campaing`, data_send, {
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'content-type': 'application/x-www-form-urlencoded'
            }
        })
        return this.resp_campaing
    }

    /*
     * retrieve a campaing
     * with camaping ID
    */
    retrieveCamaping = async(data_id: number) =>{
        this.resp_campaing = await API.get(`campaing/${data_id}`, {
            headers: {Authorization: `Bearer ${this.token}`}
        }) 
        return this.resp_campaing
    }

    /*
     * update current camaping
    */
    updateCamaping = async(data_id: number, data_send: any) => {
        this.resp_campaing = await API.put(
            `campaing/${data_id}`,
            data_send,
            {headers: {Authorization: `Bearer ${this.token}`}}
        )
        return this.resp_campaing
    }

    /*
     * delete current camaping
    */
    deleteCamaping = async(data_id: number) => {
        this.resp_campaing = await API.put(`campaing/${data_id}`,
            {headers: {Authorization: `Bearer ${this.token}`}}
        )
        return this.resp_campaing
    }
}
