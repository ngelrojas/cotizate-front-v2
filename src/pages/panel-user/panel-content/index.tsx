import React from 'react'
import {Row} from 'react-styled-flexboxgrid'
import {CardPanels} from '../styles'


const PanelContent: React.FC = () => {
    return(
        <div>
            <Row around="xs">
            <CardPanels xs={2}>
                panel one
            </CardPanels>
            <CardPanels xs={2}>
                panel one
            </CardPanels>
            <CardPanels xs={2}>
                panel one
            </CardPanels>
            <CardPanels xs={2}>
                panel one
            </CardPanels>
            </Row>
        </div>

    )
}

export default PanelContent
