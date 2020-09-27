import styled from 'styled-components'
import {Link} from 'react-router-dom'
// import {Tab, TabList} from 'react-tabs'
import { MdLens, MdPanoramaFishEye } from 'react-icons/md'
import { Tabs, TabList, Tab, TabPanels, TabPanel} from '@reach/tabs';

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

export const H4 = styled(H3)`
    text-align: left;
    margin-top: 5%;
    margin-bottom: 2%;
    font-size: 18px;
`

export const TextConf = styled.p`
    font-size: 18px;
    color: #828282;
    margin-bottom: 6%;
`

export const TextMain = styled.p`
    font-size: 18px;
    color: #828282;
`

export const Title = styled.div`
    width: 100%;
`

export const Btn = styled.button`
    border: 0px;
    border-radius: 2px;
    color: #fff;
    padding: 2.1%;
    text-transform: uppercase;
    cursor: pointer;
    width: 20%;
`

export const BtnLink = styled(Link)`
    border: 0px;
    border-radius: 2px;
    color: #fff;
    padding: 2.1%;
    text-transform: uppercase;
    cursor: pointer;
    width: 20%;
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
export const TabNav = styled(TabList)`
    background-color: #ffffff;
    margin-bottom: 5%;
`

export const TabSubMenu = styled(Tab)`
    width: 33%;
    border-bottom: 0px;
`

export const Label = styled.label`
    width: 33%;
    position: relative;
`

export const Input = styled.input`
    width: 45%;
    height: 49px;
    padding-left: 2%;
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
    width: 50%;
    overflow: hidden;
    margin-top: 4%;
    float:left;
`

export const WrapBtnSave = styled(WrapBtn)`
    width: 95%;
`

export const WrapBtnAdd = styled(WrapBtn)`
    margin-top: 0%;
`

export const BtnNext = styled(Btn)`
    background-color:#F4A14C ;
    float: right;
    font-size: 14px;
`

export const BtnBack = styled(Btn)`
    background-color:#F4A14C ;
    float: left;
    text-decoration: none;
    text-align: center;
    font-size: 14px;
`

export const BtnSaveProject = styled(Btn)`
    background-color: #007bff;
    width: 100%;
    padding: 1.5%;
    font-size: 16px;
`

export const Form = styled.form`
    width: 100%;
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
    text-align: center;
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

export const IconOn = styled(MdLens)`
    color: #f37a22;
`

export const WrapperBox = styled.div`
    background-color:#FCF2E9;
    padding-top: 4%;
    padding-bottom: 4%;
    padding-left: 6%;
    padding-right: 1%;
    margin-bottom: 4%;
`

export const WrapperBoxTable = styled(WrapperBox)`
    width:100%;
`

export const BoxTitle = styled.p`
    margin-bottom: 1%;
`

export const BoxText = styled.p`
    margin-bottom: 1%;
    color: #828282;
`

export const BoxSelect = styled.select`
    width: 45%;
    height: 49px;
`

export const BoxInput = styled.input`
    width: 45%;
    height: 49px;
    padding-left: 5%;
`

export const BoxInputDuration = styled(BoxInput)`
    padding-left: 2%;
`

export const WrappBoxInput = styled.div`
    position: relative;
`

export const BS = styled.p`
    background-color: #F2A85D;
    padding-top: 1.5%;
    padding-left: 1%;
    padding-right: 1%;
    position: absolute;
    top: 0%;
    height: 49px;
    color: #fff;
`

export const Img = styled.img`
    width: 305px;
`

export const ImgText = styled.p`
    width: 50%;
    color: #1383C5;
`

export const WrapperBoxRD = styled.div`
    background-color:#FCF2E9;
    padding-top: 4%;
    padding-bottom: 4%;
    padding-left: 4%;
    padding-right: 4%;
    margin-bottom: 4%;
`

export const WrapperSave = styled.div`
    width: 40%;
    position: absolute;
    margin-left: 12%;
    margin-top: 0.8%;
`
