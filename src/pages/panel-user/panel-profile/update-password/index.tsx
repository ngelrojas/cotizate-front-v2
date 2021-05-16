import React from 'react'
import {useForm} from 'react-hook-form'
import API from '../../../../api'
import {Row, Col} from 'react-styled-flexboxgrid'
import {
    Form,
    BtnShow,
    Label,
    Line,
    FormSubTitle,
    Input,
    WrapBtn,
    Btn,
    ErrorInfo,
    Span,
    Wrappbtnpwd
} from '../styles'
import Loading from '../../../../components/loading'

type passwordType = {
    password: string
    password_repeat: string
}

const UpdatePassword: React.FC = () => {
    let token = window.sessionStorage.getItem('token')
    const [hide, setHide] = React.useState(false)
    const [isloading, setIsloading] = React.useState(false)
    const [success, setSuccess] = React.useState('')
    const {register, handleSubmit, errors, watch} = useForm<passwordType>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(async ({password}) => {
        await API.put(
            'user/25',
            {
                password: password
            },
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        )
            .then(resp => {
                console.log('saved')
                setIsloading(true)
                if (resp.status === 200) {
                    setSuccess('su contrasena fue actualizada correctamente.')
                    setIsloading(false)
                }
            })
            .catch(err => {
                console.log(err)
                setIsloading(false)
            })
    })
    return (
        <Row>
            <Col xs={12}>
                <Row center="xs">
                    <Col xs={10}>
                        <Wrappbtnpwd>
                        <BtnShow type="button" onClick={() => setHide(!hide)}>
                            actualizar contrasena
                        </BtnShow>
                        </Wrappbtnpwd>

                        {hide ? (
                            <Form onSubmit={onSubmit}>
                                <Label htmlFor="password">
                                    <FormSubTitle>Contrasena</FormSubTitle>
                                    <ErrorInfo>
                                        {errors.password &&
                                            'debe introducir una contrasena.'}
                                    </ErrorInfo>
                                    <Input
                                        name="password"
                                        type="password"
                                        ref={register({
                                            required: true,
                                            minLength: {
                                                value: 8,
                                                message:
                                                    'su contrasena debe contener por lo menos 8 caracteres.'
                                            }
                                        })}
                                        placeholder="Contrasena"
                                    />
                                </Label>
                                <Label htmlFor="password_repeat">
                                    <FormSubTitle>
                                        repetir contrasena
                                    </FormSubTitle>
                                    <Input
                                        name="password_repeat"
                                        type="password"
                                        ref={register({
                                            required: true,
                                            validate: value =>
                                                value === watch('password')
                                        })}
                                        placeholder="Repetir contrasena"
                                    />
                                </Label>
                                <Span>
                                    {errors.password_repeat &&
                                        'las contrasenas no coinciden.'}
                                </Span>
                                <span>{success}</span>
                                <Line />
                                {isloading ? (
                                    <Loading message="actualizando" />
                                ) : (
                                    ''
                                )}

                                <WrapBtn>
                                    <Btn type="submit">actualizar</Btn>
                                </WrapBtn>
                            </Form>
                        ) : (
                            ''
                        )}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default UpdatePassword
