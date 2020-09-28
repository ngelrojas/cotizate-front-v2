import {logoutUser, getUserData} from '../actions/user.actions'
import store from '../stores'
import {SET_AUTHENTICATED} from '../types'

export const CheckAuthentication = () => {
    const authToken = window.sessionStorage.getItem('token')
    if (authToken) {
        store.dispatch({type: SET_AUTHENTICATED})
        store.dispatch(getUserData(authToken))
        return authToken
    } else {
        store.dispatch(logoutUser())
    }
}
