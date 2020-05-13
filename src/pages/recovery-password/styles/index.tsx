import styled from 'styled-components'

export const Content = styled.main`
    height: auto;
    min-height: 100%;
    padding: 3em 1em 4em 1em;
    box-sizing: border-box;
    width: 100%;
`

export const Title = styled.h1`
    margin-top: 5%;
    margin-bottom: 5%;
    color: #f37a22;
    text-align: center;
`

export const SubTitle = styled.h3`
    margin-top: 5%;
    margin-bottom: 5%;
    color: #3b3b3b;
    text-align: center;
`

export const BoxSend = styled.input`
    border: 0;
    width: 100%;
    border-bottom: 1px solid #f37a22;
    padding: 2%;
`

export const BtnSend = styled.button`
    background-color: #007bff;
    border: 0;
    width: 100%;
    color: #ffffff;
    padding: 5%;
    margin-top: 10%;
    border-radius: 1px;
`

export const ErrorInfo = styled.p`
    color: red;
    margin-top: 5%;
    text-align: center;
`

export const SuccessInfo = styled.p`
    color: green;
    margin-top: 5%;
    text-align: center;
`

export const WrapDots = styled.p`
    text-align: center;
    color: orange;
`
export const Dots = styled.span`
    &::after {
        display: inline-block;
        animation: ellipsis 1.25s infinite;
        content: '.';
        width: 1em;
        text-align: left;
    }
    @keyframes ellipsis {
        0% {
            content: '.';
        }
        33% {
            content: '..';
        }
        66% {
            content: '...';
        }
    }
`
