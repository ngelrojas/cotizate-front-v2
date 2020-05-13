import React from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import API from '../../../api'
import Loading from '../../../components/loading'

import {
    Content,
    Title,
    Label,
    Form,
    Input,
    FormSubTitle,
    WrapBtn,
    Btn,
    ErrorInfo,
    InfoSuccess,
    InfoError
} from './styles'

type profileType = {
    name: string
    last_name: string
    password: string
    email: string
    dni: string
    cellphone: string
    address: string
}

interface Iauth {
    authenticated: boolean
    currentUser: profileType
}

const Profile: React.FC<Iauth> = ({authenticated, currentUser}) => {
    const [msgSuccess, setMsgSuccess] = React.useState('')
    const [msgError, setMsgError] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    let token = window.sessionStorage.getItem('token')
    const {register, handleSubmit, errors} = useForm<profileType>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(
        async ({name, last_name, dni, cellphone, address}) => {
            await API.patch(
                '/user/me/',
                {
                    name: name,
                    last_name: last_name,
                    dni: dni,
                    cellphone: cellphone,
                    address: address
                },
                {
                    headers: {
                        Authorization: 'token ' + token
                    }
                }
            )
                .then(resp => {
                    setLoading(true)
                    if (resp.status === 200) {
                        setMsgSuccess('datos personales actualziados.')
                        setLoading(false)
                    }
                })
                .catch(err => {
                    setMsgError(
                        'no se guardo correctamente intentelo mas tarde.'
                    )
                })
        }
    )
    return (
        <Content>
            {authenticated ? (
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <Row center="xs">
                                <Col xs={6}>
                                    <Title>datos personales</Title>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Form onSubmit={onSubmit}>
                            <Label htmlFor="name">
                                <FormSubTitle>nombre</FormSubTitle>
                                <ErrorInfo>
                                    {errors.name && 'es obligatorio este dato.'}
                                </ErrorInfo>
                                <Input
                                    name="name"
                                    type="text"
                                    defaultValue={currentUser.name}
                                    ref={register({required: true})}
                                    placeholder="Nombre"
                                />
                            </Label>
                            <Label htmlFor="last_name">
                                <FormSubTitle>apellido</FormSubTitle>
                                <ErrorInfo>
                                    {errors.last_name &&
                                        'es obligatorio este dato.'}
                                </ErrorInfo>
                                <Input
                                    name="last_name"
                                    type="text"
                                    defaultValue={currentUser.last_name}
                                    ref={register({required: true})}
                                    placeholder="Nombre"
                                />
                            </Label>
                            <Label htmlFor="dni">
                                <FormSubTitle>carnet de identidad</FormSubTitle>
                                <ErrorInfo>
                                    {errors.dni && 'es obligatorio este dato.'}
                                </ErrorInfo>
                                <Input
                                    name="dni"
                                    type="text"
                                    defaultValue={currentUser.dni}
                                    ref={register({required: true})}
                                    placeholder="DNI"
                                />
                            </Label>
                            <Label htmlFor="cellphone">
                                <FormSubTitle>celular</FormSubTitle>
                                <ErrorInfo>
                                    {errors.cellphone &&
                                        'es obligatorio este dato.'}
                                </ErrorInfo>
                                <Input
                                    name="cellphone"
                                    type="text"
                                    defaultValue={currentUser.cellphone}
                                    ref={register({required: true})}
                                    placeholder="Numero de Celular"
                                />
                            </Label>
                            <Label htmlFor="address">
                                <FormSubTitle>direccion</FormSubTitle>
                                <Input
                                    name="address"
                                    type="text"
                                    defaultValue={currentUser.address}
                                    ref={register}
                                    placeholder="Direccion"
                                />
                            </Label>
                            <Label htmlFor="email">
                                <FormSubTitle>email</FormSubTitle>
                                <Input
                                    name="email"
                                    type="text"
                                    defaultValue={currentUser.email}
                                    ref={register({
                                        required: true,
                                        pattern: /\S+@\S+\.\S+/
                                    })}
                                    placeholder="Direccion"
                                />
                            </Label>
                            <WrapBtn>
                                <Btn type="submit">guardar</Btn>
                            </WrapBtn>
                            <WrapBtn>
                                {loading ? <Loading message="guardando" /> : ''}
                            </WrapBtn>
                            <InfoSuccess>{msgSuccess}</InfoSuccess>
                            <InfoError>{msgError}</InfoError>
                        </Form>
                    </Row>
                </Grid>
            ) : (
                <Grid>
                    <Row>
                        <Col>
                            <h1>no user here</h1>
                        </Col>
                    </Row>
                </Grid>
            )}
        </Content>
    )
}

const mapStateToProps = (state: any) => ({
    authenticated: state.user.authenticated,
    currentUser: state.user
})
export default connect(mapStateToProps)(Profile)
