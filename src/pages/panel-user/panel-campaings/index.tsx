import React from 'react'
import {connect} from 'react-redux'
import Loading from '../../../components/loading'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {Content, H1, Title, Table, Th, BtnCreate} from './styles'
import {Campaings} from '../../../userCampaings'

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

    const [dataCamp, setDataCamp] = React.useState()
    const [isData, setIsData] = React.useState(true)
    let token = window.sessionStorage.getItem('token')
    let campaing = new Campaings(token)
    React.useEffect(()=>{
        campaing.listCampaings().then(resp => {
            console.log(resp.data.data)
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
                                        <td>{camp.title}</td>
                                        <td>
                                                {camp.created_at}
                                        </td>
                                        <td>{camp.public_at}</td>
                                        <td>{camp.qty_day}</td>
                                        <td>{camp.amount}</td>
                                        <td>
                                            {camp.status}
                                        </td>
                                        <td>
                                        <button>actualizar</button>
                                        <button>eliminar</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td>
                                       <Loading message="cargando campañas" />
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td colSpan={5}>no existen datos</td>
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
