import styled from 'styled-components'
import {device} from '../../../styles/mediaquery'
import {Link} from 'react-router-dom'

export const Content = styled.main`
    height: auto;
    min-height: 100%;
    padding: 3em 1em 4em 1em;
    box-sizing: border-box;
    width: 100%;
`
export const Contentbody = styled.main`
    height: auto;
    min-height: 100%;
    padding: 3em 1em 4em 1em;
    box-sizing: border-box;
    width: 100%;
    margin-left: 22px;
    margin-right: 22px;
    @media ${device.tablet} {
        margin-left: 15px;
        margin-right: 15px;
    }
    @media ${device.mobileL} {
        margin-left: 0px;
        margin-right: 0px;
    }

`
export const SectionPortal = styled.section`
    width: 100%;
    padding: 0%;
    
    @media ${device.tablet} {
        width: 100%;
    }
    
`
export const ImgPortal = styled.img`
    width: 100%;
    border-radius: 2px;
`
export const DivPortal = styled.div`
    display:inline-block;
    position:relative;
    width:100%;
`