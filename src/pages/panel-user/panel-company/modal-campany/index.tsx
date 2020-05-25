import React from 'react'
import Modal from 'react-modal'
import {
    BtnUpdate,
    Form,
    Label,
    Input,
    WrapBtn,
    FormSubTitle,
    BtnSave,
    BtnClose
} from './styles'
// import {CompanyProfile} from '../../../../userCompany'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)'
    }
}

interface GetData {
    data_company: any
}
const ModalCompany: React.FC<GetData> = props => {
    const [modalIsOpen, setIsOpen] = React.useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

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
                contentLabel="Example Modal"
            >
                <BtnClose onClick={closeModal}>X</BtnClose>
                <Form method="put">
                    <Label>
                        <FormSubTitle>empresa</FormSubTitle>
                        <Input
                            name="name"
                            defaultValue={props.data_company.name}
                        />
                    </Label>
                    <Label>
                        <FormSubTitle>direccion</FormSubTitle>
                        <Input
                            name="address"
                            defaultValue={props.data_company.address}
                        />
                    </Label>
                    <Label>
                        <FormSubTitle>dni</FormSubTitle>
                        <Input
                            name="dni"
                            defaultValue={props.data_company.dni}
                        />
                    </Label>
                    <Label>
                        <FormSubTitle>pais</FormSubTitle>
                        <Input
                            name="country"
                            defaultValue={props.data_company.country}
                        />
                    </Label>
                    <Label>
                        <FormSubTitle>ciudad</FormSubTitle>
                        <Input
                            name="city"
                            defaultValue={props.data_company.city}
                        />
                    </Label>
                    <Label>
                        <FormSubTitle>telefono</FormSubTitle>
                        <Input
                            name="phone"
                            defaultValue={props.data_company.phone}
                        />
                    </Label>
                    <Label>
                        <FormSubTitle>celular</FormSubTitle>
                        <Input
                            name="cellphone"
                            defaultValue={props.data_company.cellphone}
                        />
                    </Label>
                    <Label>
                        <FormSubTitle>correo electronico</FormSubTitle>
                        <Input
                            name="email_company"
                            defaultValue={props.data_company.email_company}
                        />
                    </Label>
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
