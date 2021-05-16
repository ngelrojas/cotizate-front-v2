import React, {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Layout} from './layout/main'
import Header from './header'
import Footer from './footer'
import Home from './pages/home'
import DetalleProyecto from './pages/detalleProyecto'
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
import UpdateCampaing from './pages/panel-user/panel-campaings/update-campaing'
import PanelCreated from './pages/panel-user/panel-created'
import PanelRevision from './pages/panel-user/panel-revision'
import PanelAproved from './pages/panel-user/panel-aproved'
import PanelPublic from './pages/panel-user/panel-public'
import PersonalUser from './pages/panel-user/personal-user'
import PersonalUserProfile from './pages/panel-user/personal-user-profile'
import PageCreating from './pages/creating'
import Crowdfunding from './pages/crowdfunding'
import Category from './pages/categorias'
import Cotizate from './pages/cotizate'
import PageNotFound from './pages/404'
import {CheckAuthentication} from './redux/auth'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const App: React.FC = () => {
    useEffect(() => {
        CheckAuthentication() 
    }, [])
    return (
        <Layout>
            <Router>
                <ReactNotification />
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
                        path="/panel-de-usuario/:campania"
                        component={CreateCampaing}
                    />
                    <Route
                        exact
                        path="/panel-de-usuario/actualizar-proyecto/:id"
                        component={UpdateCampaing}
                    />
                    <Route
                        exact
                        path="/dashboard-de-usuario/creados"
                        component={PanelCreated}
                    />
                    <Route
                        exact
                        path="/dashboard-de-usuario/en-revision"
                        component={PanelRevision}
                    />
                    <Route
                        exact
                        path="/dashboard-de-usuario/aprovados"
                        component={PanelAproved}
                    />
                    <Route
                        exact
                        path="/dashboard-de-usuario/publicados"
                        component={PanelPublic}
                    />
                    <Route
                        exact
                        path="/dashboard-de-usuario/datos-de-registro"
                        component={PersonalUser}
                    />
                    <Route
                        exact
                        path="/dashboard-de-usuario/perfiles-de-usuario"
                        component={PersonalUserProfile} 
                    />
                    <Route
                        exact
                        path="/crear-proyectos"
                        component={PageCreating}
                    />
                    <Route
                        exact
                        path="/crowfounding"
                        component={Crowdfunding}
                    />
                     <Route
                        exact
                        path="/categoria/:name"
                        component={Category}
                    />
                     <Route
                        exact
                        path="/detalle-del-proyecto/:slug"
                        component={DetalleProyecto}
                    />
                     <Route
                        exact
                        path="/cotizate"
                        component={Cotizate}
                    />
                    <Route component={PageNotFound} />
                </Switch>

                <Footer />
            </Router>
        </Layout>
    )
}

export default App
