import styled from 'styled-components'
import {MdDone, MdClear} from 'react-icons/md'
import {Link} from 'react-router-dom'

export const Table = styled.table`
    width: 100%;
    margin-top: 5%;
    margin-bottom: 10%;
`

export const Th = styled.th`
    padding: 3%;
    background-color: #FEF8F3;
    text-align: center;
    text-transform: uppercase;
`

export const Td = styled.td`
    padding-top: 4%;
    text-align: center;
`

export const Done = styled(MdDone)`
    color: #1986C6;
    font-size: 25px;
`

export const Err = styled(MdClear)`
    color: red;
    font-size: 25px;
`

export const Preview = styled(Link)`
    width: 100%;
    background-color: #007bff;
    border-radius: 3%;
    color: white;
    padding: 1%;
    text-decoration: none;
    display: block;
    text-align: center;
`
