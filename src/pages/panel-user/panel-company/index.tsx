import React from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import Loading from '../../../components/loading'
import {
    Content,
    Title,
    WrapBtn,
    BtnCreate,
    BtnUpdate,
    BtnDelete,
    Table,
    Th,
    Td
} from './styles'

type profileType = {
    first_name: string
    last_name: string
    email: string
}

interface Iauth {
    authenticated: boolean
    currentUser: profileType
}

const ProfileCompany: React.FC<Iauth> = ({authenticated, currentUser}) => {
    const [loading, setLoading] = React.useState(false)
    let history = useHistory()
    const handleGo = () => {
        history.push('panel-de-usuario/crear-compania')
    }
    return (
        <Content>
            {authenticated ? (
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <Row center="xs">
                                <Col xs={6}>
                                    <Title>Companias</Title>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <WrapBtn>
                            <BtnCreate onClick={handleGo}>
                                crear compania
                            </BtnCreate>
                        </WrapBtn>
                    </Row>
                    <Row>
                        <Table>
                            <thead>
                                <tr>
                                    <Th>COMPANIA</Th>
                                    <Th>DIRECCION</Th>
                                    <Th>EMAIL</Th>
                                    <Th>PHONE</Th>
                                    <Th>OPCIONES</Th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <Td>mi compania</Td>
                                    <Td>mi direccion</Td>
                                    <Td>compony@gmail.com</Td>
                                    <Td>123456789</Td>
                                    <Td>
                                        <BtnUpdate>actualizar</BtnUpdate>

                                        <BtnDelete>eliminar</BtnDelete>
                                    </Td>
                                </tr>
                            </tbody>
                        </Table>
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
    currentUser: state.user
})
export default connect(mapStateToProps)(ProfileCompany)
