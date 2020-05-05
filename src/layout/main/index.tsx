import React, {Fragment} from 'react'
import {GlobalLayout} from '../../styles'

export const Layout: React.FC = ({children}) => {
    return (
        <Fragment>
            <GlobalLayout />
            {children}
        </Fragment>
    )
}
