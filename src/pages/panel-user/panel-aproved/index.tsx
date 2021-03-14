import React from 'react'
import PanelAbstract from '../panel-abstract'

interface Istatus {
    status: number
}

const PanelAproved: React.FC<Istatus> = () => {
    return <PanelAbstract status={4} />
}

export default PanelAproved
