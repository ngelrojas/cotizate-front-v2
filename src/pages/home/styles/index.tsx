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
"

`
export const TitlePatrocinadores = styled.h1`
    
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
    @media ${device.mobileL} {
        text-align: center;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 14px;
    }

`
export const TitleCategoriaIndex = styled.h1`
    
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
    @media ${device.mobileL} {
        text-align: center;
             
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;
    }

`

export const LineCeleste = styled.hr`
    width: 100%;
    height: 3px;
    left: 29.07px;
    top: 3423.45px;
    background: #1986C6;
`;
export const LineMostaza = styled.hr`
    width: 100%;
    height: 3px;
    left: 29.07px;
    top: 3423.45px;
    background: #F69939;  
`;
export const Title2 = styled.h2`
    height: 22px;
    left: 30px;
    top: 842px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #5D5A5A;
`
export const Br = styled.br`
  
`
export const SectionBanner = styled.section`
    width: 100%;
    padding: 1%;

    @media ${device.tablet} {
        width: 100%;
    }
    
`
export const ArticleBanner = styled.article`
    margin: 0%;
    position: relative;
`

export const Section = styled.section`
    width: 85%;
    padding: 1%;

    @media ${device.tablet} {
        width: 100%;
    }
`
export const Sectionportada = styled.section`
    width: 100%;
    padding: 0%;
    
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
export const Go = styled(Link)`
    text-decoration: none;
    color: inherit;
`
export const Div2 = styled.div`
    display:inline-block;
    position:relative;
    width:100%;
`
export const Link2 = styled(Link)`
    position: absolute;
    bottom:4em;
    left:22em;
    right:22em;
    background-color:#1986C6;
    border-radius:1.5em;
    color:white;
    text-transform:uppercase;
    padding:1em 1.5em;
`
export const Btnflotante = styled.button`
    position: absolute;
    bottom:15%;
    left:43%;
    background-color:#1986C6;
    border-radius:1.5em;
    color:white;
    text-transform:uppercase;
    padding:1em 1.5em;
    width: 200px;
    height: 50px;

    @media ${device.tablet} {
        bottom:18%;
        left:40%;
        width: 156px;
        height: 45px;
    }
    @media ${device.mobileM} {
        bottom:15%;
        left:32%;
        width: 135px;
        height: 40px;
    }
`
export const TitlePortadaFlotante = styled.h2`
    height: 22px;
    left: 30px;
    top: 842px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #5D5A5A;
`
export const DivPortada = styled.div`
text-align: center;



 
`
export const TitleCategoria = styled.h2`
    height: 22px;
    left: 30px;
    top: 842px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    font-family: Roboto;
    color: #000000;
    @media ${device.tablet} {
        font-size: 12px;
    
    }
    @media ${device.mobileL} {
        font-size: 12px;
    }
  
`
export const ImgCategoria = styled.img`
    width: 80%;
    border-radius: 2px;
    @media ${device.tablet} {
        width: 40%;
    }
    @media ${device.mobileL} {
        width: 35%;
    }
`
export const DivCategoria = styled.div`
  text-align: center;
  width: 50%;
  
  @media ${device.tablet} {
    width: 70%;
    }
    @media ${device.mobileM} {
        width: 90%;
    }
`
export const ImgPatrocinador = styled.img`
    width: 100%;
    border-radius: 2px;
    justify-content:center;
    @media ${device.tablet} {
        width: 80%;
    }
    @media ${device.mobileM} {
        width: 95%;
    }
`
export const SectionPatrocinadores= styled.section`
    
   
    @media ${device.tablet} {
        width: 100%;
    }
    
`