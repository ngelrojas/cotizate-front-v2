import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {Content, Title, SubTitle, SubTitleError} from './styles'
import {PersonalProfile} from '../../userProfile'

const ActivationAccount: React.FC = () => {
    const [Isactivate, SetIsactivate] = React.useState(false)
    let match = useRouteMatch('/activar-cuenta/:uid/:token')
    let token: string = ''
    let activateAccount = new PersonalProfile(token)

    React.useEffect(() => {
        let matchUrl: any = match
        let uid: string = matchUrl.params.uid
        let token: string = matchUrl.params.token
        activateAccount
            .activateUser(uid, token)
            .then(resp => {
                SetIsactivate(true)
            })
            .catch(err => {
                SetIsactivate(false)
            })
    }, [])

    return (
        <Content>
            <Grid>
                <Row>
                    <Col lg={12}>
                        <Row center="lg">
                            <Col lg={7}>
                                <Title>BIENVENIDO A COTIZATE</Title>
                                {Isactivate ? (
                                    <>
                                        <SubTitle>
                                            su cuenta a sido activada.
                                        </SubTitle>

                                        <SubTitle>
                                            por favor{' '}
                                            <Link to="/ingresar">ingrese</Link>{' '}
                                            y complete su perfil para poder
                                            crear proyectos.
                                        </SubTitle>
                                    </>
                                ) : (
                                    <SubTitleError>
                                        su cuenta no a sido activada, porfavor
                                        comuniquese con nuestra central de
                                        atendimiento.
                                    </SubTitleError>
                                )}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </Content>
    )
}

export default ActivationAccount
