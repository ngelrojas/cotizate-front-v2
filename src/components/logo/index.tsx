import React from 'react'
import CotizateLogo from './img/cotizate.png'
import {Picture} from './styles'

const Logo: React.FC = () => {
    return (
        <Picture>
            <img src={CotizateLogo} alt="cotizate" />
        </Picture>
    )
}

export default Logo
