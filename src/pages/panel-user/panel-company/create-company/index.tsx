import React from 'react'
import {useForm} from 'react-hook-form'
import Loading from '../../../../components/loading'
import {CompanyProfile} from '../../../../userCompany'

import {
    Form,
    Label,
    Input,
    FormSubTitle,
    WrapBtn,
    BtnSave,
    BreakLine,
    MsgError,
    MsgSuccess
} from './styles'

type FormData = {
    address: string
    name: string
    dni: string
    country: string
    city: string
    phone: string
    cellphone: string
    email_company: string
    represent: boolean
}

const CreateCompany: React.FC = () => {
    const [msgSuccess, setMsgSuccess] = React.useState('')
    const [show, setShow] = React.useState(false)
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })
    let token = window.sessionStorage.getItem('token')
    let createComp = new CompanyProfile(token)

    const onSubmit = handleSubmit(
        ({
            name,
            address,
            dni,
            country,
            city,
            phone,
            cellphone,
            email_company,
            represent
        }) => {
            let send_data = {
                name: name,
                address: address,
                dni: dni,
                country: country,
                city: city,
                phone: phone,
                cellphone: cellphone,
                email_company: email_company,
                represent: represent
            }
            createComp
                .createCompanyProfile(send_data)
                .then(resp => {
                    setShow(true)
                    setMsgSuccess('compania/empresa creada.')
                    window.location.href = '/panel-de-usuario'
                })
                .catch(err => {
                    console.log(err)
                })
        }
    )

    return (
        <Form onSubmit={onSubmit} method="post">
            <Label htmlFor="name">
                <FormSubTitle>Nombre Empresa/Compania</FormSubTitle>
                <Input
                    name="name"
                    ref={register({required: true})}
                    type="text"
                    placeholder="Nombre de Empresa/Compania"
                />
                <MsgError>{errors.name && 'este campo es requerido.'}</MsgError>
            </Label>
            <Label htmlFor="address">
                <FormSubTitle>Direccion</FormSubTitle>
                <Input
                    name="address"
                    ref={register({required: true})}
                    type="text"
                    placeholder="Direccion"
                />
                <MsgError>
                    {errors.address && 'este campo es requerido.'}
                </MsgError>
            </Label>
            <Label htmlFor="dni">
                <FormSubTitle>DNI Empresa/Compania</FormSubTitle>
                <Input
                    name="dni"
                    ref={register({required: true})}
                    type="text"
                    placeholder="DNI Empresa/Compania"
                />
                <MsgError>{errors.dni && 'este campo es requerido.'}</MsgError>
            </Label>
            <Label htmlFor="country">
                <FormSubTitle>Pais</FormSubTitle>
                <Input
                    name="country"
                    ref={register({required: true})}
                    type="text"
                    placeholder="Pais"
                />
                <MsgError>
                    {errors.country && 'este campo es requerido.'}
                </MsgError>
            </Label>
            <Label htmlFor="city">
                <FormSubTitle>ciudad</FormSubTitle>
                <Input
                    name="city"
                    ref={register({required: true})}
                    type="text"
                    placeholder="Ciudad"
                />
                <MsgError>{errors.city && 'este campo es requirido.'}</MsgError>
            </Label>
            <Label htmlFor="phone">
                <FormSubTitle>Telefono</FormSubTitle>
                <Input
                    name="phone"
                    ref={register({required: true})}
                    type="text"
                    placeholder="Telefono"
                />
                <MsgError>
                    {errors.phone && 'este campo es requerido.'}
                </MsgError>
            </Label>
            <Label htmlFor="cellphone">
                <FormSubTitle>celular</FormSubTitle>
                <Input
                    name="cellphone"
                    ref={register({required: true})}
                    type="text"
                    placeholder="celular"
                />
                <MsgError>
                    {errors.cellphone && 'este campo es requerido.'}
                </MsgError>
            </Label>
            <Label htmlFor="email">
                <FormSubTitle>Correo Electronico</FormSubTitle>
                <Input
                    name="email_company"
                    ref={register({required: true, pattern: /\S+@\S+\.\S+/})}
                    type="email"
                    placeholder="Correo Electronico"
                />
                <MsgError>
                    {errors.email_company && 'este campo es requerido.'}
                </MsgError>
            </Label>
            <BreakLine>
                <Label htmlFor="represent">
                    <FormSubTitle>representante</FormSubTitle>
                    <Input name="represent" ref={register} type="checkbox" />
                </Label>
            </BreakLine>
            <BreakLine>
                {show ? <Loading message="guardando" /> : ''}
                <MsgSuccess>{msgSuccess}</MsgSuccess>
            </BreakLine>
            <WrapBtn>
                <BtnSave>guardar</BtnSave>
            </WrapBtn>
        </Form>
    )
}

export default CreateCompany
