import styled from 'styled-components'
import {device} from '../../../styles/mediaquery'

export const Picture = styled.picture`
    display: none;
    width: auto;
    > img {
        width: 50%;
    }
    @media ${device.tablet} {
        display: block;
        text-align: right;
        width: 93%;
        > img {
            width: 30%;
            text-align: right;
        }
    }
    @media ${device.mobileM} {
        display: block;
        width: 86%;
        margin-top: 2%;
        > img {
            width: 40%;
            text-align: right;
        }
    }
`
