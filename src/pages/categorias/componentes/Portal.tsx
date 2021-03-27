import React from 'react';
import {SectionPortal,ImgPortal, DivPortal  } from '../styles/index'
import PortadaCerebroImg2 from './tecnologia-con-texto.png';

interface Iportal {
    imagenPotal:string
}

const Portal: React.FC<Iportal> = (props) => {
    
    return (
        <>
                <SectionPortal   >
                    <DivPortal key={1} >
                        <ImgPortal
                            // src={PortadaCerebroImg2}
                            src={props.imagenPotal? 'http://165.227.203.226:9000/mediafiles/'+props.imagenPotal: PortadaCerebroImg2}
                            alt="cotizate"
                        />                        
                    </DivPortal>
                </SectionPortal>   
        </>
      
    )
}

export default Portal
