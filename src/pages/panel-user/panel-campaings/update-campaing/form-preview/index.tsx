import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {Row, Col} from 'react-styled-flexboxgrid'
import {Table, Th, Td, Done, Err, Preview} from './styles'
import {CampaingHeader, CampaingBody} from '../../../../../userCampaings'
import {Phases} from '../../../../../userPhases'
import {Reward} from '../../../../../userReward'
import {PersonalProfile} from '../../../../../userProfile'

interface IcampTypeBody {
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
    let match = useRouteMatch('/panel-de-usuario/actualizar-proyecto/:campania')
    let matchUrl: any = match
    let campaingId = matchUrl.params.campania
    let token = window.sessionStorage.getItem('token')
    let CamHeader = new CampaingHeader(token)
    let CamBody = new CampaingBody(token)
    let Phase = new Phases(token)
    let reward = new Reward(token)
    let personalProfile = new PersonalProfile(token)
    const [isLoading, setIsLoading] = React.useState(true)
    const [datach, setDatach] = React.useState(0)
    const [QtyPhases, setQtyPhases] = React.useState(0)
    const [QtyRewards, setQtyRewards] = React.useState(0)
    const [StatusCamp, setStatusCamp] = React.useState(0)
    const [IsCompany, setIsCompany] = React.useState(0)
    const [IdProfile, setIdProfile] = React.useState(0)
    const [DataProfile, setDataProfile] = React.useState(1)
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

    const ListPhases = () => {
        Phase.listPhases(campaingId)
            .then(resp => {
                setQtyPhases(resp.data.data.length)
            })
            .catch(err => {
                console.info(err)
            })
            .then(()=>{
                setIsLoading(false)
            })
    }

    const ListRewards = ()=> {
        reward.retrieveReward(campaingId)
            .then(resp => {
                setQtyRewards(resp.data.data.length)
            })
            .catch(err => {
                console.info(err)
            })
            .then(()=>{
                setIsLoading(false)
            })
    }

    const retrieveCampBody= () =>{
        CamBody.getRetrieveCBody(campaingId)
            .then(resp =>{
                setCpb(resp.data.data)
                setIdProfile(resp.data.data.profile.id)
                setStatusCamp(resp.data.data.status)
                setIsCompany(resp.data.data.profile_ca)
            })
            .catch(err => {
                console.info(err)
            }).then(()=>{
                setIsLoading(false)
            })
    }

    const retrievePP = () => {
        personalProfile.currentPersonalProfile(IdProfile)
            .then(resp => {
                //console.info(resp.data.data)
                setDataProfile(resp.data.data.id)
            })
            .catch(err => {
                console.info(err)
            })
            .then(()=>{
                setIsLoading(false)
            })
    } 

    React.useEffect(()=>{
        getLast()
        if(datach !== 0){
            retrieveCampBody()
        } 
        ListPhases()
        ListRewards()
        retrievePP()

    },[datach,QtyPhases,
        QtyRewards,IdProfile,
        StatusCamp])

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
                                    <Td> Campaña Completa</Td>
                                    <Td>{!isLoading && cpb && StatusCamp === 2 ? (<Done />):(<Err />)} </Td>
                                </tr>
                                <tr>
                                    <Td>Fases</Td>
                                    <Td>{!isLoading && QtyPhases >= 1 && StatusCamp === 2 ? (<Done />):(<Err />)}</Td>
                                </tr>
                                <tr>
                                    <Td>Recompensas</Td>
                                    <Td>{!isLoading && QtyRewards >= 1 && StatusCamp === 2 ? (<Done />):(<Err />)}</Td>
                                </tr>
                                <tr>
                                    <Td>Perfil Personal</Td>
                                    <Td>{!isLoading && DataProfile >= 1  && StatusCamp === 2 ? (<Done />):(<Err />)}</Td>
                                </tr>
                                
                                {!isLoading && IsCompany && StatusCamp === 2 ? (
                                    <tr>
                                    <Td>Perfil Empresa/Asociacion</Td>
                                    <Td><Done /></Td> 
                                    </tr>
                                ):(<tr></tr>)}
                                
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
                    {!isLoading && StatusCamp ===2 && QtyPhases >= 1 &&  QtyRewards >= 1 && DataProfile >= 1 ? 
                        (<Preview to={!isLoading && cpb ? `vista-previa/${cpb.slug}`:``}>vista previa</Preview>):(<Preview to="#">vista previa</Preview>)}
                       
                    </Col>
                </Row>

            </Col>
        </Row>
        </div>
    )
}

export default FormPreview
