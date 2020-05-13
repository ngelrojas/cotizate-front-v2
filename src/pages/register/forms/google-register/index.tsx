import React, {useState} from 'react'
//import GoogleLogin from 'react-google-login'
import API from '../../../../api'
import {SuccessInfo, WarningInfo, BtnGoogle} from './styles'

const GoogleRegister: React.FC = () => {
    const [success, setSuccess] = useState('')
    const [warning, setWarning] = useState('')

    const responseGoogle = async (response: any) => {
        let res = response.profileObj
        await API.post(`/user/create/`, {
            name: res.givenName,
            last_name: res.familyName,
            email: res.email,
            password: res.email,
            dni: '123456',
            cellphone: '123456'
        })
            .then(res => {
                setSuccess('enviamos un email para su confirmacion.')
            })
            .catch(err => {
                setWarning(
                    'El usuario ya se encuentra registrado, debe hacer login.'
                )
            })
    }
    return (
        <>
            <BtnGoogle
                clientId={`${process.env.REACT_APP_GOOGLE_ID}`}
                buttonText="REGISTRARSE CON GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            ></BtnGoogle>
            <SuccessInfo>{success}</SuccessInfo>
            <WarningInfo>{warning}</WarningInfo>
        </>
    )
}

export default GoogleRegister
