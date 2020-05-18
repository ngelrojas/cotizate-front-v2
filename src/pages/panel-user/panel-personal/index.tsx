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
    address: string
    dni: string
    country: string
    city: string
    cellphone: string
    current_position: string
    current_city: string
    head_line: string
    birthdate: string
    age: number
}

interface Iauth {
    authenticated: boolean
    currentUser: profileType
}

const ProfilePersonal: React.FC<Iauth> = ({authenticated, currentUser}) => {
    const [msgSuccess, setMsgSuccess] = React.useState('')
    const [msgError, setMsgError] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    let token = window.sessionStorage.getItem('token')
    const {register, handleSubmit, errors} = useForm<profileType>({
        mode: 'onChange'
    })
    console.log(currentUser)
    const onSubmit = handleSubmit(
        async ({
            address,
            dni,
            country,
            city,
            cellphone,
            current_position,
            current_city,
            head_line,
            birthdate,
            age
        }) => {
            console.log('here in submit personal profile')
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
                                    <Title>Perfil personal</Title>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Form onSubmit={onSubmit}>
                            <Label htmlFor="address">
                                <FormSubTitle>Direccion</FormSubTitle>
                                <ErrorInfo>
                                    {errors.address &&
                                        'es obligatorio este dato.'}
                                </ErrorInfo>
                                <Input
                                    name="address"
                                    type="text"
                                    defaultValue={currentUser.address}
                                    ref={register({required: true})}
                                    placeholder="DIRECCION"
                                />
                            </Label>
                            <Label htmlFor="dni">
                                <FormSubTitle>cedula de identidad</FormSubTitle>
                                <ErrorInfo>
                                    {errors.dni && 'es obligatorio este dato.'}
                                </ErrorInfo>
                                <Input
                                    name="dni"
                                    type="text"
                                    defaultValue={currentUser.dni}
                                    ref={register({required: true})}
                                    placeholder="CEDULA DE IDENTIDAD"
                                />
                            </Label>
                            <Label htmlFor="country">
                                <FormSubTitle>pais</FormSubTitle>
                                <Input
                                    name="country"
                                    type="text"
                                    defaultValue={currentUser.country}
                                    ref={register({
                                        required: true
                                    })}
                                    placeholder="PAIS"
                                />
                            </Label>
                            <Label htmlFor="city">
                                <FormSubTitle>ciudad</FormSubTitle>
                                <Input
                                    name="city"
                                    type="text"
                                    defaultValue={currentUser.city}
                                    ref={register({
                                        required: true
                                    })}
                                    placeholder="CIUDAD"
                                />
                            </Label>
                            <Label htmlFor="cellphone">
                                <FormSubTitle>Celular</FormSubTitle>
                                <Input
                                    name="cellphone"
                                    type="text"
                                    defaultValue={currentUser.cellphone}
                                    ref={register({
                                        required: true
                                    })}
                                    placeholder="CELULAR"
                                />
                            </Label>
                            <Label htmlFor="current_position">
                                <FormSubTitle>pocision actual</FormSubTitle>
                                <Input
                                    name="current_position"
                                    type="text"
                                    defaultValue={currentUser.current_position}
                                    ref={register({
                                        required: true
                                    })}
                                    placeholder="POCISION ACTUAL"
                                />
                            </Label>
                            <Label htmlFor="current_city">
                                <FormSubTitle>ciudad actual</FormSubTitle>
                                <Input
                                    name="current_city"
                                    type="text"
                                    defaultValue={currentUser.current_city}
                                    ref={register({
                                        required: true
                                    })}
                                    placeholder="CIUDAD ACTUAL"
                                />
                            </Label>
                            <Label htmlFor="head_line">
                                <FormSubTitle>profesion</FormSubTitle>
                                <Input
                                    name="head_line"
                                    type="text"
                                    defaultValue={currentUser.head_line}
                                    ref={register({
                                        required: true
                                    })}
                                    placeholder="PROFESION"
                                />
                            </Label>
                            <Label htmlFor="birthdate">
                                <FormSubTitle>fecha de nacimiento</FormSubTitle>
                                <Input
                                    name="bithdate"
                                    type="text"
                                    defaultValue={currentUser.birthdate}
                                    ref={register({
                                        required: true
                                    })}
                                    placeholder="FECHA DE NACIMIENTO"
                                />
                            </Label>
                            <Label htmlFor="age">
                                <FormSubTitle>Edad</FormSubTitle>
                                <Input
                                    name="age"
                                    type="text"
                                    defaultValue={currentUser.age}
                                    ref={register({
                                        required: true
                                    })}
                                    placeholder="EDAD"
                                />
                            </Label>
                            <WrapBtn>
                                <Btn type="submit">actualizar</Btn>
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
    currentUser: state.profile
})
export default connect(mapStateToProps)(ProfilePersonal)
