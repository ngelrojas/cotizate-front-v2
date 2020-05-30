import React from 'react'
import Modal from 'react-modal'
import {useForm} from 'react-hook-form'
import {
    BtnUpdate,
    Form,
    Label,
    Input,
    WrapBtn,
    FormSubTitle,
    BtnSave,
    BtnClose,
    MsgError,
    BreakLine,
    H4,
    MsgSuccess,
    IconClose
} from './styles'
import {CompanyProfile} from '../../../../userCompany'

const customStyles = {
    content: {
        top: '50%',
        left: '60%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-75%, -50%)'
    }
}

interface GetData {
    data_company: any
}
type FormData = {
    name: string
    address: string
    dni: string
    phone: string
    cellphone: string
    country: string
    city: string
    email_company: string
    represent: boolean
}

const ModalCompany: React.FC<GetData> = props => {
    const [modalIsOpen, setIsOpen] = React.useState(false)
    const [msgSuccess, setMsgSuccess] = React.useState('')
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })
    const openModal = () => {
        setIsOpen(true)
    }
    let token = window.sessionStorage.getItem('token')
    let comProfile = new CompanyProfile(token)

    const handleUpdate = handleSubmit(
        ({
            name,
            address,
            dni,
            phone,
            cellphone,
            country,
            city,
            email_company,
            represent
        }) => {
            let data_send = {
                name: name,
                address: address,
                dni: dni,
                phone: phone,
                cellphone: cellphone,
                country: country,
                city: city,
                email_company: email_company,
                represent: represent
            }
            comProfile
                .updateCompanyProfile(props.data_company.id, data_send)
                .then(resp => {
                    setMsgSuccess('sus datos fueron actualizados.')
                })
                .catch(err => {
                    console.log(err)
                })
            console.log(data_send)
        }
    )

    const afterOpenModal = () => {}
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <BtnUpdate onClick={openModal}>actualizar</BtnUpdate>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="update company"
            >
                <BtnClose onClick={closeModal}>
                    <IconClose />
                </BtnClose>
                <H4>actualizar datos de empresa/compania</H4>
                <Form onSubmit={handleUpdate} method="put">
                    <Label>
                        <FormSubTitle>empresa</FormSubTitle>
                        <Input
                            name="name"
                            type="text"
                            ref={register({required: true})}
                            defaultValue={props.data_company.name}
                        />
                        <MsgError>
                            {errors.name && 'este campo es requerido.'}
                        </MsgError>
                    </Label>
                    <Label>
                        <FormSubTitle>direccion</FormSubTitle>
                        <Input
                            name="address"
                            type="text"
                            ref={register({required: true})}
                            defaultValue={props.data_company.address}
                        />
                        <MsgError>
                            {errors.address && 'este campo es requerido.'}
                        </MsgError>
                    </Label>
                    <Label>
                        <FormSubTitle>dni</FormSubTitle>
                        <Input
                            name="dni"
                            type="text"
                            ref={register({required: true})}
                            defaultValue={props.data_company.dni}
                        />
                        <MsgError>
                            {errors.dni && 'este campo es requerido.'}
                        </MsgError>
                    </Label>
                    <Label>
                        <FormSubTitle>pais</FormSubTitle>
                        <Input
                            name="country"
                            defaultValue={props.data_company.country}
                            type="text"
                            ref={register({required: true})}
                        />
                        <MsgError>
                            {errors.country && 'este campo es requerido.'}
                        </MsgError>
                    </Label>
                    <Label>
                        <FormSubTitle>ciudad</FormSubTitle>
                        <Input
                            name="city"
                            defaultValue={props.data_company.city}
                            type="text"
                            ref={register({required: true})}
                        />
                        <MsgError>
                            {errors.city && 'este campo es requerido.'}
                        </MsgError>
                    </Label>
                    <Label>
                        <FormSubTitle>telefono</FormSubTitle>
                        <Input
                            name="phone"
                            defaultValue={props.data_company.phone}
                            type="text"
                            ref={register({required: true})}
                        />
                        <MsgError>
                            {errors.phone && 'este campo es requerido.'}
                        </MsgError>
                    </Label>
                    <Label>
                        <FormSubTitle>celular</FormSubTitle>
                        <Input
                            name="cellphone"
                            defaultValue={props.data_company.cellphone}
                            type="text"
                            ref={register({required: true})}
                        />
                        <MsgError>
                            {errors.cellphone && 'este campo es requerido.'}
                        </MsgError>
                    </Label>
                    <Label>
                        <FormSubTitle>correo electronico</FormSubTitle>
                        <Input
                            name="email_company"
                            defaultValue={props.data_company.email_company}
                            type="text"
                            ref={register({
                                required: true,
                                pattern: /\S+@\S+\.\S+/
                            })}
                        />
                        <MsgError>
                            {errors.email_company && 'este campo es requerido.'}
                        </MsgError>
                    </Label>
                    <BreakLine>
                        <Label htmlFor="represent">
                            <FormSubTitle>representante</FormSubTitle>
                            <Input
                                name="represent"
                                ref={register}
                                type="checkbox"
                                defaultChecked={props.data_company.represent}
                            />
                        </Label>
                    </BreakLine>
                    <BreakLine>
                        <MsgSuccess>{msgSuccess}</MsgSuccess>
                    </BreakLine>
                    <WrapBtn>
                        <BtnSave>actualizar</BtnSave>
                    </WrapBtn>
                </Form>
            </Modal>
        </div>
    )
}
Modal.setAppElement('#root')
export default ModalCompany
