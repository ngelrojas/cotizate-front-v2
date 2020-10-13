import {
    SET_USER,
    SET_ERRORS,
    LOADING_UI,
    LOADING_USER,
    CLEAR_ERRORS,
    SET_UNAUTHENTICATED
} from '../types'
import API from '../../api'
import {PANEL_HOME} from '../panels'

export const loginUser = (userData: any, history: any) => (dispatch: any) => {
    dispatch({type: LOADING_UI})
    API.post('auth', userData)
        .then(resp => {
            const token = `Bearer ${resp.data.token}`
            window.sessionStorage.setItem('token', resp.data.token)
            dispatch(getUserData(token))
            dispatch({type: CLEAR_ERRORS})
            // history.push('/dashboard')
            window.location.href = PANEL_HOME
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err
            })
        })
}

export const getUserData = (token: any) => (dispatch: any) => {
    dispatch({type: LOADING_USER})
    API.get(`user/25`, {
        headers: {Authorization: `Bearer ${token}`}
    })
        .then(resp => {
            dispatch({
                type: SET_USER,
                payload: resp.data.data
            })
        })
        .catch(err => {
            console.log(err)
        })
}

export const logoutUser = () => (dispatch: any) => {
    window.sessionStorage.removeItem('token')
    // delete API.defaults.headers.common['Authorization']
    dispatch({
        type: SET_UNAUTHENTICATED,
        payload: null
    })
}

export const UpdateUserData = (updateData: any, token: any) => (
    dispatch: any
) => {
    dispatch({type: LOADING_USER})
    API.put(
        `user/25`,
        {updateData},
        {
            headers: {Authorization: `Bearer ${token}`}
        }
    )
        .then(resp => {
            console.info(resp)
        })
        .catch(err => {
            console.error(err)
        })
}
