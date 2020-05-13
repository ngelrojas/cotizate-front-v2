import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {Content, Title, Label, Form, Input, FormSubTitle} from './styles'

type profileType = {
    name: string
    last_name: string
    password: string
    email: string
    dni: string
    cellphone: string
}

interface Iauth {
    authenticated: boolean
    currentUser: profileType
}

const Profile: React.FC<Iauth> = ({authenticated, currentUser}) => {
    return (
        <Content>
            {authenticated ? (
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <Row center="xs">
                                <Col xs={6}>
                                    <Title>datos personales</Title>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Form>
                            <Label htmlFor="name">
                                <FormSubTitle>nombre</FormSubTitle>
                                <Input
                                    name="name"
                                    type="text"
                                    value={currentUser.name}
                                    placeholder="Nombre"
                                />
                            </Label>
                            <Label htmlFor="last_name">
                                <FormSubTitle>apellido</FormSubTitle>
                                <Input
                                    name="last_name"
                                    type="text"
                                    value={currentUser.last_name}
                                    placeholder="Nombre"
                                />
                            </Label>
                            <Label htmlFor="dni">
                                <FormSubTitle>carnet de identidad</FormSubTitle>
                                <Input
                                    name="dni"
                                    type="text"
                                    value={currentUser.dni}
                                    placeholder="DNI"
                                />
                            </Label>
                            <Label htmlFor="cell_phone">
                                <FormSubTitle>celular</FormSubTitle>
                                <Input
                                    name="cell_phone"
                                    type="text"
                                    value={currentUser.cellphone}
                                    placeholder="Numero de Celular"
                                />
                            </Label>
                        </Form>
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
export default connect(mapStateToProps)(Profile)
