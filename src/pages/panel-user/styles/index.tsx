import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import {Col} from 'react-styled-flexboxgrid'
import {Tab, Tabs, TabPanel, TabList} from 'react-tabs'

export const Content = styled.main`
    height: auto;
    min-height: 100%;
    padding: 3em 1em 4em 1em;
    box-sizing: border-box;
    width: 100%;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 20px;
    color: #f37a22;
`

export const TabItem = styled(Tab)`
    margin-top: 15%;
    margin-bottom: 15%;
    color: #3b3b3b;
    text-transform: uppercase;
`

export const TabContent = styled(Tabs)`
    width: 100%;
    position: relative;
`

export const TabPanels = styled(TabPanel)`
    margin-left: 15%;
    margin-top: 2%;
    width: 75%;
`

export const TabLists = styled(TabList)`
    width: 25%;
    float: left;
    cursor: pointer;
`

export const Img = styled.img`
    width: 100%;
    border-radius: 50%;
    height: 204px;
`

export const DivImg = styled.div`
    width: 90%;
    margin: 0 auto;
`

export const ProfileName = styled.p`
    text-align: center;
    margin-top: 5%;
    margin-bottom: 5%;
`

export const ContainerCo = styled(Container)`
    max-width: 100%!important;
    padding-left: 2%!important;
    padding-right: 2%!important;
`

export const CardPanels = styled(Col)`
    background-color: #c4c4c4;
    height: 170px;
`

export const ContainerContent = styled.div`
    margin: 5%;
`

export const ContainerPC = styled.div`
    margin:  4%;
`
