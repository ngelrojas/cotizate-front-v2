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
    * get list all profiles about the
    * the current user loged
    */
   listProfilePersonal = async()=>{
       this.resp_profile = await API.get(`profile/personal`,{
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

    /* Retrieve current company
     * profile_id: pf_id = ID current profile user 
     * profile_ca: pc_id = ID current profile company user 
    **/
    retrieveCompany = async(pf_id:any, pc_id:any) => {
        this.resp_company = await API.get(`profile/company/${pf_id}/${pc_id}`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_company
    }

    /* Update profile-company
     * profile_id: pf_id = ID current profile user 
     * profile_ca: pc_id = ID current profile company user 
    **/
    updateCompany = async(data_update:any, pf_id:any, pc_id:any) => {
        this.resp_company = await API.put(`profile/company/${pf_id}/${pc_id}`, data_update, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_company
    }
} 
