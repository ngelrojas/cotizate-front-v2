import API from '../api'

export class TagCampaing {
    private token: any
    private resp_company: any

    constructor(token: any) {
        this.token = token
    }

    getTagCampaing = async () => {
        this.resp_company = await API.get(`tag`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_company
    }
}
