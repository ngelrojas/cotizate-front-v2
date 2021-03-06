import React from 'react'
import Moment from 'react-moment'
import {Row, Col} from 'react-styled-flexboxgrid'
import Default from '../../../../public/img/default.png'
import {URL_IMG} from '../../../../../constants'
import {ContainerCard,
    Spaces, 
    SpacesBtn,
    Label,
    Edit,
    Enviar,
    Delete,
    H4,
    H3,
    Box,
    DivImg,
    Goto
} from './styles'

interface IHeader {
    code_campaing: string
}

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
    imagen_main: string
    header: IHeader 
    status: number
}

const CardCreated: React.FC<propsCamp> = (propsCamp) => {

    const StatusCamp = (index: number) => {
        switch(index){
            case 2:
                return (
                    <>
                        {GroupCreated()}
                        <H4>CREADO</H4>
                    </>)
            case 3:
                return (
                    <>
                        {GroupRevision()}
                        <H4>EN REVISION</H4>
                    </>
                )
            case 4:
                return <H4>APROBADO</H4>
            case 5:
                return <H4>PUBLICADO</H4>
            default:
                return <H4>CREADO</H4>
        } 
    }

    const handleSend = (e:any) => {
        console.info("SEND TO REVITION")
        console.info(e.id)
    }

    const GroupCreated = () => {
        return(
            <div>
                <SpacesBtn>
                    <Edit to={`/panel-de-usuario/actualizar-proyecto/${propsCamp.id}`}> EDITAR</Edit>
                </SpacesBtn> 
                <SpacesBtn>
                <Enviar type='button' onClick={e=>handleSend(propsCamp)}> ENVIAR</Enviar>
                </SpacesBtn>
                <SpacesBtn>
                    <Delete to={`/eliminar/${propsCamp.id}`}> ELIMINAR</Delete>
                </SpacesBtn>
            </div>  
        )                     
    }

    const GroupRevision = () => {
        return(
            <div>
                <SpacesBtn>
                    <Edit to={`/panel-de-usuario/actualizar-proyecto/${propsCamp.id}`}> EDITAR</Edit>
                </SpacesBtn> 
                <SpacesBtn>
                <Enviar type='button' onClick={e=>handleSend(propsCamp)}> ENVIAR</Enviar>
                </SpacesBtn>
            </div>  
        )                     
    }
    return(
        <ContainerCard key={propsCamp.id}>
            <Row between="xs">
                <Col xs={6}>
                    <DivImg dangerouslySetInnerHTML={{__html:propsCamp.imagen_main}}></DivImg>
                </Col>
                <Col xs={4}>
                    <Box>
                    <H3> <Goto to={propsCamp.slug}>{propsCamp.title}</Goto></H3>
                        <Spaces>
                            <Label>por:</Label> <span>{propsCamp.profile.user.first_name} {propsCamp.profile.user.last_name}</span>
                        </Spaces>
                        <Spaces>
                             <Label>Cod:</Label> <span> { propsCamp.header ? propsCamp.header.code_campaing: '0'}</span>
                        </Spaces>                   
                        <Spaces>
                            <Label>Creado:</Label> <span> <Moment format="DD/MM/YYYY">{propsCamp.created_at}</Moment></span>
                        </Spaces>
                    </Box>
                </Col>
                <Col xs={2}>
                    <Box>
                        {StatusCamp(propsCamp.status)}
                    </Box>
                </Col>
            </Row>

        </ContainerCard>
    )
}
export default CardCreated
