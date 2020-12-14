import React from 'react'
import Moment from 'react-moment'
import {Row, Col} from 'react-styled-flexboxgrid'
import {ContainerCard,
    Spaces, 
    SpacesBtn,
    Label,
    Edit,
    Delete,
    H4,
    H3,
    Box,
    Img
} from './styles'

type propsUser = {
    first_name: string
    last_name: string
}
type propsProfile = {
    id: number
    user: propsUser
}

type propsCamp = {
    id: number
    title: string
    slug: string
    profile: propsProfile
    created_at: string 
}

const CardCreated: React.FC<propsCamp> = (propsCamp) => {

    return(
        <ContainerCard>
            <Row between="xs">
                <Col xs={4}>
                    <Img src="https://picsum.photos/seed/picsum/200/300" alt={`${propsCamp.slug} - cotizate`} />
                </Col>
                <Col xs={5}>
                    <Box>
                        <H3>{propsCamp.title}</H3>
                        <Spaces>
                            <Label>por:</Label> <span>{propsCamp.profile.user.first_name} {propsCamp.profile.user.last_name}</span>
                        </Spaces>
                        <Spaces>
                             <Label>Cod:</Label> <span> 00000001</span>
                        </Spaces>                   
                        <Spaces>
                            <Label>Creado:</Label> <span> <Moment format="DD MM YYYY">{propsCamp.created_at}</Moment></span>
                        </Spaces>
                    </Box>
                </Col>
                <Col xs={3}>
                    <Box>
                        <SpacesBtn>
                        <Edit to={`/editar/${propsCamp.id}`}> EDITAR</Edit>
                        </SpacesBtn> 
                        <SpacesBtn>
                            <Delete to={`/eliminar/${propsCamp.id}`}> ELIMINAR</Delete>
                        </SpacesBtn>
                        <H4>creado</H4>
                    </Box>
                </Col>
            </Row>

        </ContainerCard>
    )
}
export default CardCreated
