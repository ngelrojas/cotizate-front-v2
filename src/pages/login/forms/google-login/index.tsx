import React from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {BtnGoogle} from './styles'
import {loginUser} from '../../../../redux/actions/user.actions'

type FormData = {
    email: string
    password: string
}

const GoogleLogin: React.FC = (props: any) => {
    let history = useHistory()

    const responseGoogle = async (response: any) => {
        let res = response.profileObj
        const userData = {
            email: res.email,
            password: res.email
        }
        props.loginUser(userData, history)
        // setSuccess(props.UI.loading)
    }
    return (
        <>
            <BtnGoogle
                clientId={`${process.env.REACT_APP_GOOGLE_ID}`}
                buttonText="INGRESAR CON GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            ></BtnGoogle>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    user: state.user,
    UI: state.UI
})

const mapActionToProps = {
    loginUser
}
export default connect(mapStateToProps, mapActionToProps)(GoogleLogin)
