import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {device} from '../../styles/mediaquery'

export const FooterMain = styled.footer`
    height: 4em;
`

export const H5 = styled.h5`
    text-align: center;
    color: #3b3b3b;
`

export const List = styled.ul`
    margin-bottom: 5%;
    @media ${device.mobileM} {
        background-color: #dddddd;
        margin: -4%;
        padding-left: 6%;
        padding-top: 2%;
        padding-bottom: 2%;
    }
`

export const Item = styled.li`
    margin-top: 5%;
    margin-bottom: 7%;
`

export const Go = styled(Link)`
    text-decoration: none;
    color: #3b3b3b;
    font-size: 0.9rem;
    &:hover {
        color: #f37a22;
    }
`
