import React from 'react'
import {connect} from 'react-redux'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import ListCompanies from './list-companies'
import {Content, Title, BtnCreate} from './styles'
import CreateCompany from './create-company'

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
    const [showform, setShowform] = React.useState(false)

    const handleCreate = () => {
        setShowform(true)
    }
    return (
        <Content>
            {authenticated ? (
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <Row center="xs">
                                <Col xs={6}>
                                    <Title>Compania</Title>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <BtnCreate onClick={handleCreate}>
                            crear empresa/compania
                        </BtnCreate>
                    </Row>
                    <Row>
                        {!showform ? <ListCompanies /> : <CreateCompany />}
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
