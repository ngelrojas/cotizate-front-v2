import React from 'react'
import PanelAbstract from '../panel-abstract'

interface Istatus {
    status: number
}

const PanelRevision: React.FC<Istatus> = () => {
    return <PanelAbstract status={3} />
}

export default PanelRevision
