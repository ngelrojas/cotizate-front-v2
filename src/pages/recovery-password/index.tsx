import React from 'react'
import {useForm} from 'react-hook-form'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {
    Content,
    Title,
    SubTitle,
    BoxSend,
    BtnSend,
    ErrorInfo,
    SuccessInfo,
    WrapDots,
    Dots
} from './styles'
import API from '../../api'

type FormData = {
    email: string
}

const RecoveryPassword: React.FC = () => {
    const [message, setMessage] = React.useState('')
    const [notsend, setNotsend] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(async ({email}) => {
        await API.post(`user/recovery-password/`, {
            email: email
        })
            .then(resp => {
                setLoading(true)
                if (resp.status === 201) {
                    setMessage('enviamos un email para recupear su contrasena.')
                    setLoading(false)
                }

                setNotsend('')
            })
            .catch(err => {
                setLoading(true)
                if (err) {
                    setNotsend('Email no registrado.')
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
                                <Title>RECUPEAR CONSTRASENA</Title>
                                <SubTitle>Ingrese su email.</SubTitle>
                                <form onSubmit={onSubmit}>
                                    <label htmlFor="email">
                                        <BoxSend
                                            ref={register({
                                                required: true,
                                                pattern: /\S+@\S+\.\S+/
                                            })}
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                        />
                                        <ErrorInfo>
                                            {errors.email &&
                                                'debe ingresar un email valido.'}
                                        </ErrorInfo>
                                        {loading ? (
                                            <WrapDots>
                                                enviando <Dots />
                                            </WrapDots>
                                        ) : (
                                            ''
                                        )}
                                        <ErrorInfo>{notsend}</ErrorInfo>
                                        <SuccessInfo>{message}</SuccessInfo>
                                    </label>
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

export default RecoveryPassword
