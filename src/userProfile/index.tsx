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
    currentPersonalProfile = async () => {
        this.resp_profile = await API.get(`profile/personal/2`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_profile
    }

    updatePersonalProfile = async (dataUpdate: any) => {
        this.resp_profile = await API.put(`personal/profile`, dataUpdate, {
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
