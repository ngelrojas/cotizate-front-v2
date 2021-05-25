import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

import thunk from 'redux-thunk'

import userReducer from '../reducers/user.reducers'
import campaingReducer from '../reducers/campaing.reducers'
import uiReducer from '../reducers/ui.reducers'
import phaseReducer from '../reducers/phase.reducers'
import homeReducer from '../reducers/home.reducers'
import profileReducer from '../reducers/profile.reducers' 
import profilecaReducer from '../reducers/profileca.reducers'
import NextBackReducer from '../reducers/next_back.reducers'
import categoriaReducer from '../reducers/categoriaReducers'
import detalleProyecto from '../reducers/detalleProyectoReducers'
import rewardReducer from '../reducers/reward.reducers'

const initialState = {}
const middleware = [thunk]

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
    }
}

const reducer = combineReducers({
    user: userReducer,
    UI: uiReducer,
    profile: profileReducer,
    profileca: profilecaReducer,
    campaing: campaingReducer,
    phase: phaseReducer,
    home:homeReducer,
    nextForm: NextBackReducer,
    categorias:categoriaReducer,
    detalleProyecto:detalleProyecto,
    reward: rewardReducer
})

const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
         window.__REDUX_DEVTOOLS_EXTENSION__ &&
         (window.__REDUX_DEVTOOLS_EXTENSION__() as any)

    )
)

export default store
