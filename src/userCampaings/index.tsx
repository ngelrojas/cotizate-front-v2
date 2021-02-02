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
            headers: {
                Authorization: `Bearer ${this.token}`,
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
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
     * data_id: campaing header ID
     * data_send: campaing data form description
    */
    updateCampaing = async(data_id: number, data_send: any) => {
        this.resp_campaing = await API.put(
            `campaing-body/${data_id}`,
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

    retrieveCampaingHeader = async(data_id: any) => {
        this.resp_campaing_header = await API.get(`campaing-header/${data_id}`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_campaing_header
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

    /*
     * update campaing header
     * data_send: data to updated
     * camhId: campaing header ID
    */
    updateCampaingHeader = async(data_send: any, camphId:number) => {
        this.resp_campaing_header = await API.put(`campaing-header/${camphId}`, data_send, {
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

    listCampaingBody = async(status:number) => {
        this.resp_campaing_body = await API.get(`campaing-private/${status}`, {
           headers: {Authorization: `Bearer ${this.token}`} 
        })
        return this.resp_campaing_body
    }

    getRetrieveCBody = async(camp_header_id:number) => {
        this.resp_campaing_body = await API.get(`campaing-body-last/${camp_header_id}`,{
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_campaing_body
    }
} 
