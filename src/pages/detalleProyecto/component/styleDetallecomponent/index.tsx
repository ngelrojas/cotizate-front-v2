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
export const SectionDetails = styled.section`
    width: 95%;
    background: #F2F2F2;
    padding-left: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    padding-top: 0px;
    margin: 1%;
    
    

    @media ${device.tablet} {
        width: 92%;
    }
    @media ${device.mobileL} {
        width: 100%;
    }
`
export const Article = styled.article`
    margin: 0%;
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
export const TextoDescription = styled.div`   
    color: #5D5A5A;
    font-family: Roboto;
    font-style: normal;
    margin-top: 1%;
    font-weight: normal;
    display: block;
    align-items: center;
    font-size: 14px;
    line-height: 19px;   
    flex-wrap: nowrap;
    @media ${device.tablet} {
        line-height: 17px;
        margin-top: 1%;
    }
    @media ${device.mobileM} {
        line-height: 16px;
        margin-top: 1%;
    }
`
export const TextoDescriptionRecom = styled.div`   

            p > img{
                width: 100%;
                height:200px!important;
            }      
        @media ${device.tablet} {
            p > img{
                width: 100%;
                height:190px!important;
            }       
        }
        @media ${device.mobileM} {
            p > img{
                width: 100%;
                height:190px!important;
                margin:0 auto;
            }     
}        
`

export const Title = styled.h1`
    font-family: Roboto;
    color: #f9f9f9;
    font-weight: 410;
    position: absolute;
    bottom: 4px;
    background: #2B76B1;
    text-align: justify;
    padding: 1%;
    text-transform: uppercase;
    font-size: 12px;
    width:100%;
    @media ${device.tablet} {
        
    }
    @media ${device.mobileL} {
        
    }

`
export const TitleCity = styled.h1`
    font-family: Roboto;
    color: #f9f9f9;
    font-weight: 410;
    position: absolute;
    bottom: 4px;    
    text-align: justify;
    padding: 1%;
    text-transform: uppercase;
    font-size: 15px;
    width:100%;
    @media ${device.tablet} {
        
    }
    @media ${device.mobileL} {
        
    }

`

export const Excerpt = styled.p`
    color: #1383C5;
    margin: 2%;
    text-align: justify;
    width: 97%;
    text-overflow: ellipsis;
    white-space: nowrap;
   overflow: hidden;
    @media ${device.tablet} {
        margin: 0%;
        padding-bottom: 8%;
        width: 100%;
    }
    @media ${device.mobileM} {
        width: 100%;
        padding-bottom: 2%;
    }
`
export const Description = styled.p`

    width: 97%;
    // height: 26px;
    left: 50px;
    margin: 2%;
    top: 1216px;
    padding-bottom: 10%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 135.1%;

    display: flex;
    align-items: center;

    color: #6C6C6C;
    text-overflow: ellipsis;
    white-space: nowrap;   
    overflow: hidden;
    
    @media ${device.tablet} {
        margin: 0%;
        padding-bottom: 8%;
        font-size: 11px;
        width: 100%;
    }
    @media ${device.mobileM} {
        width: 100%;
        padding-bottom: 2%;
        font-size: 11px;
    }
`
export const Author = styled.div`
    margin: 2%;
    color: #007bff;
    font-size: 13px;
    padding-bottom: 4%;
    font-weight: 410;
    @media ${device.tablet} {
        width: 100%;
        margin: 1%;
        margin-bottom: 4%;
    }
`
export const CodigoFaltante = styled.div`
    margin: 2%;
    color: #3b3b3b;
    font-size: 12px;
    padding-bottom: 10%;
    font-weight: 410;
    @media ${device.tablet} {
        width: 100%;
        margin: 1%;
        margin-bottom: 10%;
    }
`
export const Alcanzado = styled.div`
   
    
    padding-left: 5px;
    width: 100%;
    height: 12px;
    padding-bottom: 10%;
    top: 1302px;

    color: #000000;
    font-family: Roboto;
    font-style: normal;
    
    font-size: 10px;
    line-height: 12px;
    @media ${device.tablet} {
        width: 80%;
        padding-left: 1px;
        margin-bottom: 10%;
    }
    @media ${device.mobileM} {
        padding-left: 1px;
        width: 100%;
        font-style: normal;
        line-height: 12px;
    }

`
export const Porcentaje = styled.div`
   
    
    padding-left: 5px;
    padding-bottom: 5%;
   
    @media ${device.tablet} {
        width: 100%;
        padding-left: 1px;
        margin-bottom: 5%;
    }
    @media ${device.mobileM} {
        
    }
`
export const Place = styled.div`
    margin: 1%;
    color: #5D5A5A;
    font-weight: 410;
    font-family: Roboto;
    float: left;
    font-size: 10px;
    text-align: left;
    line-height: 11px;
    > svg {
        color: green;
    }
    @media ${device.tablet} {
        width: 100%;
        margin: 0%;
        margin-top: 6%;
        margin-bottom: 10%;
        text-align: left;
    }
    @media ${device.mobileM} {
        margin-right: 0%;
        width: 100%;
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
    
    float: right;
    margin: 2%;
    color: #5D5A5A;
    font-style: normal;
    font-size: 12px;
    @media ${device.tablet} {
        float: right;
    }
`
export const NumberMonto = styled.span`
color: #000000;
font-family: Roboto;
     
    float: right;
    margin: 2%;
    font-style: normal;
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
