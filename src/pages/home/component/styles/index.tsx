import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {device} from '../../../../styles/mediaquery'

export const List = styled.ul`
    display: flex;
    @media ${device.tablet} {
        display: block;
    }
`

export const Section = styled.section`
    width: 85%;
    padding: 1%;

    @media ${device.tablet} {
        width: 100%;
    }
`

export const Article = styled.article`
    margin: 3%;
    position: relative;
`
export const ArticleBody = styled.article`
    margin: 3%;
    position: relative;
`

export const Picture = styled.picture`
    height: auto;
`
export const Img = styled.img`
    width: 100%;
    border-radius: 2px;
`

export const Title = styled.h1`
    color: #f9f9f9;
    font-weight: 410;
    position: absolute;
    bottom: 4px;
    background: #00000047;
    text-align: justify;
    padding: 1%;
    text-transform: uppercase;
    font-size: 15px;
`

export const Excerpt = styled.p`
    color: #3b3b3b;
    margin: 2%;
    text-align: justify;
    padding-bottom: 10%;
    @media ${device.tablet} {
        margin: 0%;
        padding-bottom: 8%;
    }
    @media ${device.mobileM} {
        width: 17%;
        padding-bottom: 2%;
    }
`
export const Author = styled.div`
    margin: 4%;
    color: #007bff;
    font-size: 12px;
    font-weight: 410;
    @media ${device.tablet} {
        width: 100%;
        margin: 1%;
        margin-bottom: 10%;
    }
`
export const Place = styled.div`
    margin: 6%;
    color: #007bff;
    font-weight: 410;
    float: right;
    font-size: 12px;
    > svg {
        color: green;
    }
    @media ${device.tablet} {
        width: 100%;
        margin: 0%;
        margin-top: 6%;
        margin-bottom: 10%;
        text-align: right;
    }
    @media ${device.mobileM} {
        margin-right: 0%;
    }
`

export const PercentTitle = styled.span`
    text-transform: uppercase;
    margin: 2%;
    color: #3b3b3b;
    font-size: 12px;
    font-weight: 410;
`
export const PercentNumber = styled.span`
    font-size: 15px;
    float: right;
    margin: 2%;
    color: #007bff;
    font-size: 12px;
    @media ${device.tablet} {
        float: right;
    }
`

export const Bar = styled.div`
    height: 5%;
    bottom: 0%;
    width: 58%;
    padding: 4%;
    position: absolute;
    background: rgb(243, 122, 34);
    background: linear-gradient(
        -90deg,
        rgba(243, 122, 34, 0.8995799003195029) 31%,
        rgba(237, 186, 123, 1) 83%,
        rgba(237, 186, 123, 1) 90%
    );
    filter: opacity(0.4);
    @media ${device.mobileM} {
        margin-left: -50%;
    }
`

export const Go = styled(Link)`
    text-decoration: none;
    color: inherit;
`
