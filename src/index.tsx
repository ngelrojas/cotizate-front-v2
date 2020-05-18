import React from 'react'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/stores'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)
