import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {device} from '../../../../styles/mediaquery'

export const Label = styled.label`
    width: 100%;
    display: block;
    margin-top: 10%;
    margin-bottom: 14%;
    > span {
        display: block;
        margin: 2%;
        color: red;
        font-size: 12px;
    }
    > input {
        width: 100%;
        border: 0;
        border-bottom: 1px solid #f37a22;
        padding: 1%;
        color: #3b3b3b;
    }
`

export const Btn = styled.button`
    border: 0;
    background-color: #007bff;
    border-radius: 2px;
    padding: 4%;
    color: #ffffff;
    width: 95%;
    border: 1px solid #007bff;
    &:hover {
        cursor: pointer;
    }
`

export const Form = styled.form`
    width: 30%;
    @media ${device.tablet} {
        width: 50%;
    }
    @media ${device.mobileM} {
        width: 100%;
    }
`

export const SuccessInfo = styled.span`
    margin: 2%;
    color: green;
    font-size: 1rem;
`

export const Accept = styled.span`
    font-size: 0.8rem;
    text-align: justify;
    color: #3b3b3b;
    @media ${device.mobileM} {
        margin-top: 5%;
        margin-bottom: 5%;
    }
`

export const Go = styled(Link)`
    font-size: 0.8rem;
    text-decoration: none;
    color: #f37a22;
    @media ${device.mobileM} {
        margin-top: 5%;
        margin-bottom: 5%;
    }
`
