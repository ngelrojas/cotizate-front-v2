import React from 'react'
import CotizateLogo from './img/cotizate.png'
import {Picture} from './styles'
import {Link} from 'react-router-dom'

const Logo: React.FC = () => {
    return (
        <Picture>
            <Link to="/">
                <img src={CotizateLogo} alt="cotizate" />
            </Link>
        </Picture>
    )
}

export default Logo
