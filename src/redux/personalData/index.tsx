import {loadPersonalData} from '../actions/profile.actions'
import store from '../stores'
import {GET_CURRENT_PROFILE} from '../types'

export const PersonalData = () => {
    store.dispatch({type: GET_CURRENT_PROFILE})
    store.dispatch({loadPersonalData})
    return loadPersonalData
}
