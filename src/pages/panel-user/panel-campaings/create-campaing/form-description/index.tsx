import React from 'react'
import {useForm} from 'react-hook-form'
import {
    Label,
    Input,
    FormSubTitle,
    WrapBtn,
    BtnNext,
    Form,
    MsgError,
    MsgSuccess
} from '../styles'

type FormData = {
    public_at: string
    excerpt: string
    description: number
}

const FormDescription: React.FC = () => {
const [msg, Setmsg] = React.useState('')
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })


    const onSubmit = handleSubmit(({public_at, excerpt, description}) => {
        let send_data = {
            public_at: public_at,
            excerpt: excerpt,
            description: description,
        }
        window.localStorage.setItem('formBasic', JSON.stringify(send_data))
        Setmsg('datos basicos guardados')
    })
    return (
        <Form onSubmit={onSubmit}>
            <Label>
                <FormSubTitle>fecha en al que se publicara</FormSubTitle>
                <Input
                    type="date"
                    name="public_at"
                    ref={register({required: true})}
                    placeholder="mm/dd/yyyy"
                />
                <MsgError>{errors.public_at && 'este campo es requerido'}</MsgError>
            </Label>
            <Label>
                <FormSubTitle>resumen del proyecto</FormSubTitle>
                <Input
                    type="text"
                    name="video_img"
                    ref={register({required: true})}
                    placeholder="video/imagen proyecto"
                />
                <MsgError>
                    {errors.excerpt && 'este campo es requerido'}
                </MsgError>
            </Label>
            <Label>
                <FormSubTitle>descripcion completa campaña</FormSubTitle>

                <MsgError>
                    {errors.description && 'este campo es requerido'}
                </MsgError>
            </Label>
            <MsgSuccess>{msg}</MsgSuccess>
            <WrapBtn>
                <BtnNext>guardar</BtnNext>
            </WrapBtn>
        </Form>
    )
}

export default FormDescription
