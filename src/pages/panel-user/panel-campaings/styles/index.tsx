import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Content = styled.main`
    height: auto;
    min-height: 100%;
    padding: 3em 1em 4em 1em;
    box-sizing: border-box;
    width: 100%;
`

export const H1 = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 5%;
`

export const Title = styled.div`
    width: 100%;
`

export const Table = styled.table`
    width: 100%;
    margin-top: 3%;
`

export const Th = styled.th`
    padding-top: 1%;
    padding-bottom: 1%;
`
export const Td = styled.td`
    padding-top: 2%;
`

export const Btn = styled.button`
    border: 0px;
    border-radius: 2px;
    color: #dddddd;
    padding: 1.1%;
    text-transform: uppercase;
    cursor: pointer;
`

export const BtnCreate = styled(Link)`
    margin-bottom: 5%;
    background-color: #007bff;
    border: 0px;
    border-radius: 2px;
    color: #dddddd;
    padding: 1.1%;
    text-transform: uppercase;
    text-decoration: none;
`
export const BtnUpdate = styled(BtnCreate)`
    background-color: #f37a22;
    font-size: 14px;
`
export const BtnDelete = styled(BtnCreate)`
    background-color: red;
    font-size: 14px;
`
