import styled from 'styled-components'
import {Grid, Row} from 'react-styled-flexboxgrid'
import { MdNavigateNext } from 'react-icons/md'
import {Link} from 'react-router-dom'
import {device} from '../../styles/mediaquery'

export const FooterMain = styled.footer`
    height: 4em;
`

export const H5 = styled.h5`
    text-align: center;
    color: #ffffff;
    font-size: 20px;
`

export const H5S = styled(H5)`
    text-align: left;
    margin-left: 13%;
`

export const List = styled.ul`
    margin-bottom: 5%;
    margin-left: 23%;
    @media ${device.mobileM} {
        background-color: #dddddd;
        margin: -4%;
        padding-left: 6%;
        padding-top: 2%;
        padding-bottom: 2%;
    }
`
export const ListOC = styled(List)`
    margin-left: 14%;
`

export const Item = styled.li`
    margin-top: 5%;
    margin-bottom: 7%;
`

export const Go = styled(Link)`
    text-decoration: none;
    color: #ffffff;
    font-size: 0.9rem;
    &:hover {
        color: #f37a22;
    }
`

export const GridC = styled(Grid)`
    background-color: #1986C6;
`

export const FormS = styled.form`
    posititon: relative;
    width: 100%
`

export const Input = styled.input`
    width: 100%;
    height: 35px;
    border: 0;
    border-radius: 3%;
    padding: 2%;
`
export const IconNext = styled(MdNavigateNext)`
    color:#ffffff;
    font-size: 2rem;
`

export const Button = styled.button`
    background-color: #F69939;
    position: absolute;
    right: 1.7%;
    border-radius: 3%; 
`
export const RowC = styled(Row)`
    justify-content: center;
`

export const H6 = styled.h6`
    color: #ffffff;
`

export const Img = styled.img`
    width:52.25px;
    height: 50px;
`

export const SpaceDiv = styled.div`
    margin-left: 5%;
    margin-right; 5%;
`
