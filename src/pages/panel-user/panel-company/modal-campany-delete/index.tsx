import React from 'react'
import Modal from 'react-modal'
import {useForm} from 'react-hook-form'
import {
    BtnDelete,
    Form,
    WrapBtn,
    FormSubTitle,
    BtnSave,
    BtnClose,
    MsgError,
    BreakLine,
    H4,
    MsgSuccess
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
    id: number
}

const ModalCompanyDelete: React.FC<GetData> = props => {
    const [modalIsOpen, setIsOpen] = React.useState(false)
    const [msgSuccess, setMsgSuccess] = React.useState('')
    const {handleSubmit} = useForm<FormData>({
        mode: 'onChange'
    })
    const openModal = () => {
        setIsOpen(true)
    }
    let token = window.sessionStorage.getItem('token')
    let comProfile = new CompanyProfile(token)

    const handleDelete = handleSubmit(() => {
        comProfile
            .deleteCompanyProfile(props.data_company.id)
            .then(resp => {
                setMsgSuccess('registro eliminado con exito.')
            })
            .catch(err => {
                console.log(err)
            })
    })

    const afterOpenModal = () => {}
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <BtnDelete onClick={openModal}>eliminar</BtnDelete>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="delete company"
            >
                <BtnClose onClick={closeModal}>X</BtnClose>
                <H4>eliminar datos de empresa {props.data_company.name}</H4>
                <Form onSubmit={handleDelete} method="delete">
                    <BreakLine>
                        <MsgSuccess>{msgSuccess}</MsgSuccess>
                    </BreakLine>
                    <WrapBtn>
                        <BtnSave>eliminar {props.data_company.id}</BtnSave>
                    </WrapBtn>
                </Form>
            </Modal>
        </div>
    )
}
Modal.setAppElement('#root')
export default ModalCompanyDelete
