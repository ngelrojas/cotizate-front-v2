import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Layout} from './layout/main'
import Header from './header'
import Footer from './footer'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import ExploreProject from './pages/explorer'
import ActivationAccount from './pages/activation-account'
import PageNotFound from './pages/404'

const App: React.FC = () => {
    return (
        <Layout>
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/registrarse" component={Register} />
                    <Route exact path="/ingresar" component={Login} />

                    <Route
                        exact
                        path="/explorar-proyectos"
                        component={ExploreProject}
                    />
                    <Route
                        exact
                        path="/activar-cuenta/:uid/:token"
                        component={ActivationAccount}
                    />
                    <Route component={PageNotFound} />
                </Switch>

                <Footer />
            </Router>
        </Layout>
    )
}

export default App
