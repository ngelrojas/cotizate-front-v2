import styled from 'styled-components'

export const Content = styled.main`
    height: auto;
    min-height: 100%;
    padding: 0em 1em 4em 1em;
    box-sizing: border-box;
    width: 100%;
`

export const Title = styled.h1`
    text-transform: uppercase;
    font-size: 18px;
    color: #f37a22;
`

export const Label = styled.label`
    margin: 4%;
    float: left;
    width: 33%;
    position: relative;
`

export const Form = styled.form`
    width: 100%;
    margin: 3%;
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
    width: 100%;
    margin: 5%;
`

export const Btn = styled.button`
    border: 0;
    border-radius: 2px;
    background-color: #007bff;
    padding: 1%;
    color: #fff;
    width: 74%;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 10%;
`

export const ErrorInfo = styled.span`
    position: absolute;
    top: 101%;
    padding-left: 4%;
    padding-right: 4%;
    color: red;
    width: 100%;
    text-align: center;
`
export const InfoSuccess = styled.p`
    margin: 2%;
    color: green;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 410;
    width: 84%;
`

export const InfoError = styled.p`
    margin: 2%;
    color: red;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
`

export const Line = styled.div`
    width: 100%;
    height: 5px;
    overflow: hidden;
`

export const BtnShow = styled.button`
    border: 0;
    background-color: #ddd;
    text-transform: uppercase;
    padding: 1%;
    width: 100%;
    cursor: pointer;
`

export const Span = styled.p`
    width: 100%;
    overflow: hidden;
    text-align: center;
    color: red;
`
