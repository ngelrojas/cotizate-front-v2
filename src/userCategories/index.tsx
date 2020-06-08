import API from '../api'

export class CategoriesCampaing {
    private token: any
    private resp_company: any

    constructor(token: any) {
        this.token = token
    }

    getCategoryCampaing = async () => {
        this.resp_company = await API.get(`category`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_company
    }
}
