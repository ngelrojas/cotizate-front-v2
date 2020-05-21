import React from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import API from '../../../api'
import Loading from '../../../components/loading'
import {
    Content,
    Title,
    Label,
    Form,
    Input,
    FormSubTitle,
    WrapBtn,
    Btn,
    ErrorInfo,
    InfoSuccess,
    InfoError
} from './styles'

type profileType = {
    address: string
    dni: string
    country: string
    city: string
    cellphone: string
    current_position: string
    current_city: string
    head_line: string
    birthdate: string
    age: number
}

interface Iauth {
    authenticated: boolean
    currentUser: profileType
}

const ProfilePersonal: React.FC<Iauth> = ({authenticated, currentUser}) => {
    const [msgSuccess, setMsgSuccess] = React.useState('')
    const [msgError, setMsgError] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    let token = window.sessionStorage.getItem('token')
    const {register, handleSubmit, errors} = useForm<profileType>({
        mode: 'onChange'
    })

    const load = () => {
        API.get('personal/profile', {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(resp => {
                console.log(resp)
            })
            .catch(err => {
                console.log(err)
            })
    }
    React.useEffect(() => {
        load()
    })
    return (
        <Content>
            {authenticated ? (
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <Row center="xs">
                                <Col xs={6}>
                                    <Title>Perfil personal</Title>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <h1>content</h1>
                    </Row>
                </Grid>
            ) : (
                <Grid>
                    <Row>
                        <Col>
                            <h1>no user here</h1>
                        </Col>
                    </Row>
                </Grid>
            )}
        </Content>
    )
}

const mapStateToProps = (state: any) => ({
    authenticated: state.user.authenticated,
    currentUser: state.profile
})
export default connect(mapStateToProps)(ProfilePersonal)
