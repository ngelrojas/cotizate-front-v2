import React from 'react'
import PanelAbstract from '../panel-abstract'

interface Istatus {
    status: number
}

const PanelPublic: React.FC<Istatus> = () => {
    return <PanelAbstract status={5} />
}

export default PanelPublic
