import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-styled-flexboxgrid'
import {CampaingBody} from '../../../../../userCampaings'
import {ContainerCard,
    Spaces, 
    SpacesBtn,
    Label,
    Edit,
    Delete,
    H5
} from './styles'

const CardCreated: React.FC = () => {
    return(
        <ContainerCard>
            <Row>
                <Col xs={5}>
                    <img src="" alt="" />
                </Col>
                <Col xs={3}>
                    <h3>Title</h3>
                    <Spaces>
                        <Label>por:</Label> <span>Lucy ali</span>
                    </Spaces>
                    <Spaces>
                         <Label>Cod:</Label> <span> 00000001</span>
                    </Spaces>                   
                    <Spaces>
                        <Label>Creado:</Label> <span> 10/09/2020 </span>
                    </Spaces>
                </Col>
                <Col xs={3}>
                    <SpacesBtn>
                        <Edit to="/"> EDITAR</Edit>
                    </SpacesBtn> 
                    <SpacesBtn>
                        <Delete to="/"> ELIMINAR</Delete>
                    </SpacesBtn>
                    <SpacesBtn>
                        <H5>creado</H5>
                    </SpacesBtn>
                </Col>
            </Row>

        </ContainerCard>
    )
}
export default CardCreated
