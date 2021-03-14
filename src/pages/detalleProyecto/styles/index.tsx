import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {device} from '../../../styles/mediaquery'


export const Section = styled.section`
    width: 85%;
    padding: 1%;

    @media ${device.tablet} {
        width: 100%;
    }
`