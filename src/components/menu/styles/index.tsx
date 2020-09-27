import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {device} from '../../../styles/mediaquery'

export const List = styled.ul`
    display: flex;
    width: 100%;
    @media ${device.tablet} {
        flex-wrap: wrap;
        display: none;
    }
`

export const Item = styled.li`
    margin-left: 6%;
    margin-right: 6%;
    align-self: center;
    @media ${device.tablet} {
        flex: 1 1 50%;
    }
`
export const ItemSearch = styled.li`
    align-self: center;
    width: 22%;
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
    color: #3b3b3b;
    font-weight: 410;
    text-transform: uppercase;
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
