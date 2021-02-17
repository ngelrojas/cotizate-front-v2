import React from 'react'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import Loading from '../../../components/loading'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {Content, H1, Title, Table, Th, Td, BtnCreate,
        BtnUpdate,
        BtnDelete
       } from './styles'
import {Campaings} from '../../../userCampaings'
import {CheckAuthentication} from '../../../redux/auth'

type FormData = {
    id: number
    title: string
    status: number
    amount: number
}

type userType = {
    first_name: string
    last_name: string
    id: number
    complete: boolean
}

interface Iauth {
    authenticated: boolean
    currentUser: userType
}

const PanelCampaing: React.FC<Iauth> = ({authenticated, currentUser}) => {

    let history = useHistory()
    const [dataCamp, setDataCamp] = React.useState([])
    const [isData, setIsData] = React.useState(true)
    let token = window.sessionStorage.getItem('token')
    let campaing = new Campaings(token)

    const formattDate = (date_in_parse:Date)=>{
        var date_parse = new Date(date_in_parse)
        var day = date_parse.getDate()
        var month = date_parse.getMonth()
        var year = date_parse.getFullYear()
        var complete_date = day +'/'+month+'/'+year 
        return complete_date 

    }

    React.useEffect(()=>{

        if(!CheckAuthentication()){
            history.push('/')
        }

        campaing.listCampaings().then(resp => {
            if(resp.data.data.length === 0){
                setIsData(false)
            }
            setDataCamp(resp.data.data)
        }).catch(err=>{
            console.error(err)
        })
    },[])

    return (
        <Content>
            <Grid>
                <Row>
                    <Title>
                        <H1>mis campañas</H1>
                    </Title>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Row end="xs">
                            <Col xs={4}>
                                <BtnCreate to="/panel-de-usuario/crear-campania">
                                    crear campaña
                                </BtnCreate>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={10}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <Th>TITULO</Th>
                                            <Th>CREADO</Th>
                                            <Th>PUBLICADO</Th>
                                            <Th>DIAS</Th>
                                            <Th>REQUERIDO $BS</Th>
                                            <Th>ESTADO</Th>
                                            <Th>OPCIONES</Th>
                                        </tr>
                                    </thead>
                    {isData ? (
                        <tbody>
                            {dataCamp ? (
                                dataCamp.map((camp: any) => (

                                    <tr key={camp.id}>
                                        <Td>{camp.title}</Td>
                                        <Td>
                                            {formattDate(camp.created_at)}
                                        </Td>
                                        <Td>{formattDate(camp.public_at)}</Td>
                                        <Td>{camp.qty_day}</Td>
                                        <Td>{camp.amount}</Td>
                                        <Td>
                                            {camp.status}
                                        </Td>
                                        <Td>
                                        <BtnUpdate to={`actualizar-campania/${camp.id}`}>actualizar</BtnUpdate> 
                                        <BtnDelete to="#">eliminar</BtnDelete>
                                        </Td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <Td>
                                       <Loading message="cargando campañas" />
                                    </Td>
                                </tr>
                            )}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <Td colSpan={5}>no existen datos</Td>
                            </tr>
                            <tr>
                                <Td>
                                   <Loading message="cargando campañas" />
                                </Td>
                            </tr>
                        </tbody>
                    )}
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </Content>
    )
}
const mapStateToProps = (state: any) => ({
    authenticated: state.user.authenticated,
    currentUser: state.user
})
export default connect(mapStateToProps)(PanelCampaing)
