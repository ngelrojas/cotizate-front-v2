import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import API from '../../../api'
import GoogleRegister from '../forms/google-register'
import {Label, Btn, Form, SuccessInfo, Go, Accept} from './styles'

type FormData = {
    firstName: string
    lastName: string
    email: string
    password: string
    password_repeat: string
}

const FormRegister: React.FC = () => {
    const [success, setSuccess] = useState('')
    const {register, handleSubmit, errors, watch, setValue} = useForm<FormData>(
        {
            mode: 'onChange'
        }
    )

    const clearFields = () => {
        setValue('firstName', '')
        setValue('lastName', '')
        setValue('email', '')
        setValue('password', '')
        setValue('password_repeat', '')
        setSuccess('enviamos un email para su confirmacion.')
    }

    const onSubmit = handleSubmit(
        async ({firstName, lastName, email, password}) => {
            await API.post(`user`, {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            })
                .then(resp => {
                    clearFields()
                })
                .catch(err => {
                    console.error(err)
                })
        }
    )
    return (
        <Grid>
            <Row>
                <Col xs={12}>
                    <Row center="xs">
                        <Form onSubmit={onSubmit}>
                            <Label>
                                <input
                                    name="firstName"
                                    ref={register({required: true})}
                                    placeholder="NOMBRE(S)"
                                />
                                <span>
                                    {errors.firstName &&
                                        'ingrese su nombre porfavor.'}
                                </span>
                            </Label>
                            <Label>
                                <input
                                    name="lastName"
                                    ref={register({required: true})}
                                    placeholder="APELLIDOS"
                                />
                                <span>
                                    {errors.lastName &&
                                        'ingrese su apellido porfavor.'}
                                </span>
                            </Label>
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
                            <Label>
                                <input
                                    name="password_repeat"
                                    type="password"
                                    ref={register({
                                        required: true,
                                        validate: value =>
                                            value === watch('password')
                                    })}
                                    placeholder="REPETIR CONTRASENA"
                                />
                                <span>
                                    {errors.password_repeat &&
                                        'las contrasenas no coinciden.'}
                                </span>
                            </Label>
                            <Row>
                                <Col xs={12}>
                                    <Row center="xs">
                                        <Btn type="submit">REGISTRARSE</Btn>
                                    </Row>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={12}>
                                    <Row center="xs">
                                        <GoogleRegister />
                                    </Row>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={12}>
                                    <Row center="xs">
                                        <SuccessInfo>{success}</SuccessInfo>
                                    </Row>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={12} sm={6} md={6}>
                                    <Row start="xs">
                                        <Go to="#">Terminos y condiciones</Go>
                                    </Row>
                                </Col>
                                <Col xs={12} sm={6} md={6}>
                                    <Row end="xs">
                                        <Accept>
                                            Al momento de registrase accepta los
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

export default FormRegister
