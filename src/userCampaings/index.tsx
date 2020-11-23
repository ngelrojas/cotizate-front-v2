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
        this.resp_campaing = await API.post(`campaing-body`, data_send, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_campaing
    }

    /*
     * retrieve a campaing
     * with camaping ID
    */
    retrieveCampaing = async(data_id: number) =>{
        this.resp_campaing = await API.get(`campaing/${data_id}`, {
            headers: {Authorization: `Bearer ${this.token}`}
        }) 
        return this.resp_campaing
    }

    /*
     * update current camaping
    */
    updateCampaing = async(data_id: number, data_send: any) => {
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
    deleteCampaing = async(data_id: number) => {
        this.resp_campaing = await API.put(`campaing/${data_id}`,
            {headers: {Authorization: `Bearer ${this.token}`}}
        )
        return this.resp_campaing
    }
}

export class CampaingHeader {
    private token: any 
    private resp_campaing_header: any

    constructor(token: any){
        this.token = token
    }

    /*
     * create campaing header
    */
    createCampaingHeader = async(data_send: any) => {
        this.resp_campaing_header = await API.post(`campaing-header`, data_send, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_campaing_header
    }

    /*
       get last campaing for the current user
     */
    getLastCampaingHeader = async() => {
        this.resp_campaing_header = await API.get(`campaing-header-last`,{
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_campaing_header
    }
}

export class CampaingBody{
    private token: any 
    private resp_campaing_body: any

    constructor(token: any){
        this.token = token
    }

    getRetrieveCBody = async(camp_header_id:number) => {
        this.resp_campaing_body = await API.get(`campaing-body-last/${camp_header_id}`,{
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_campaing_body
    }
} 
