import React from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'
import {Table, Th, Td, Done, Err, Preview} from './styles'
import {CampaingHeader, CampaingBody} from '../../../../../userCampaings'
import {Phases} from '../../../../../userPhases'
import {Reward} from '../../../../../userReward'
import {PersonalProfile} from '../../../../../userProfile'

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
    let Phase = new Phases(token)
    let reward = new Reward(token)
    let personalProfile = new PersonalProfile(token)
    const [isLoading, setIsLoading] = React.useState(true)
    const [datach, setDatach] = React.useState(0)
    const [QtyPhases, setQtyPhases] = React.useState(0)
    const [QtyRewards, setQtyRewards] = React.useState(0)
    const [IdProfile, setIdProfile] = React.useState(0)
    const [DataProfile, setDataProfile] = React.useState()
    const [cpb, setCpb] = React.useState<IcampTypeBody>()

    const getLast = () => {
        CamHeader.getLastCampaingHeader()
            .then(resp => {
                console.info(resp.data.data.id)
                setDatach(resp.data.data.id)
                //camp_header_id.current = resp.data.data.id
            }).catch(err =>{
                console.error(err)
            })
    }

    const ListPhases = () => {
        Phase.listPhases(datach)
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
        reward.retrieveReward(datach)
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
        CamBody.getRetrieveCBody(datach)
            .then(resp =>{
                setCpb(resp.data.data)
                setIdProfile(resp.data.data.profile.id)
                console.info(resp.data.data.profile.id)
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
                console.info(resp.data.data)
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

    },[datach,QtyPhases,QtyRewards,IdProfile])

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
                                    <Td>{!isLoading && cpb ? (<Done />):(<Err />)} </Td>
                                </tr>
                                <tr>
                                    <Td>Fases</Td>
                                    <Td>{!isLoading && QtyPhases >= 1 ? (<Done />):(<Err />)}</Td>
                                </tr>
                                <tr>
                                    <Td>Recompensas</Td>
                                    <Td>{!isLoading && QtyRewards >= 1 ? (<Done />):(<Err />)}</Td>
                                </tr>
                                <tr>
                                    <Td>Perfil Personal</Td>
                                    <Td>{!isLoading && DataProfile >= 1 ? (<Done />):(<Err />)}</Td>
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
