import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {device} from '../../../../styles/mediaquery'

export const List = styled.ul`
    display: flex;
    @media ${device.tablet} {
        display: block;
    }
`
export const Br = styled.br`
  
`
export const Title = styled.h1`
    
    padding-top: 5px;
    height: 22px;
    left: 30px;
    top: 842px;
    padding-left:6px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #5D5A5A;
    margin-bottom: 15px;

`
export const DivPrincipal = styled.div`   
    
    padding-left: 4%;
    padding-right: 4%;
    @media ${device.tablet} {
        padding-left: 3%;
        padding-right: 3%;
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
    margin: 0%;
    font-style: normal;

    font-weight: bold;
    font-size: 22px;
   
    @media ${device.tablet} {
        margin: 2%;
        font-size: 16px;      
    }
    @media ${device.mobileM} {
        margin: 2%;
        font-size: 12px;
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
        padding-left: 0px;        
        padding-right: 0px;
    }
    @media ${device.mobileL} {
        width: 100%;
        margin-bottom: 20px;
        padding-left: 0px;        
        padding-right: 0px;
    }
`
export const Picture = styled.picture`
    height: auto;
    width: 100%;
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
    margin-left: 2%;
    margin-right: 1%;
    margin-top: 2%;
    margin-bottom: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 3%;
    padding-right: 3%;
    @media ${device.tablet} {
    
    }
    @media ${device.mobileM} {
        margin-left: 0%;
        margin-right: 0%;
    }

`
export const TitleVideo1 = styled.h1`
    color: #f9f9f9;
    font-weight: 410;
    
    bottom: 0px;
    left:0px;
    background: #2B76B1;
    text-align: justify;
    padding: 1%;    
    font-size: 15px;
    width:100%;    
    
`
export const DivTitlevideo = styled.div`   
    background: #2B76B1;
    padding-bottom: 1%;
    padding-top: 1%;    
    padding-left: 10px;
    padding-right: 10px;
    @media ${device.tablet} {
    
    }
    @media ${device.mobileM} {
    }

`

export const Porcentaje = styled.div`
    // padding-left: 10px;
    // padding-right: 10px;
    padding-bottom: 5%;
    padding-top: 3%;
   
    @media ${device.tablet} {
        width: 100%;
        // padding-left: 1px;
        // margin-bottom: 5%;
    }
    @media ${device.mobileM} {
        
    }
`
export const Alcanzado = styled.div`
   
    
    // padding-left: 12px;
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
        // padding-left: 1px;
        padding-top: 5%;
        margin-bottom: 10%;
    }
    @media ${device.mobileM} {
        // padding-left: 1px;
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
    padding-top: 1%;
    @media ${device.tablet} {
        float: right;
        padding-top: 1%;
        
    }
    @media ${device.mobileM} {

    }
    
`
export const AlcanceText = styled.span`
    color: #F1F1F1;
    font-family: Roboto;  
    padding-right: 12px;
    float: left;
    margin: 0%;
    font-style: normal;
    font-size: 16px;
    padding-top: 1%;
    @media ${device.tablet} {
        float: left;
        padding-top: 1%;
        padding-left: 2%;
        margin-top:1%;
    }
    @media ${device.mobileM} {
        float: left;
        padding-left: 2%;
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
    // padding-left: 10px;
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
    // padding-left: 10px;
    padding-bottom: 2%;
    padding-top: 2%;
   
    @media ${device.tablet} {
        width: 100%;
        // padding-left: 1px;
        margin-bottom: 2%;
        padding-top: 2%;
    }
    @media ${device.mobileM} {
        width: 100%;
        // padding-left: 1px;
        margin-bottom: 2%;
        padding-top: 2%;
    }
`
export const DivCod = styled.div`
    // padding-left: 10px;
    padding-bottom: 2%;
    padding-top: 6%;
   
    @media ${device.tablet} {
        width: 100%;
        // padding-left: 1px;
        margin-bottom: 2%;
        padding-top: 2%;
    }
    @media ${device.mobileM} {
        width: 100%;
        // padding-left: 1px;
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
export const DivTitle = styled.div`   
    
    padding-left: 1%;
    padding-right: 0%;
    margin-bottom: 2%;
    padding-top: 2%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
    @media ${device.tablet} {
        font-size: 17px;
    }
    @media ${device.mobileM} {
        font-size: 12px;
    }
`
export const Input = styled.input`
    width: 40%;    
    height: 30px;
    
`
export const DivSociable = styled.div`   
    
    @media ${device.tablet} {
        
    }
    @media ${device.mobileM} {
        
    }
`
export const ButtonEnlace = styled.button`
  display: inline-block;
  color: #1383C5;
  font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
  text-decoration: none;
//   border: 2px solid palevioletred;
  border-radius: 3px;
`
export const BotonCopiar = styled.button`
    background-color: #F4A14C;
    color: #F1F1F1;
    width: 30%;
    
    // height: 40px;
    text-transform: uppercase;
    border-radius: 5px;
`
export const DivSeparador = styled.div`
        background:#F5F5F5;
        margin-top: 2%;
        margin-bottom: 2%;
        padding-top: 2%;
        padding-bottom: 2%;
        padding-left: 1%;
        padding-right: 1%;
    @media ${device.tablet} {
        margin-top: 1%;
        margin-bottom: 1%;
    }
    @media ${device.mobileM} {
        margin-top: 1%;
        margin-bottom: 1%;
    }
`
export const Texto = styled.div`   
    color: #5D5A5A;
    font-family: Roboto;
    font-style: normal;
    margin-top: 1%;
    font-weight: normal;
    display: block;
    align-items: center;
    font-size: 14px;
    line-height: 19px;
    @media ${device.tablet} {
        line-height: 17px;
        margin-top: 1%;
    }
    @media ${device.mobileM} {
        line-height: 16px;
        margin-top: 1%;
    }
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
export const LinkAzul = styled(Link)`
    text-decoration: none;    
    color: #1383C5;
    font-weight: 600;
`
export const Go = styled(Link)`
    text-decoration: none;    
    color: #5D5A5A;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
`
export const ImgPortal = styled.img`
    width: 100%;
    padding-left: 0%;
    padding-right: 0%;

    @media ${device.tablet} {

    }
    @media ${device.mobileL} {
  

    }
`
export const DivSin = styled.div`
        background:#F5F5F5;
        
        padding-left: 0%;
        padding-right: 0%;
    @media ${device.tablet} {

    }
    @media ${device.mobileM} {

    }
`
export const DivSeparadorSinColor = styled.div`   
        width:100%,     
        margin-top: 2%;
        margin-bottom: 2%;
        padding-top: 2%;
        padding-bottom: 2%;
        padding-left: 1%;
        padding-right: 1%;
    @media ${device.tablet} {
        margin-top: 1%;
        margin-bottom: 1%;
    }
    @media ${device.mobileM} {
        margin-top: 1%;
        margin-bottom: 1%;
    }
`
export const LinkAzul2 = styled(Link)`
    text-decoration: none;    
    color: #1383C5;
    align-items: center;
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
`
export const ButtonBordeAzul = styled.button`
  background: #FFFFFF;
  border-radius: 0px;
  border: 1px solid #1383C5;
  color: #1383C5;
  font-size: 17px;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

`
export const DivBorderSinColor = styled.div`   
        background:#F5F5F5;
        width:100%,     
        margin-top: 2%;
        margin-bottom: 2%;
        padding-top: 2%;
        padding-bottom: 2%;
        padding-left: 1%;
        padding-right: 1%;
        border: 1px solid #6C6C6C;
    @media ${device.tablet} {
        margin-top: 1%;
        margin-bottom: 1%;
    }
    @media ${device.mobileM} {
        margin-top: 1%;
        margin-bottom: 1%;
    }
`
export const Texto2 = styled.p`   
    color: #000000;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    display: flex;
    align-items: center;
    font-size: 17px;
    line-height: 19px;
    @media ${device.tablet} {
        line-height: 17px;
    }
    @media ${device.mobileM} {
        line-height: 16px;
    }
`
export const Texto3 = styled.p`   
    color: #6C6C6C;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    display: flex;
    align-items: center;
    font-size: 17px;
    line-height: 25px;
    @media ${device.tablet} {
        line-height: 17px;
    }
    @media ${device.mobileM} {
        line-height: 16px;
    }
`
export const Autor = styled.p`   
    color: #000000;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    display: flex;
    align-items: center;
    font-size: 17px;
    line-height: 25px;
    @media ${device.tablet} {
        line-height: 17px;
    }
    @media ${device.mobileM} {
        line-height: 16px;
        text-align:center
    }
`
export const DivSeparador2 = styled.div`
        background:#FCF2E9;
        margin-top: 2%;
        margin-bottom: 2%;
        padding-top: 2%;
        padding-bottom: 2%;
        padding-left: 1%;
        padding-right: 1%;
    @media ${device.tablet} {
        margin-top: 1%;
        margin-bottom: 1%;
    }
    @media ${device.mobileM} {
        margin-top: 1%;
        margin-bottom: 1%;
    }
`
export const TitleDonacion = styled.h1`
    color: #1383C5;
    font-style: normal;
    font-weight: normal;
    padding-top: 1%;
    padding-bottom: 2%;
    
    @media ${device.tablet} {
      
    }
    @media ${device.mobileM} {
        padding-top: 1%;
        padding-bottom: 1%;
    }
`
export const TitleAportaciones = styled.h2`
    color: #1383C5;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 23px;
    line-height: 26px;
    padding-top: 2%;
    padding-bottom: 3%;
    text-transform: uppercase;
    @media ${device.tablet} {
      
    }
    @media ${device.mobileM} {
        padding-top: 1%;
        padding-bottom: 1%;
    }
`
export const TitleAportaciones2 = styled.h2`
    color: #1383C5;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 26px;
    padding-top: 2%;
    padding-bottom: 3%;
    text-transform: uppercase;
    @media ${device.tablet} {
      
    }
    @media ${device.mobileM} {
        padding-top: 1%;
        padding-bottom: 1%;
    }
`
export const SubTitleAportacion = styled.h2`
    color: #5D5A5A;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 21px;
    padding-top: 2%;
    padding-bottom: 3%;
    @media ${device.tablet} {
      
    }
    @media ${device.mobileM} {
        padding-top: 1%;
        padding-bottom: 1%;
    }
`
export const TextoSubtitulo = styled.p`   
    color: #5D5A5A;
    font-family: Roboto;
    font-style: normal;
    margin-top: 4%;
    margin-bottom: 3%;
    font-weight: normal;
    display: flex;
    align-items: center;
    font-size: 20px;
    line-height: 19px;
    @media ${device.tablet} {
        line-height: 17px;
        font-size: 20px;
        margin-top: 1%;
    }
    @media ${device.mobileM} {
        line-height: 16px;
        font-size: 17px;
        margin-top: 4%;
    }
`
export const TextoSubtitulo2 = styled.p`   
    color: #F2A85D;
    font-family: Roboto;
    font-style: normal;
    margin-top: 4%;
    margin-bottom: 3%;
    font-weight: normal;
    display: flex;
    align-items: center;
    font-size: 20px;
    line-height: 19px;
    @media ${device.tablet} {
        line-height: 17px;
        font-size: 20px;
        margin-top: 1%;
    }
    @media ${device.mobileM} {
        line-height: 16px;
        font-size: 17px;
        margin-top: 4%;
    }
`

export const TitleFase = styled.h4`
    color: #2A8EC8;
    font-style: normal;
    // font-weight: normal;
    // padding-top: 1%;
    // padding-bottom: 2%;
    
    @media ${device.tablet} {
      
    }
    @media ${device.mobileM} {
        padding-top: 1%;
        padding-bottom: 1%;
    }
`
export const DivBorderSinAzulado = styled.div`   
        background:#F5F5F5;
        width:100%,     
        margin-top: 2%;
        margin-bottom: 2%;
        padding-top: 2%;
        padding-bottom: 2%;
        padding-left: 1%;
        padding-right: 1%;
        // display:flex;
        justify-content: center;
        // align-items: center;        
        
    @media ${device.tablet} {
        margin-top: 1%;
        margin-bottom: 1%;
        padding-bottom: 10px;
        padding-top: 10px;
    }
    @media ${device.mobileM} {
        margin-top: 0%;
        margin-bottom: 0%;
        padding-bottom: 10px;
        padding-top: 10px;

    }
`
export const TextoAportadores = styled.p`   
    color: #5D5A5A;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 25px;
    padding-right: 10px;


    @media ${device.tablet} {
        line-height: 16px;
        padding-right: 8px;
    }
    @media ${device.mobileM} {
        line-height: 15px;
        padding-right: 5px;
    }
`
export const TextoComentarioTitle = styled.p`   
    color: #5D5A5A;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    display: flex;
    align-items: center;
    font-size: 15px;
    line-height: 25px;
    padding-right: 10px;
    text-transform: uppercase;

    @media ${device.tablet} {
        line-height: 16px;
        padding-right: 8px;
    }
    @media ${device.mobileM} {
        line-height: 15px;
        padding-right: 5px;
    }
`
export const TextoComentario = styled.p`   
    color: #5D5A5A;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 25px;
    padding-right: 10px;
    padding-left: 12px;


    @media ${device.tablet} {
        line-height: 16px;
        padding-right: 8px;
    }
    @media ${device.mobileM} {
        line-height: 15px;
        padding-right: 5px;
    }
`
export const TextoDanger = styled.p`   
    color: #FF0000;
    font-family: Roboto;
    font-style: normal;
    margin-top: 4%;
    margin-bottom: 3%;
    font-weight: 300;
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 19px;
    @media ${device.tablet} {
        line-height: 17px;
        font-size: 16px;
        margin-top: 1%;
    }
    @media ${device.mobileM} {
        line-height: 16px;
        font-size: 15px;
        margin-top: 4%;
    }
`