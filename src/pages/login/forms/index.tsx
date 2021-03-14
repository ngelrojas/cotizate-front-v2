import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import GoogleLogin from './google-login'
import Loading from '../../../components/loading'
import {Label, Btn, Form, Go, Accept, ErrorInfo, ForgotPwd, Registerlink} from './styles'
import {loginUser} from '../../../redux/actions/user.actions'

type FormData = {
    email: string
    password: string
}

const FormLogin: React.FC = (props: any) => {
    const [errorinf, setErrorinf] = useState('')
    const [loading, setLoading] = useState(false)
    let history = useHistory()
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    useEffect(() => {
        if (props.UI.errors) {
            setErrorinf('Usuario o la contrasena no son correctos.')
        }
        setLoading(false)
    }, [props.UI.errors])

    const onSubmit = handleSubmit(async ({email, password}) => {
        const userData = {
            email: email,
            password: password
        }
        props.loginUser(userData, history)
    })
    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    <Row center="xs">
                        <Form onSubmit={onSubmit}>
                            <Label>
                                <input
                                    name="email"
                                    ref={register({
                                        required: true,
                                        pattern: /\S+@\S+\.\S+/
                                    })}
                                    placeholder="EMAIL"
                                />
                                <span>
                                    {errors.email &&
                                        'debe registrar un email valido.'}
                                </span>
                            </Label>
                            <Label>
                                <input
                                    name="password"
                                    type="password"
                                    ref={register({
                                        required: true,
                                        minLength: {
                                            value: 6,
                                            message:
                                                'su contrasena debe tener por lo menos 8 caracteres'
                                        }
                                    })}
                                    placeholder="CONTRASENA"
                                />
                                <span>
                                    {errors.password &&
                                        'debe introducir una contrasena.'}
                                </span>
                            </Label>
                            <Row>
                                <Col xs={12}>
                                    <Row center="xs">
                                        <Btn type="submit">INGRESAR</Btn>
                                    </Row>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={12}>
                                    <Row center="xs">
                                        <GoogleLogin />
                                    </Row>
                                </Col>
                            </Row>
                            <br />
                            {loading ? (
                                <Row>
                                    <Col xs={12}>
                                        <Row center="xs">
                                            <Loading message="ingresando" />
                                        </Row>
                                    </Col>
                                </Row>
                            ) : (
                                ''
                            )}

                            <Row>
                                <Col xs={6}>
                                    <Row center="xs">
                                        <ForgotPwd to="/recuperar-contrasena">
                                            olivide mi constrasena
                                        </ForgotPwd>
                                    </Row>
                                </Col>
                                <Col xs={6}>
                                    <Row center="xs">
                                        <Registerlink to="/registrarse">
                                           registrarse 
                                        </Registerlink>
                                    </Row>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={12}>
                                    <Row center="xs">
                                        <ErrorInfo>{errorinf}</ErrorInfo>
                                    </Row>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={12} sm={6} md={6}>
                                    <Row start="sm">
                                        <Go to="#">Terminos y condiciones</Go>
                                    </Row>
                                </Col>
                                <Col xs={12} sm={6} md={6}>
                                    <Row end="sm">
                                        <Accept>
                                            Al momento de ingresar accepta los
                                            terminos y condiciones de cotizate.
                                        </Accept>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Grid>
    )
}

const mapStateToProps = (state: any) => ({
    user: state.user,
    UI: state.UI
})

const mapActionToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionToProps)(FormLogin)
