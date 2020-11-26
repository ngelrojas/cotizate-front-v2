import React from 'react'
import {connect} from 'react-redux'
import FormConfig from './form-config' 
import FormDescription from './form-description'
import FormPhase from './form-phase'
import FormReward from './form-rewards'
import {WrapBtn, BtnBack, BtnNext} from '../styles'

interface Icounter {
    counter: any 
}

interface Ihandlers {
    handle_Next: any; 
    handle_Back: any; 
}


type AllProps = Icounter & Ihandlers

const FormBasic: React.FC<AllProps> = ({counter, handle_Next, handle_Back}) => {

    const [datai, setDatai] = React.useState()
    const [menu, setMenu] = React.useState(1)

    const handleBack=()=>{
        if(counter === 1){
            setMenu(counter - 1)
        }

        if(counter === 2){
            setMenu(counter - 2)
        }

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

        if(counter >= 1 ){
            index = counter + index
        }

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
const mapStateToProps = (state: any) => ({
    handle_Next: 0,
    handle_Back: 0,
    counter: state.nextForm.counter,
})

export default connect(mapStateToProps)(FormBasic)
