import React from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'
import {Table, Th, Td, Done, Err, Preview} from './styles'
import {CampaingHeader, CampaingBody} from '../../../../../userCampaings'

const FormPreview: React.FC = () => {
    let token = window.sessionStorage.getItem('token')
    let CamHeader = new CampaingHeader(token)
    let CamBody = new CampaingBody(token)
    //const camp_header_id = React.useRef(null)
    const [datach, setDatach] = React.useState(0)
    const [cpb, setCpb] = React.useState({})

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

    const retrieveCampBody = () =>{
        CamBody.getRetrieveCBody(19)
            .then(resp =>{
                console.info(resp.data.data)
                setCpb(resp.data.data)
            })
            .catch(err => {
                console.info(err)
            })
    }

    React.useEffect(()=>{
        getLast()
        console.info(datach)
        retrieveCampBody()
    },[])

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
                                    <Td>my campaing</Td>
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
