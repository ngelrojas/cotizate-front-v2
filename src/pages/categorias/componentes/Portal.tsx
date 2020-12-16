import React, {useState, useEffect} from 'react';
import {SectionPortal,ImgPortal, DivPortal  } from '../styles/index'
import PortadaCerebroImg2 from './tecnologia-con-texto.png';
import { useHistory } from "react-router-dom";


const Portal: React.FC = () => {
    const history = useHistory();
    useEffect(() => {
       
    }, [])


    return (
        <>
                <SectionPortal   >
                    <DivPortal key={1} >
                        <ImgPortal
                            src={PortadaCerebroImg2}
                            alt="cotizate"
                        />                        
                    </DivPortal>
                </SectionPortal>   
        </>
      
    )
}

export default Portal
