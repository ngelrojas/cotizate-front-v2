import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {device} from '../../../../styles/mediaquery'

export const List = styled.ul`
    display: flex;
    @media ${device.tablet} {
        display: block;
    }
`
export const Article = styled.article`
    margin: 0%;
    position: relative;
    @media ${device.tablet} {
     
    }
    @media ${device.mobileL} {


        padding-top: 0px;
        padding-bottom: 0px;

    }
`
export const SectionDetails = styled.section`
    width: 100%;
    background: #F2F2F2;
    padding-left: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    padding-top: 0px;
    margin: 1%;
    margin-bottom: 50px;

    @media ${device.tablet} {
        width: 100%;
        margin-bottom: 30px;
    }
    @media ${device.mobileL} {
        width: 100%;
        margin-bottom: 20px;
    }
`
export const Picture = styled.picture`
    height: auto;
    width: 100%;
`
export const Go = styled(Link)`
    text-decoration: none;
    color: inherit;
`
export const Img = styled.img`
    width: 100%;
    border-radius: 2px;

    @media ${device.tablet} {

    }
    @media ${device.mobileL} {
  

    }
`
export const TitleVideo1 = styled.h1`
    color: #f9f9f9;
    font-weight: 410;
    position: absolute;
    bottom: 0px;
    left:0px;
    background: #2B76B1;
    text-align: justify;
    padding: 1%;
    text-transform: uppercase;
    font-size: 15px;
    width:100%;

`