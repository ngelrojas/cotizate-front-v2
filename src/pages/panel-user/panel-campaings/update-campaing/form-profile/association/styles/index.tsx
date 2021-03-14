import styled from 'styled-components'

export const ContentProfile = styled.div`
    background-color: #FCF2E9;
`

export const Input = styled.input`
    width: 80%;
    padding: 1%;
    float: right;
    height: 49px;
`

export const WrapperBox = styled.div`
    margin-top: 5%;
`

export const WrapperBoxLast = styled(WrapperBox)`
    margin-bottom: 10%;
    overflow: hidden;
`

export const Span = styled.div`
    width: 16%;
    float: left;
`

export const SpanAssiaction = styled(Span)`
    margin-bottom: 4%;
`

export const SpanAE = styled(Span)`
    width: 40%;
    margin-bottom: 5%;
`

export const ErrorInput = styled.div`
    color: red;
    text-align: center;
    overflow: hidden;
    width: 100%;
`

export const SelectInput = styled.select`
    width: 80%;
    padding: 1%;
    float: right; 
    height: 49px;
`

export const TextArea = styled.textarea`
    width: 80%;
    padding: 1%;
    float: right; 
`

export const InfoText = styled.p`
    margin-top: 10%;
    margin-bottom:5%;
    color: #2A8EC8;
    text-align: center;
`

export const ProfileImg = styled.img`
    width: 30%;
`

export const SecondSpan = styled.p`
    width: 100%;
    overflow: hidden;
    margin-bottom: 4%;
    color: #828282;
    margin-top: 5%;
`

export const SpanDescription = styled.div`
    width: 30%;
    margin-bootom: 5%;
`

export const SaveProfile = styled.button`
    text-transform: uppercase;
    background-color: #F2A85D; 
    color: #ffffff;
    width: 100%;
    padding: 2%;
    margin-bottom: 5%;
    border-radius: 2px;
`

export const SpanPhoto = styled(Span)`
    width: 20%;
`

export const MsgSuccess = styled.p`
    width: 100%;
    color: green;
    text-align: center;
    margin-top: 4%;
    margin-bottom: 4%;
    text-transform: uppercase;
`
