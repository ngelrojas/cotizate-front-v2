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
    currentProfile: profileType
}

const ProfilePersonal: React.FC<Iauth> = ({authenticated, currentProfile}) => {
    const [msgSuccess, setMsgSuccess] = React.useState('')
    const [msgError, setMsgError] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [currentUserProfile, setCurrentUserProfile] = React.useState()
    let token = window.sessionStorage.getItem('token')
    const {register, handleSubmit, errors} = useForm<profileType>({
        mode: 'onChange'
    })
    const onSubmit = handleSubmit(
        async ({
            address,
            dni,
            country,
            city,
            cellphone,
            current_position,
            current_city,
            head_line,
            birthdate,
            age
        }) => {
            console.log('here in submit personal profile')
        }
    )
    React.useEffect(() => {
        API.get(`personal/profile/25`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(resp => {
                console.log(resp.data)
                setCurrentUserProfile(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
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
                        <Input
                            name="address"
                            type="text"
                            ref={register}
                            defaultValue={
                                currentUserProfile
                                    ? currentUserProfile.data.address
                                    : ''
                            }
                            placeholder="DIRECCION"
                        />
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
    currentProfile: state.profile
})
export default connect(mapStateToProps)(ProfilePersonal)
