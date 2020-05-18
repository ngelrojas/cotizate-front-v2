import {getPerfilData} from '../actions/profile.actions'
import store from '../stores'

export const GetProfile = () => {
    const authToken = window.sessionStorage.getItem('token')
    if (authToken) {
        store.dispatch(getPerfilData(authToken))
    }
}
