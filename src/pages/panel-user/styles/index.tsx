import styled from 'styled-components'
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
    float:left;
`
