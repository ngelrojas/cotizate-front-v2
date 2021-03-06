import API from '../api'

export class CompanyProfile {
    private token: any
    private resp_company: any

    constructor(token: any) {
        this.token = token
    }

    getCompanyProfile = async () => {
        this.resp_company = await API.get(`company/profile`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_company
    }

    /* TODO: this method is to delete
     * create company to current user
     */
    createCompanyProfile = async (data_send: any) => {
        this.resp_company = await API.post(`company/profile`, data_send, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_company
    }

    /*
     * create company profile to current user
     */
    createCP = async (data_send: any) => {
        this.resp_company = await API.post(`profile/company`, data_send, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_company
    }
    /*
     * get current company profile
     * */
    retrieveCompanyProfile = async (data_id: number) => {
        this.resp_company = await API.get(`company/profile/${data_id}`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_company
    }

    /*
     * update current company profile
     * */
    updateCompanyProfile = async (data_id: number, data_send: any) => {
        this.resp_company = await API.put(
            `company/profile/${data_id}`,
            data_send,
            {headers: {Authorization: `Bearer ${this.token}`}}
        )
        return this.resp_company
    }

    /*
     * delete current company profile
     * */
    deleteCompanyProfile = async (data_id: number) => {
        this.resp_company = await API.delete(`company/profile/${data_id}`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_company
    }
}
