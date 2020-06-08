import React, {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Layout} from './layout/main'
import Header from './header'
import Footer from './footer'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import ExploreProject from './pages/explorer'
import ActivationAccount from './pages/activation-account'
import RecoveryPassword from './pages/recovery-password'
import ConfirmPassword from './pages/confirm-password'
import Confirmation from './pages/confirmation'
import PanelUser from './pages/panel-user'
import PanelCampaing from './pages/panel-user/panel-campaings'
import CreateCampaing from './pages/panel-user/panel-campaings/create-campaing'
import PageNotFound from './pages/404'
import {CheckAuthentication} from './redux/auth'

const App: React.FC = () => {
    useEffect(() => {
        CheckAuthentication()
    }, [])
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
                    <Route
                        exact
                        path="/confirmar-contrasena/:uid/:token"
                        component={ConfirmPassword}
                    />
                    <Route
                        exact
                        path="/recuperar-contrasena"
                        component={RecoveryPassword}
                    />
                    <Route
                        exact
                        path="/confirmacion"
                        component={Confirmation}
                    />
                    <Route
                        exact
                        path="/panel-de-usuario"
                        component={PanelUser}
                    />
                    <Route
                        exact
                        path="/panel-de-usuario/proyectos"
                        component={PanelCampaing}
                    />
                    <Route
                        exact
                        path="/panel-de-usuario/crear-campania"
                        component={CreateCampaing}
                    />
                    <Route component={PageNotFound} />
                </Switch>

                <Footer />
            </Router>
        </Layout>
    )
}

export default App
