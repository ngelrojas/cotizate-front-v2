import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {device} from '../../../../styles/mediaquery'

interface Iprops {
    isopen: boolean
}
export const WrapMenu = styled.div`
    display: none;
    @media ${device.tablet} {
        display: block;
    }
`

export const Go = styled(Link)`
    text-decoration: none;
    font-size: 15px;
    color: #3b3b3b;
    &:hover {
        color: #f37a22;
    }
`

export const Item = styled.li`
    margin-top: 20%;
    margin-bottom: 20%;
`

export const List = styled.ul`
    background-color: #dddddd;
    position: absolute;
    padding: 1%;
    @media ${device.mobileM} {
        width: 50%;
    }
`
