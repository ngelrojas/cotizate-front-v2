import API from '../api'

export class User {

    private token: any
    private resp_user: any

    constructor(token: any){
        this.token = token
    }

    /*
     * update current user data
    */

    updateUser = async (dataUser: any, currentUser:number) => {
        this.resp_user = await API.put(`user/${currentUser}`, dataUser,{
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_user
    }
}
