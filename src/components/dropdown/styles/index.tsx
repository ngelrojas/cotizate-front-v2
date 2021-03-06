import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {device} from '../../../styles/mediaquery'

export const SubNav = styled.ul`
    display: none;
    position: absolute;
    left: 0;
    background-color: #f37a22;
    width: 100%;
    z-index: 1;
    @media ${device.tablet} {
        width: 78%;
    }
`
export const Go = styled(Link)`
    text-decoration: none;
    font-size: 15px;
    color: #fff;
    font-weight: 410;
    &:hover {
        color: #eee;
    }
`

export const Item = styled.li`
    margin: 20px;
    align-self: center;
    @media ${device.tablet} {
        flex: 1 1 50%;
    }
`

export const Span = styled.span`
    &:hover {
        > ul {
            display: flex;
        }
        @media ${device.tablet} {
            > ul {
                display: block;
                margin-left: 90%;
                top: 40%;
            }
        }
    }
`

export const Title = styled.p`
    font-size: 15px;
    color: #3b3b3b;
    font-weight: 410;
    &:hover {
        cursor: pointer;
        color: #f37a22;
    }
`
