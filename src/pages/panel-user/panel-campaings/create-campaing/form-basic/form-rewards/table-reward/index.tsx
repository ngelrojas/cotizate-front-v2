import React from 'react'
import {Col} from 'react-styled-flexboxgrid'
import {
    H3,
    Table,
    Thead,
    Th,
    Td,
    Tr
} from '../../../styles'

const TableReward: React.FC = ()=>{
    const [getRewards, SetgetRewards] = React.useState()
    let _formReward:any = window.localStorage.getItem('formReward')  
    let form_parse = JSON.parse(_formReward)
    let _rewards: any = form_parse

    React.useEffect(() => {
        if(_rewards){
           SetgetRewards(_rewards) 
        }
    }, [])
    const handleDelete = (e:number) => {
        const conjunt = _rewards.slice(0, e).concat(_rewards.slice(e + 1, _rewards.length))
        console.log(conjunt) 
        window.localStorage.setItem('formReward', JSON.stringify(conjunt))
    }

    return(
        <Col>
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
                        <Td><button type="button" onClick={()=>handleDelete(index)}>eleminiar</button></Td>
                    </Tr>                        
                    ))
                }

                </tbody> 
            </Table>
        </Col>
    )
}
export default TableReward
