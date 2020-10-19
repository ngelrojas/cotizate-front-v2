import API from '../api'

export class Phases {
    private token: any
    private resp_phase: any

    constructor(token: any){
        this.token = token
    }

    /*
     * list phases
    */
    listPhases = async (header: number)=>{
        this.resp_phase = await API.get(`phases/${header}`, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_phase
    }

    /*
     * create phases
     */

    createPhase = async(data_send: any) => {
        this.resp_phase = await API.post('phase', data_send, {
            headers: {Authorization: `Bearer ${this.token}`}
        })
        return this.resp_phase
    }
}
