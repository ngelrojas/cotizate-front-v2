import styled from 'styled-components'
import {Tabs, Tab, TabList} from 'react-tabs'
import {device} from '../../../styles/mediaquery'

export const Content = styled.main`
    height: auto;
    min-height: 100%;
    padding: 3em 1em 4em 1em;
    box-sizing: border-box;
    width: 100%;
`

export const TabContent = styled(Tabs)`
    width: 100%;
`

export const TabLists = styled(TabList)`
    display: flex;
    @media ${device.mobileM} {
        display: block;
        overflow: hidden;
    }
`

export const TabHead = styled(Tab)`
    margin: 5%;
    width: 50%;
    float: left;
    cursor: pointer;
    text-align: center;
    &:hover {
        color: #f37a22;
    }
    @media ${device.mobileM} {
        width: 100%;
        text-align: left;
    }
`

export const Title = styled.h1`
    font-size: 20px;
    text-align: center;
    color: #f37a22;
    margin-bottom: 5%;
    @media ${device.mobileM} {
        margin-bottom: 15%;
    }
`
