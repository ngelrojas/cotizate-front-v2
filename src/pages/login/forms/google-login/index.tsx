import React, {useState} from 'react'
//import GoogleLogin from 'react-google-login'
import API from '../../../../api'
import {useHistory} from 'react-router-dom'
import {SuccessInfo, WarningInfo, BtnGoogle} from './styles'

const GoogleLogin: React.FC = () => {
    const [success, setSuccess] = useState('')
    const [warning, setWarning] = useState('')
    let history = useHistory()
    const responseGoogle = async (response: any) => {
        let res = response.profileObj
        await API.post(`/user/token/`, {
            email: res.email,
            password: res.email
        })
            .then(res => {
                setSuccess(`bienvenido.`)
                setWarning('')
                history.push('/')
            })
            .catch(err => {
                setSuccess('')
                setWarning(
                    'usuario no registrado o quiza su usuario no se encuentre activado.'
                )
            })
    }
    return (
        <>
            <BtnGoogle
                clientId="156734380889-2ia01r8prno31as99nhrr1trv4t0vbtq.apps.googleusercontent.com"
                buttonText="INGRESAR CON GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            ></BtnGoogle>
            <SuccessInfo>{success}</SuccessInfo>
            <WarningInfo>{warning}</WarningInfo>
        </>
    )
}

export default GoogleLogin
