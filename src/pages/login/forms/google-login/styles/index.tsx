import styled from 'styled-components'
import GoogleLogin from 'react-google-login'

export const SuccessInfo = styled.p`
    margin: 6%;
    color: green;
    text-align: center;
`

export const WarningInfo = styled.p`
    margin: 6%;
    color: orange;
    text-align: center;
`

export const BtnGoogle = styled(GoogleLogin)`
    border: 0;
    background-color: #007bff;
    border-radius: 2px;
    padding: 4%;
    color: #fefefe;
    width: 95%;
    &:hover {
        cursor: pointer;
    }
`
