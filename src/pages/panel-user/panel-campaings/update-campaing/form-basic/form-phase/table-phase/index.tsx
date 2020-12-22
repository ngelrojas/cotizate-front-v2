import React from 'react'
import {Col} from 'react-styled-flexboxgrid'
import {Phases} from '../../../../../../../userPhases'
import PhaseContext from '../../../../../../../context/phases'
import {
    H3,
    Table,
    Thead,
    Th,
    Td,
    Tr
} from '../../../styles'

const TablePhase: React.FC= ()=>{
    const phasecamp = React.useContext(PhaseContext) 
    let token = window.sessionStorage.getItem('token')
    let Phase = new Phases(token)
    const [listPhases, setlistPhases] = React.useState()

    const handleDelete = (e:number) => {
        /*const conjunt = _rewards.slice(0, e).concat(_rewards.slice(e + 1, _rewards.length))*/
        /*console.log(conjunt)*/  
    }

    const getListPhases = () =>{
        Phase.listPhases(phasecamp)
            .then(resp=>{
                setlistPhases(resp.data.data)
            }).catch(err=>{
                console.error(err)
            })
    }

    React.useEffect(() => {
        getListPhases() 
    }, [])
    

    return(
        <Col>
            <H3>LISTA DE FASES</H3>
            <Table>
                <Thead>
                    <tr>
                        <Th>titulo</Th>
                        <Th>monto</Th>
                        <Th>opcion</Th>
                    </tr>
                </Thead>
                <tbody>
                {
                    listPhases && listPhases.map( (phase:any, index:number) =>(
                     <Tr key={index}>
                        <Td>{phase.title}</Td>
                        <Td>{phase.amount}</Td>
                        <Td><button type="button" onClick={()=>handleDelete(index)}>eleminiar</button></Td>
                    </Tr>                        
                    ))
                }

                </tbody> 
            </Table>
        </Col>
    )
}
export default TablePhase
