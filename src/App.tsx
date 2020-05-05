import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Layout} from './layout/main'
import Header from './header'
import Footer from './footer'
import Home from './pages/home'

const App: React.FC = () => {
    return (
        <Layout>
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>

                <Footer />
            </Router>
        </Layout>
    )
}

export default App
