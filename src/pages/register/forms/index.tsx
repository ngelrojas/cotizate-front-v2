import React, {ChangeEvent, FormEvent} from 'react'
import {useForm} from 'react-hook-form'

type FormData = {
    firstName: string
    lastName: string
    email: string
}

const FormRegister: React.FC = () => {
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })
    const onSubmit = handleSubmit(({firstName, lastName, email}) => {
        console.log(firstName, lastName)
    })
    return (
        <form onSubmit={onSubmit}>
            <label>
                <span>Nombres</span>
                <input name="firstName" ref={register({required: true})} />
                {errors.firstName && 'introdusca su nombre porfavor.'}
            </label>
            <label>
                <span>Apellidos</span>
                <input name="lastName" ref={register({required: true})} />
                {errors.lastName && 'ingrese su apillido porfavor.'}
            </label>
            <label>
                <span>Email</span>
                <input
                    name="email"
                    ref={register({required: true, pattern: /\S+@\S+\.\S+/})}
                />
                {errors.email && 'debe introducir un email valido.'}
            </label>

            <button type="submit">REGISTRARSE</button>
        </form>
    )
}

export default FormRegister
