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
     * method get personal profile
     */
    getPersonalProfile = async () => {
        this.resp_profile = await API.get(`personal/profile/25`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_profile
    }

    updatePersonalProfile = async (dataUpdate: any) => {
        this.resp_profile = await API.put(`personal/profile/25`, dataUpdate, {
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