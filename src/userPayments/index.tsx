import API from '../api'

export class Payment{
    private resp: any

    /**
     * create method payment 
    **/
    CreatePayment = async(data_send: any, token:any) => {
        this.resp = await API.post(`payment`, data_send, {
            headers:{Authorization: `Bearer ${token}`}
        })
        return this.resp
    }

    /**
     * method called CALLBACK
     * this method recived a response from PAGO FASIL
     * @param data_send 
     * @returns json
     */
    RecivedPayment = async(data_send: any) => {
        this.resp = await API.put(`payment-recived`, data_send)
        return this.resp
    }
}