import API from '../api-img'


export class UploadFiles {

    private resp: any
    
    uploadImg = async(file_upload:any) => {
        this.resp = await API.post(`upload-img`, file_upload, {
            headers: {'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'}
        })
        return this.resp
        
    }
}
