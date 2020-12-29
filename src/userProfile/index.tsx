import API from '../api'

export class PersonalProfile {
    /**
     * get personal profile current user
     */
    private token: any
    private resp_profile: any

    /*
     * constructor
     */
    constructor(token: any) {
        this.token = token
    }

    /*
    * create Personal Profile
    **/
    createPP = async (dataPP: any) => {
        this.resp_profile = await API.post(`profile/personal`,dataPP, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_profile
    } 

    /*
     * TODO: this methos is for DELETE 
     method get personal profile
     */
    getPersonalProfile = async () => {
        this.resp_profile = await API.get(`personal/profile`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_profile
    }

    /*
     * method get current personal profile
     */
    currentPersonalProfile = async (current_user_id:number) => {
        this.resp_profile = await API.get(`profile/personal/${current_user_id}`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_profile
    }
    /*
     * TODO: this method is to delete
    */
    updatePersonalProfile = async (dataUpdate: any) => {
        this.resp_profile = await API.put(`personal/profile`, dataUpdate, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_profile
    }
    
    /*
     * update personal profile
     * currentUser = profile ID
    */

    updateProfilePersonal = async (dataUpdate: any, currentUser: number) => {
        this.resp_profile = await API.put(`profile/personal/${currentUser}`, dataUpdate, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_profile
    }

    /*
     * method activate account
     * */
    activateUser = async (uid: any, token: any) => {
        this.resp_profile = await API.put(`activate/${uid}/${token}`)
        return this.resp_profile
    }
}


export class CompanyProfile {

    private token: any
    private resp_company: any

    constructor(token:any){
        this.token = token
    }

    retrieveCompany = async(current_user:any, token: any) => {
        this.resp_company = await API.get(`profile/company/${current_user}`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_company
    }
} 
