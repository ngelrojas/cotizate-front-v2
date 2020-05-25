import styled from 'styled-components'

export const Form = styled.form`
    width: 100%;
`

export const Label = styled.label`
    margin: 4%;
    float: left;
    width: 33%;
    position: relative;
`
export const Input = styled.input`
    border: 0;
    border-bottom: 1px solid #f37a22;
    padding: 1%;
    margin: 2%;
    width: 100%;
`
export const FormSubTitle = styled.p`
    text-transform: uppercase;
    width: 100%;
    color: #007bff;
    margin-bottom: 4%;
    font-size: 14px;
    font-weight: 410;
    padding: 3%;
`

export const WrapBtn = styled.div`
    width: 40%;
    overflow: hidden;
    padding-top: 2%;
    margin: 0 auto;
`

export const BtnSave = styled.button`
    background-color: blue;
    color: #fff;
    width: 65%;
    text-transform: uppercase;
    border-radius: 2px;
`

export const BreakLine = styled.div`
    width: 100%;
    overflow: hidden;
`

export const MsgError = styled.span`
    position: absolute;
    width: 100%;
    left: 14%;
    top: 100%;
    color: red;
`

export const MsgSuccess = styled.div`
    width: 100%;
    text-align: center;
    color: green;
`
