import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Tab, TabList} from 'react-tabs'

export const Content = styled.main`
    height: auto;
    min-height: 100%;
    padding: 3em 1em 4em 1em;
    box-sizing: border-box;
    width: 100%;
`

export const H1 = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 5%;
`

export const H3 = styled.h3`
    text-transform: uppercase;
    text-align: center;
    color: #007bff;
`

export const Title = styled.div`
    width: 100%;
`

export const Btn = styled.button`
    border: 0px;
    border-radius: 2px;
    color: #dddddd;
    padding: 1.1%;
    text-transform: uppercase;
    cursor: pointer;
`

export const BtnCreate = styled(Link)`
    margin-bottom: 5%;
    background-color: #007bff;
    border: 0px;
    border-radius: 2px;
    color: #dddddd;
    padding: 1.1%;
    text-transform: uppercase;
    text-decoration: none;
`

export const BtnCreateCampaing = styled(Btn)`
    margin-bottom: 5%;
    background-color: #f37a22;
    border: 0px;
    border-radius: 2px;
    color: #dddddd;
    padding: 1.1%;
    text-transform: uppercase;
    text-decoration: none;
    width: 100%;
`
export const TabMenu = styled(TabList)`
    display: flex;
    margin-top: 3%;
    margin-bottom: 5%;
`

export const TabSubMenu = styled(Tab)`
    width: 100%;
    text-align: center;
    cursor: pointer;
    &:hover {
        color: #f37a22;
    }
`

export const Label = styled.label`
    width: 33%;
    position: relative;
`

export const Input = styled.input`
    border: 0;
    border-bottom: 1px solid #f37a22;
    padding: 1%;
    width: 100%;
`

export const FormSubTitle = styled.p`
    text-transform: uppercase;
    width: 100%;
    color: #007bff;
    margin-bottom: 4%;
    margin-top: 4%;
    font-size: 14px;
    font-weight: 410;
    padding: 1%;
`

export const WrapBtn = styled.div`
    width: 100%;
    overflow: hidden;
    margin-top: 4%;
`

export const BtnNext = styled(Btn)`
    background-color: #007bff;
    float: right;
`

export const BtnSaveProject = styled(Btn)`
    background-color: #007bff;
    width: 100%;
`
export const Form = styled.form`
    width: 60%;
    margin: 0 auto;
`

export const FormR = styled.form`
    width: 90%;
    margin: 0 auto;
`

export const MsgError = styled.span`
    width: 100%;
    left: 0%;
    top: 150%;
    color: red;
    text-align: center;
    margin-top: 2%;
    margin-bottom: 2%;
`

export const MsgErrorForm = styled.div`
    width: 100%;
    left: 0%;
    top: 150%;
    color: red;
    text-align: left;
    margin-top: 2%;
    margin-bottom: 2%;
`

export const MsgSuccess = styled.p`
    width: 100%;
    color: green;
    text-align: center;
    margin-top: 4%;
    margin-bottom: 4%;
`

export const SelectCat = styled.select`
    border: 0px;
    width: 100%;
    padding: 1.5%;
    background-color: #007bff;
    color: #ddd;
    &:after {
        background-color: #fff transparent transparent transparent;
    }
`

export const TagLabel = styled.label`
    text-transform:uppercase;
    padding: 1%;
    font-size: 15px;
`

export const Table = styled.table`
    width: 100%;
    margin-top: 10%;
`

export const Thead = styled.thead`
    text-transform: uppercase;
    color: #f37a22;
`

export const Th = styled.th`
    padding: 8px;
    font-size: 14px;
`

export const Td = styled.td`
    padding: 8px;
`

export const Tr = styled.tr`
    text-align: center;
`
