import styled from 'styled-components'

export const BtnUpdate = styled.button`
    background-color: orange;
    padding: 2%;
    color: #dddddd;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    width: 100%;
    &:hover {
        cursor: pointer;
    }
`

export const Form = styled.form`
    width: 100%;
`

export const Label = styled.label`
    margin: 4%;
    float: left;
    width: 42%;
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
    width: 30%;
    overflow: hidden;
    padding-top: 2%;
    margin: 0 auto;
`

export const BtnSave = styled.button`
    background-color: blue;
    color: #fff;
    width: 100%;
    text-transform: uppercase;
    border-radius: 2px;
`

export const BtnClose = styled.button`
    background-color: red;
    color: #dddddd;
    width: 3%;
    border-radius: 50%;
`

export const MsgError = styled.span`
    position: absolute;
    color: red;
    text-align: center;
    width: 100%;
    left: 3%;
    top: 100%;
`
export const BreakLine = styled.div`
    width: 100%;
    overflow: hidden;
`

export const H4 = styled.h3`
    text-transform: uppercase;
    text-align: center;
    color: #007bff;
`

export const MsgSuccess = styled.p`
    text-align: center;
    color: green;
`
