import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

import thunk from 'redux-thunk'

import userReducer from '../reducers/user.reducers'
import uiReducer from '../reducers/ui.reducers'

const initialState = {}
const middleware = [thunk]

/*declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
    }
}*/

const reducer = combineReducers({
    user: userReducer,
    UI: uiReducer
})

const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware))
)

export default store
