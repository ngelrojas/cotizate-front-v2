import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import API from '../../../api'
import GoogleLogin from './google-login'
import {Label, Btn, Form, SuccessInfo, Go, Accept, ErrorInfo} from './styles'

type FormData = {
    email: string
    password: string
}

const FormLogin: React.FC = () => {
    const [success, setSuccess] = useState('')
    const [errorinf, setErrorinf] = useState('')
    let history = useHistory()
    const {register, handleSubmit, errors, setValue} = useForm<FormData>({
        mode: 'onChange'
    })

    const clearFields = () => {
        setValue('email', '')
        setValue('password', '')
        setSuccess('Bienvenido a Cotizate.')
        setErrorinf('')
    }

    const onSubmit = handleSubmit(async ({email, password}) => {
        await API.post(`/user/token/`, {
            email: email,
            password: password
        })
            .then(resp => {
                clearFields()
                console.log(resp.data.token)
                history.push('/')
            })
            .catch(err => {
                console.error(err)
                setErrorinf('Usuario o contrasena incorrectos.')
            })
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
                                            value: 8,
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
                            <Row>
                                <Col xs={12}>
                                    <Row center="xs">
                                        <SuccessInfo>{success}</SuccessInfo>
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
export default FormLogin
