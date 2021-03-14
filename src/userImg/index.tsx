import API from '../api'


export class UploadFiles {
    private token: any
    private resp: any

    constructor(token: any){
        this.token = token
    }
    
    uploadImg = async(data_send: any) => {
        this.resp = await API.post(`upload`, data_send, {
            headers: {
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
                 Authorization: `Bearer ${this.token}`}
        })
        return this.resp
        
    }

    getImg = async(name_img: string) => {
        this.resp = await API.get(`${name_img}`)
        return this.resp
    }
}
