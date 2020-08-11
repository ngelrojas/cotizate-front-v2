import React from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import API from '../../../../../api'
import {PersonalProfile} from '../../../../../userProfile'
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
type userType = {
    first_name: string
    last_name: string
    id: number
}
interface Iauth {
    authenticated: boolean
    currentUser: userType
}

const FormProfile: React.FC<Iauth> = ({authenticated, currentUser}) => {
    const [msg, Setmsg] = React.useState('')
    const [currentProfile, setCurrentProfile] = React.useState()
    let token = window.sessionStorage.getItem('token')
    const resp = new PersonalProfile(token)
    const {handleSubmit, errors} = useForm<FormData>({
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
    //TODO: not return complete field, add end-point to backend to return complete field
    React.useEffect(()=>{
        console.log('ID USER', currentUser.id)

        resp.getPersonalProfile().then(res => {
            setCurrentProfile(res.data.data)
            console.log(res.data.data)
        })
    },[])

    return (
        <Form onSubmit={onSubmit}>
            <Label>
                <FormSubTitle>complete su perfil {currentUser.first_name}</FormSubTitle>
                 
                <MsgError>{errors.title && 'este campo es requerido'}</MsgError>
            </Label>
            <MsgSuccess>{msg}</MsgSuccess>
            <WrapBtn>
                <BtnNext>guardar</BtnNext>
            </WrapBtn>
        </Form>
    )
}
const mapStateToProps = (state: any) => ({
    authenticated: state.user.authenticated,
    currentUser: state.user
})
export default connect(mapStateToProps)(FormProfile)
