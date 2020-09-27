import React from 'react'
import {useForm} from 'react-hook-form'


type datai ={
    resp:number 
}
type FormData = {
    resp: number
}
const FormSteps: React.FC<datai> = (datai)=>{
    const [display, setDisplay] = React.useState(false) 
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(() => {
       console.info(datai)
        
    })
    return(
        <div>
        <form action="" onSubmit={onSubmit}>
            <input type="text" required />
        </form>
        </div>
    )
}

export default FormSteps
