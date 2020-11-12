import React, {useState, useEffect} from 'react';
import {Section, Article, Picture, Go,Img, Title } from '../styles/index'
import PortadaImg from '../images/portadanueva.png'


const Portada: React.FC = () => {
    const [content, setContent] = useState('')
    useEffect(() => {
        setContent('titulo more longer the now more here please')
    }, [])

    return (
        <>
            <Section  >
                <Article>
                    <Picture>
                        <Go to="/my-article">
                            <Img
                                src={PortadaImg}
                                alt="cotizate"
                            />
                        </Go>
                    </Picture>
                    <Title>hola quehace</Title>
                </Article>
            </Section>      
        </>
      
    )
}

export default Portada
