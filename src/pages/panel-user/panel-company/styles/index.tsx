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
    text-align: center;
`

export const Input = styled.input`
    border: 0;
    border-bottom: 1px solid #f37a22;
    padding: 1%;
    margin: 2%;
    width: 100%;
`

export const WrapBtn = styled.div`
    width: 35%;
`

export const Btn = styled.button`
    border: 0;
    border-radius: 2px;
    padding: 1%;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 10%;
    font-size: 0.8em;
`

export const BtnCreate = styled(Btn)`
    width: 30%;
    background-color: #007bff;
`
