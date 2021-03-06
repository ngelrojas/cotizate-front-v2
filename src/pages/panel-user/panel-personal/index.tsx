import React from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import Loading from '../../../components/loading'
import {PersonalProfile} from '../../../userProfile'
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
    headline: string
    birthdate: Date
    age: number
}

interface Iauth {
    authenticated: boolean
    currentUserP: profileType
}

const ProfilePersonal: React.FC<Iauth> = ({authenticated, currentUserP}) => {
    const [msgSuccess, setMsgSuccess] = React.useState('')
    const [msgError, setMsgError] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [currentProfile, setCurrentProfile] = React.useState([])
    let token = window.sessionStorage.getItem('token')
    const resp = new PersonalProfile(token)
    const {register, handleSubmit, errors} = useForm<profileType>({
        mode: 'onChange'
    })

    React.useEffect((): void => {
        resp.getPersonalProfile().then(res => {
            setLoading(true)
            setCurrentProfile(res.data.data)
            setLoading(false)
        })
    }, [])

    const onSubmit = handleSubmit(
        async ({
            address,
            dni,
            country,
            city,
            cellphone,
            current_position,
            current_city,
            headline,
            birthdate,
            age
        }) => {
            let data_send = {
                address: address,
                dni: dni,
                country: country,
                city: city,
                cellphone: cellphone,
                current_position: current_position,
                current_city: current_city,
                headline: headline,
                birthdate: birthdate,
                age: age
            }
            resp.updatePersonalProfile(data_send)
                .then(resp => {
                    setLoading(true)
                    if (resp.data) {
                        setMsgSuccess('sus datos fueron actualizados.')
                        setLoading(false)
                    }
                })
                .catch(err => {
                    console.log(err)
                    setMsgError(err)
                    setMsgSuccess('')
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
                                    <Title>Perfil personal</Title>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {loading ? (
                        <Loading message="recuperando info" />
                    ) : (
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
                                        ref={register({required: true})}
                                        placeholder="DIRECCION"
                                    />
                                </Label>
                                <Label htmlFor="dni">
                                    <FormSubTitle>
                                        cedula de identidad
                                    </FormSubTitle>
                                    <ErrorInfo>
                                        {errors.dni &&
                                            'es obligatorio este dato.'}
                                    </ErrorInfo>
                                    <Input
                                        name="dni"
                                        type="text"
                                        ref={register({required: true})}
                                        placeholder="CEDULA DE IDENTIDAD"
                                    />
                                </Label>
                                <Label htmlFor="country">
                                    <FormSubTitle>pais</FormSubTitle>
                                    <Input
                                        name="country"
                                        type="text"
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
                                        ref={register({
                                            required: true
                                        })}
                                        placeholder="CIUDAD"
                                    />
                                </Label>
                                <Label htmlFor="cellphone">
                                    <FormSubTitle>Celular</FormSubTitle>
                                    <ErrorInfo>
                                        {errors.cellphone &&
                                            'es obligatorio este dato.'}
                                    </ErrorInfo>
                                    <Input
                                        name="cellphone"
                                        type="text"
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
                                        ref={register({
                                            required: true
                                        })}
                                        placeholder="CIUDAD ACTUAL"
                                    />
                                </Label>
                                <Label htmlFor="head_line">
                                    <FormSubTitle>profesion</FormSubTitle>
                                    <Input
                                        name="headline"
                                        type="text"
                                        ref={register({
                                            required: true
                                        })}
                                        placeholder="PROFESION"
                                    />
                                </Label>
                                <Label htmlFor="birthdate">
                                    <FormSubTitle>
                                        fecha de nacimiento
                                    </FormSubTitle>
                                    <Input
                                        name="birthdate"
                                        type="date"
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
                                        type="number"
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
                                    {loading ? (
                                        <Loading message="guardando" />
                                    ) : (
                                        ''
                                    )}
                                </WrapBtn>
                                <InfoSuccess>{msgSuccess}</InfoSuccess>
                                <InfoError>{msgError}</InfoError>
                            </Form>
                        </Row>
                    )}
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
    currentUserP: state.profile
})
export default connect(mapStateToProps)(ProfilePersonal)
