import API from '../api'

export class Country {
    private token: any 
    private resp_country: any

    constructor(token: any){
        this.token = token
    }

    /*
     * list all countries 
    */
    listCountry = async ()=>{
        this.resp_country = await API.get(`country`, {
            headers:{Authorization: `Bearer ${this.token}`}
        })
        return this.resp_country
    }

    /*
     * retrieve a country 
     * with country ID
    */
    retrieveCountry = async(data_id: number) =>{
        this.resp_country = await API.get(`country/${data_id}`, {
            headers: {Authorization: `Bearer ${this.token}`}
        }) 
        return this.resp_country
    }

}


export class City {
    private token: any
    private resp_city: any

    constructor(token: any){
        this.token = token
    }

    /*
       list all cities
     */
    listCities = async ()=>{
        this.resp_city = await API.get(`city`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_city
    }
}
