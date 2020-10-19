import API from '../api'

export class Cities {
    private token: any
    private resp_cities: any

    constructor(token: any){
        this.token = token
    }

    /*
     * list cities 
    */
    listCities = async ()=>{
        this.resp_cities = await API.get(`city`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_cities
    }
}
