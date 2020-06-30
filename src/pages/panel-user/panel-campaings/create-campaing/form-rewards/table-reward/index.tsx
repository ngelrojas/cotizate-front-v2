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
    const [getRewards, SetgetRewards] = React.useState()

    React.useEffect(() => {
        let _formReward:any = window.localStorage.getItem('formReward')
        let form_parse = JSON.parse(_formReward)
        let _rewards: any = form_parse
        console.log(_rewards)
        SetgetRewards(_rewards)
        
    }, [])
    return(
        <Col xs={6}>
            <H3>LISTA DE RECOMPENSAS</H3>
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
                    getRewards && getRewards.map( (reward:any, index:number) =>(
                     <Tr key={index}>
                        <Td>{reward.title}</Td>
                        <Td>{reward.cant_reward}</Td>
                        <Td><button>eleminiar</button></Td>
                    </Tr>                        
                    ))
                }

                </tbody> 
            </Table>
        </Col>
    )
}
export default TableReward
