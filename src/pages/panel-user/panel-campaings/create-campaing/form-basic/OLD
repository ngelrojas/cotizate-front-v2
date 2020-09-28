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
    title: string
    video_img: string
    qty_day: number
    amount: number
}

const FormBasic: React.FC = () => {
    const [msg, Setmsg] = React.useState('')
    const [formbasic, Setformbasic] = React.useState()
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(({title, video_img, qty_day, amount}) => {
        let send_data = {
            title: title,
            video_img: video_img,
            qty_day: qty_day,
            amount: amount
        }

        window.localStorage.setItem('formBasic', JSON.stringify(send_data))
        Setmsg('datos basicos guardados')
    })

    React.useEffect(()=>{
        let _formbasic: any = window.localStorage.getItem('formBasic')
        Setformbasic(JSON.parse(_formbasic))
    },[])

    return (
        <Form onSubmit={onSubmit}>
            <Label>
                <FormSubTitle>titulo del proyecto</FormSubTitle>
                <Input
                    type="text"
                    name="title"
                    ref={register({required: true})}
                    placeholder="titulo del proyecto"
                    defaultValue={formbasic?.title}
                />
                <MsgError>{errors.title && 'este campo es requerido'}</MsgError>
            </Label>
            <Label>
                <FormSubTitle>video o imagen del proyecto</FormSubTitle>
                <Input
                    type="text"
                    name="video_img"
                    ref={register({required: true})}
                    placeholder="video/imagen proyecto"
                    defaultValue={formbasic?.video_img} 
                />
                <MsgError>
                    {errors.video_img && 'este campo es requerido'}
                </MsgError>
            </Label>
            <Label>
                <FormSubTitle>cuantos dias durara tu campaña</FormSubTitle>
                <Input
                    type="number"
                    name="qty_day"
                    ref={register({required: true})}
                    placeholder="cantidad de dias"
                    defaultValue={formbasic?.qty_day}
                />
                <MsgError>
                    {errors.qty_day && 'este campo es requerido'}
                </MsgError>
            </Label>
            <Label>
                <FormSubTitle>cantidad de dinero a recaudar</FormSubTitle>
                <Input
                    type="number"
                    name="amount"
                    ref={register({required: true})}
                    placeholder="Bs 15.000"
                    defaultValue={formbasic?.amount}
                />
                <MsgError>
                    {errors.amount && 'este campo es requerido'}
                </MsgError>
            </Label>
            <MsgSuccess>{msg}</MsgSuccess>
            <WrapBtn>
                <BtnNext>guardar</BtnNext>
            </WrapBtn>
        </Form>
    )
}

export default FormBasic
