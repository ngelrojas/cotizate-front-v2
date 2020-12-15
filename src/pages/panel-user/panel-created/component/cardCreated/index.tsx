import React from 'react'
import Moment from 'react-moment'
import {Row, Col} from 'react-styled-flexboxgrid'
import {CampaingHeader} from '../../../../../userCampaings'
import Default from '../../../../public/img/default.png'
import {URL_IMG} from '../../../../../constants'
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
    header: number
    status: number
}

const CardCreated: React.FC<propsCamp> = (propsCamp) => {
    let token = window.sessionStorage.getItem('token')
    let CampHeader = new CampaingHeader(token)
    const [GetHeader, setGetHeader] = React.useState<IHeader>()
    const [IsLoad, setIsLoad] = React.useState(true)

    const LoadHeader = () => {
        CampHeader.retrieveCampaingHeader(propsCamp.header)
            .then(resp => {
                setGetHeader(resp.data.data)
            }).catch(err => {
                console.error(err)
            }).then(() => {
                setIsLoad(false)
            })
    }

    const StatusCamp = (index: number) => {
        switch(index){
            case 2:
                return <H4>CREADO</H4>
            case 3:
                return <H4>EN REVISION</H4>
            case 4:
                return <H4>APROBADO</H4>
            case 5:
                return <H4>PUBLICADO</H4>
            default:
                return <H4>CREADO</H4>
        } 
    }

    React.useEffect(()=>{
        LoadHeader()
    },[])


    return(
        <ContainerCard key={propsCamp.id}>
            <Row between="xs">
                <Col xs={4}>
                <Img src={!IsLoad && propsCamp.imagen_main ? URL_IMG + propsCamp.imagen_main: Default} alt={`${propsCamp.slug} - cotizate`} />
                </Col>
                <Col xs={5}>
                    <Box>
                        <H3>{propsCamp.title}</H3>
                        <Spaces>
                            <Label>por:</Label> <span>{propsCamp.profile.user.first_name} {propsCamp.profile.user.last_name}</span>
                        </Spaces>
                        <Spaces>
                             <Label>Cod:</Label> <span> {!IsLoad && GetHeader ? GetHeader.code_campaing: '0'}</span>
                        </Spaces>                   
                        <Spaces>
                            <Label>Creado:</Label> <span> <Moment format="DD/MM/YYYY">{propsCamp.created_at}</Moment></span>
                        </Spaces>
                    </Box>
                </Col>
                <Col xs={3}>
                    <Box>
                        <SpacesBtn>
                            <Edit to={`/panel-de-usuario/actualizar-proyecto/${propsCamp.id}`}> EDITAR</Edit>
                        </SpacesBtn> 
                        <SpacesBtn>
                            <Delete to={`/eliminar/${propsCamp.id}`}> ELIMINAR</Delete>
                        </SpacesBtn>
                        {StatusCamp(propsCamp.status)}
                    </Box>
                </Col>
            </Row>

        </ContainerCard>
    )
}
export default CardCreated
