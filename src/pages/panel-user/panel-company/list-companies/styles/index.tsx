import styled from 'styled-components'
// import {Btn} from '../../styles'
import {Link} from 'react-router-dom'

export const Table = styled.table`
    margin-top: 5%;
    width: 100%;
`

export const Th = styled.th`
    color: #007bff;
    text-align: center;
`

export const Td = styled.td`
    padding-top: 2%;
`

export const BtnUpdate = styled(Link)`
    background-color: orange;
    padding: 2%;
    color: #dddddd;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 410;
`

export const BtnDelete = styled(Link)`
    background-color: red;
    padding: 2%;
    color: #dddddd;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    width: 100%;
    display: inline-block;
    text-align: center;
    font-weight: 410;
`

export const Activate = styled.span`
    background-color: green;
    padding: 10%;
    display: inline-block;
    border-radius: 2px;
`

export const NotActivate = styled.span`
    background-color: red;
    padding: 10%;
    display: inline-block;
    border-radius: 2px;
`
