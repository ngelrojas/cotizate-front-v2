import React from 'react'
import PanelAbstract from '../panel-abstract'

interface Istatus {
    status:number
}

const PanelCreated: React.FC<Istatus> = () => {

    return <PanelAbstract status={2} />

}


export default PanelCreated
