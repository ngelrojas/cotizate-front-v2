import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import Loading from '../../components/loading'
import {
    Content,
    Title,
    BoxSend,
    BtnSend,
    ErrorInfo,
    SuccessInfo
} from './styles'
import API from '../../api'

type FormData = {
    password: string
    password_confirm: string
}

const ConfirmPassword: React.FC = () => {
    let match = useRouteMatch('/confirmar-contrasena/:uid/:token')
    let history = useHistory()
    const [message, setMessage] = React.useState('')
    const [notsend, setNotsend] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const {register, handleSubmit, errors, watch} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(async ({password, password_confirm}) => {
        let matchUrl: any = match
        let uid = matchUrl.params.uid
        let token = matchUrl.params.token
        await API.put(`user/recovery-password-confirm/`, {
            uid: uid,
            token: token,
            password: password,
            password_confirmation: password_confirm
        })
            .then(resp => {
                setLoading(true)
                if (resp.status === 200) {
                    setMessage('contrasena actualizada, ahora puede ingresar.')
                    setLoading(false)
                    history.push('/confirmacion')
                }
                setNotsend('')
            })
            .catch(err => {
                setLoading(true)
                if (err) {
                    setNotsend('token expirado.')
                    setLoading(false)
                }
                setMessage('')
            })
    })

    return (
        <Content>
            <Grid>
                <Row>
                    <Col xs={12} lg={12}>
                        <Row center="lg">
                            <Col xs={12} sm={6} lg={6}>
                                <Title>INGRESE SU NUEVA CONTRASENA</Title>

                                <form onSubmit={onSubmit}>
                                    <label htmlFor="password">
                                        <BoxSend
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
                                        <ErrorInfo>
                                            {errors.password &&
                                                'debe introducier una cantrasena.'}
                                        </ErrorInfo>
                                    </label>
                                    <label htmlFor="password_confirm">
                                        <BoxSend
                                            name="password_confirm"
                                            type="password"
                                            ref={register({
                                                required: true,
                                                validate: value =>
                                                    value === watch('password')
                                            })}
                                            placeholder="REPETIR CONTRASENA"
                                        />
                                        <ErrorInfo>
                                            {errors.password_confirm &&
                                                'las contrasenas no coinciden.'}
                                        </ErrorInfo>
                                    </label>
                                    {loading ? (
                                        <Loading message="enviando" />
                                    ) : (
                                        ''
                                    )}
                                    <ErrorInfo>{notsend}</ErrorInfo>
                                    <SuccessInfo>{message}</SuccessInfo>
                                    <Row>
                                        <Col xs={6} sm={12} lg={12}>
                                            <Row center="lg">
                                                <Col xs={12} sm={6} lg={6}>
                                                    <BtnSend type="submit">
                                                        ENVIAR
                                                    </BtnSend>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </Content>
    )
}

export default ConfirmPassword
