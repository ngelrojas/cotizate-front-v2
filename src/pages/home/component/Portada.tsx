import React, {useState, useEffect} from 'react';
import {Sectionportada, Article, Picture, Go,Img, Title, Div2, Link2, Btnflotante, TitlePortadaFlotante,SubTitlePortadaFlotante } from '../styles/index'
import PortadaImg from '../images/7portada-nueva-crow.png';
import PortadaCerebroImg2 from '../images/portada/cerebro-con-texto.png';
import PortadaMundoImg1 from '../images/portada/mundo-con-texto.png';
import PortadaSolidarioImg3 from '../images/portada/SOLIDARIO-CON-TEXTO.png';
import { useHistory } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Portada: React.FC = () => {
    const [content, setContent] = useState('');
    const history = useHistory();
    useEffect(() => {
        setContent('titulo more longer the now more here please')
    }, [])

    const  handleSubmit = () => {        
        history.push("/registrarse");
    };
    const responsive = {
        superLargeDesktop: {          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <>
            <Carousel  
            responsive={responsive} 
            infinite={true} 
            arrows={false}
            autoPlaySpeed={2500} 
            autoPlay={true}  
            >
                <Sectionportada   >
                    <Div2 key={1} >
                        <Img
                            src={PortadaMundoImg1}
                            alt="cotizate"
                        />
                        <Btnflotante onClick={handleSubmit} > Registrate  </Btnflotante>
                        {/* <TitlePortadaFlotante> Bienvenino a Cotizate! </TitlePortadaFlotante>
                        <SubTitlePortadaFlotante>Cotizate un plataforma para conseguir inversion para tu idea </SubTitlePortadaFlotante> */}
                    </Div2>
                </Sectionportada>    
                <Sectionportada   >
                    <Div2 key={2} >
                        <Img
                            src={PortadaCerebroImg2}
                            alt="cotizate"
                        />
                        <Btnflotante onClick={handleSubmit} > Registrate  </Btnflotante>
                    </Div2>
                </Sectionportada>   
                <Sectionportada  >
                    <Div2 key={3} >
                        <Img
                            src={PortadaSolidarioImg3}
                            alt="cotizate"
                        />
                        <Btnflotante onClick={handleSubmit} > Registrate  </Btnflotante>
                    </Div2>
                </Sectionportada>  
            </Carousel> 
        </>
      
    )
}

export default Portada
