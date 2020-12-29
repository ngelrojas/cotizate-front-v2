import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {device} from '../../../../styles/mediaquery'

export const List = styled.ul`
    display: flex;
    @media ${device.tablet} {
        display: block;
    }
`
export const DivPrincipal = styled.div`   
    
    padding-left: 6%;
    padding-right: 6%;
    @media ${device.tablet} {
        padding-left: 6%;
        padding-right: 6%;
    }
    @media ${device.mobileM} {
        padding-left: 1%;
        padding-right: 1%;
    }
`
export const DivPortada = styled.div`
    padding-left: 10px;
    padding-bottom: 2%;
    padding-top: 2%;
   
    @media ${device.tablet} {
        width: 100%;
        padding-left: 1px;
        margin-bottom: 5%;
        padding-top: 5%;
    }
    @media ${device.mobileM} {
        width: 100%;
        padding-left: 1px;
        margin-bottom: 5%;
        padding-top: 5%;
    }
`
export const TilePortada = styled.span`
    color: #5D5A5A;
    font-family: Roboto;
     
    float: left;
    margin: 1%;
    font-style: normal;

    font-weight: bold;
    font-size: 22px;
   
    @media ${device.tablet} {
        font-size: 20px;      
    }
    @media ${device.mobileM} {
        font-size: 15px;
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
    margin: 2%;
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
export const Contenedor = styled.div`   
    background: #1383C5;
    margin: 2%;
    width:100%;
    @media ${device.tablet} {
    
    }
    @media ${device.mobileM} {
      
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

export const Porcentaje = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5%;
    padding-top: 3%;
   
    @media ${device.tablet} {
        width: 100%;
        padding-left: 1px;
        margin-bottom: 5%;
    }
    @media ${device.mobileM} {
        
    }
`
export const Alcanzado = styled.div`
   
    
    padding-left: 12px;
    padding-top: 17px;

    width: 100%;
    height: 12px;
    padding-bottom: 5%;
    padding-top: 5%;
    top: 1302px;

    color: #F1F1F1;
    font-family: Roboto;
    font-style: normal;
    
    font-size: 16px;
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
export const NumberMontoMeta = styled.span`
    color: #F1F1F1;
    font-family: Roboto;  
    padding-right: 12px;
    float: right;
    margin: 0%;
    font-style: normal;
    font-size: 16px;
    @media ${device.tablet} {
        float: right;
        
    }
`
export const Aportetitle = styled.span`
color: #F1F1F1;
font-family: Roboto;
     
    float: left;
    margin: 1%;
    font-style: normal;

        font-family: Roboto;
        font-weight: 300;
        font-size: 18px;
        
    @media ${device.tablet} {
              
    }
    @media ${device.mobileM} {

    }
`
export const AporteNumber = styled.span`
    color: #F1F1F1;
    font-family: Roboto;
    padding-left: 10px;
    float: left;
    margin: 1%;
    font-style: normal;
    font-size: 20px;
    @media ${device.tablet} {
               
    }
    @media ${device.mobileM} {

    }
`
export const TileDias = styled.span`
color: #F1F1F1;
font-family: Roboto;
     
    float: left;
    margin: 1%;
    font-style: normal;
    font-size: 20px;
    @media ${device.tablet} {
               
    }
    @media ${device.mobileM} {

    }
`
export const Div1 = styled.div`
    padding-left: 10px;
    padding-bottom: 2%;
    padding-top: 2%;
   
    @media ${device.tablet} {
        width: 100%;
        padding-left: 1px;
        margin-bottom: 2%;
        padding-top: 2%;
    }
    @media ${device.mobileM} {
        width: 100%;
        padding-left: 1px;
        margin-bottom: 2%;
        padding-top: 2%;
    }
`
export const TileCode = styled.span`
    color: #F1F1F1;
    font-family: Roboto;
     
    float: left;
    margin: 1%;
    font-style: normal;
    font-size: 16px;
    @media ${device.tablet} {
               
    }
    @media ${device.mobileM} {

    }
`
export const BotonAportar = styled.button`
    background-color: #F4A14C;
    color: #F1F1F1;
    width: 30%;
    
    height: 40px;
    text-transform: uppercase;
    border-radius: 5px;
`
