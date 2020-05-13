import React from 'react'
import {WrapDots, Dots} from './styles'
interface Imsg {
    message: string
}

const Loading: React.FC<Imsg> = props => {
    return (
        <WrapDots>
            {props.message} <Dots />
        </WrapDots>
    )
}

export default Loading
