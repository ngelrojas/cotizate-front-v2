import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ContainerCard = styled.div`
   width: 100%; 
   border: 1px solid;
   height: 25vh;
   margin: 1%;
`

export const Spaces = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
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
    color: #F2A85D;
`

export const Edit = styled(Btn)`
    text-decoration: none;
    padding-top: 4%;
    padding-bottom: 4%;
    padding-left: 10%;
    padding-right: 10%;
    &:hover{
        color: #FFFFFF;
        background: #F2A85D;
    }
`

export const Delete = styled(Btn)`
    text-decoration: none;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 4%;
    padding-bottom: 4%;
    &:hover{
        color: #FFFFFF;
        background: red;
    }
`

export const H4 = styled.h4`
   color: #1383C5;
   margin: 0px;
   padding-left: 12%;
`

export const SpacesBtn = styled.div`
    margin-top: 16%;
    margin-bottom: 35%; 
`

export const Box = styled.div`
    padding-top: 16%;
    margin-left: 16%;
`

export const Img = styled.img`
    width: 25vh;
    height: 25vh;
`

export const H3 = styled.h3`
    text-transform: uppercase;
`
