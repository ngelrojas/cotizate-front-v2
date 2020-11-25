import React, {useState, useEffect} from 'react';
import {Sectionportada, Article, Picture, Go,Img, Title, Div2, Link2, Btnflotante } from '../styles/index'
import PortadaImg from '../images/7portada-nueva-crow.png';
import { useHistory } from "react-router-dom";


const Portada: React.FC = () => {
    const [content, setContent] = useState('');
    const history = useHistory();
    useEffect(() => {
        setContent('titulo more longer the now more here please')
    }, [])

    const  handleSubmit = () => {        
        history.push("/registrarse");
    };

    return (
        <>
            <Sectionportada  >
               {/* <Div2 > */}
                    <Img
                        src={PortadaImg}
                        alt="cotizate"
                    />
                    <Btnflotante onClick={handleSubmit} > Registrate  </Btnflotante>
               {/* </Div2> */}

            </Sectionportada>      
        </>
      
    )
}

export default Portada
