import React from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'
import {Table, Th, Td, Done, Err, Preview} from './styles'
import {CampaingHeader, CampaingBody} from '../../../../../userCampaings'

type IcampTypeBody = {
    created_at: string,
    currency: number,
    description: string,
    ended_at: string,
    excerpt: string,
    header: number,
    id: number,
    imagen_main: string,
    public_at: string,
    short_url: string,
    slogan_campaing: string,
    slug: string,
    status: number,
    title: string,
    updated_at: string,
    video_main: string
}

const FormPreview: React.FC = () => {
    let token = window.sessionStorage.getItem('token')
    let CamHeader = new CampaingHeader(token)
    let CamBody = new CampaingBody(token)
    const [datach, setDatach] = React.useState(0)
    const [cpb, setCpb] = React.useState<IcampTypeBody>()

    const getLast = () => {
        CamHeader.getLastCampaingHeader()
            .then(resp => {
                //console.info(resp.data.data.id)
                setDatach(resp.data.data.id)
                //camp_header_id.current = resp.data.data.id
            }).catch(err =>{
                console.error(err)
            })
    }

    const retrieveCampBody= () =>{
        CamBody.getRetrieveCBody(datach)
            .then(resp =>{
                setCpb(resp.data.data)
                console.info(cpb)
            })
            .catch(err => {
                console.info(err)
            })
    }

    React.useEffect(()=>{
        getLast()
        if(datach !== 0){
            retrieveCampBody()
        } 

    },[datach])

    return(
        <div>
        <Row>
            <Col xs={12}>
                <Row center="xs">
                    <Col xs={6}>
                        <Table>
                            <thead> 
                                 <tr> 
                                     <Th>campaña</Th> 
                                     <Th>ESTADO</Th>
                                </tr>
                            </thead>                           
                             <tbody>
                                <tr>
                                    <Td> title</Td>
                                    <Td><Done /> </Td>
                                </tr>
                                <tr>
                                    <Td>Fases</Td>
                                    <Td><Done /></Td>
                                </tr>
                                <tr>
                                    <Td>Recompensas</Td>
                                    <Td><Err /></Td>
                                </tr>
                                <tr>
                                    <Td>Perfil Personal</Td>
                                    <Td><Err /></Td>
                                </tr>
                                <tr>
                                <Td>Perfil Empresa/Asociacion</Td>
                                    <Td><Err /></Td>
                                </tr>
                            </tbody>
                            
                        </Table>
                    </Col>
                </Row>

            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <Row center="xs">
                    <Col xs={6}>
                       <Preview to="#">vista previa</Preview>
                    </Col>
                </Row>

            </Col>
        </Row>
        </div>
    )
}

export default FormPreview
