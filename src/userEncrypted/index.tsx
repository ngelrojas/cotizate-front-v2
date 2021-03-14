import API from '../api-encrypt'

export class Encrypted{
    private resp: any

    EncryptData = async (data_send: any) => {
        this.resp = await API.post(`encrypted`, data_send)
        return this.resp
    }
}