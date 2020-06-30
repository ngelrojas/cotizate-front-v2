import React from 'react'
import {Col} from 'react-styled-flexboxgrid'
import {
    H3,
    Table,
    Thead,
    Th,
    Td,
    Tr
} from '../../styles'

const TableReward: React.FC = ()=>{
    return(
        <Col xs={6}>
            <H3>LISTA DE RECOMPENSAS</H3>
            <Table>
                <Thead>
                    <tr>
                        <Th>titulo</Th>
                        <Th>monto</Th>
                        <Th>opciones</Th>
                    </tr>
                </Thead>
                <tbody>
                    <Tr>
                        <Td>recompnesa uno</Td>
                        <Td>89</Td>
                        <Td>eliminar</Td>
                    </Tr> 
                </tbody> 
            </Table>
        </Col>
    )
}
export default TableReward
