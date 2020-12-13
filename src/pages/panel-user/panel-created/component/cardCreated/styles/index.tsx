import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ContainerCard = styled.div`
   width: 50%; 
   padding-top: 3%;
   border: 1px solid;
`

export const Spaces = styled.div`
    margin-top: 2%;
    margin-bottom: 2%;
`

export const Label = styled.p`
    width: 75px;
    float: left;
`

export const Btn = styled(Link)`
    background: #FFFFFF;
    border: 1px solid #1383C5;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 4%;
    color: #F2A85D;
`

export const Edit = styled(Btn)`
    text-decoration: none;
    &:hover{
        color: #FFFFFF;
        background: #F2A85D;
    }
`

export const Delete = styled(Btn)`
    text-decoration: none;
    &:hover{
        color: #FFFFFF;
        background: red;
    }
`

export const H5 = styled.h5`
   color: #1383C5;
   text-align: rigth;
`

export const SpacesBtn = styled.div`
    margin-top: 2%;
    margin-bottom: 12%; 
`
