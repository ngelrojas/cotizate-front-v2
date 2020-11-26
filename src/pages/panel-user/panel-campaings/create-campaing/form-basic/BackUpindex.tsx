import React from 'react'
import FormConfig from './form-config' 
import FormDescription from './form-description'
import FormPhase from './form-phase'
import FormReward from './form-rewards'
import {WrapBtn, BtnBack, BtnNext} from '../styles'

const FormBasic: React.FC = () => {

    const [datai, setDatai] = React.useState()
    const [menu, setMenu] = React.useState(1)

    const handleBack=()=>{
        let rest:number = 0 
        if(menu > 1){
            rest = menu - 1 
            setMenu(rest)
        }
    }

    const handleNext = ()=>{
        
        let menu_length:number = 5 
        let increment:number = menu + 1
        
        if(increment === menu_length){
            increment = datai
            setMenu(datai)
        }

        setDatai(1)
        setMenu(increment)
    }

    const stepForm = (index: number) => {
        switch(index){
            case 1: 
                return <FormConfig />
            case 2: 
                return <FormDescription />
            case 3: 
                return <FormPhase />
            case 4: 
                return <FormReward />
            default: 
                return <FormConfig />
        }
    }

    return (
        <>
            {
               stepForm(menu) 
            }
            <div>           
            <WrapBtn>
                <BtnBack onClick={handleBack}>volver</BtnBack>
            </WrapBtn>
            <WrapBtn>
                <BtnNext  onClick={handleNext}>siguiente</BtnNext>
            </WrapBtn>
            </div>

        </>

    )
}

export default FormBasic
