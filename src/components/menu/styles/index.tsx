import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {device} from '../../../styles/mediaquery'

export const List = styled.ul`
    display: flex;
    @media ${device.tablet} {
        flex-wrap: wrap;
        display: none;
    }
`

export const Item = styled.li`
    margin: 20px;
    align-self: center;
    @media ${device.tablet} {
        flex: 1 1 50%;
    }
`

export const ItemLogo = styled.li`
    margin: 5px 2vw;
    text-align: center;
`

export const Picture = styled.picture`
    width: auto;
    > img {
        width: 50%;
    }
`

export const Go = styled(Link)`
    text-decoration: none;
    font-size: 15px;
    color: #000000;
    &:hover {
        color: #f37a22;
    }
`

export const SubNav = styled.ul`
    display: flex;
    position: absolute;
    left: 0;
    background-color: #dddddd;
    width: 100%;
    z-index: 1;
`
