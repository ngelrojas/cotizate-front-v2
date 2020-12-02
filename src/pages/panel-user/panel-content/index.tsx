import React from 'react'
import {Row} from 'react-styled-flexboxgrid'
import {CardPanels, ContainerContent} from '../styles'
import ContentPrincipal from './content-principal'


const PanelContent: React.FC = ({children}) => {

    React.useEffect(()=>{

    },[])

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
            <Row>
                <ContainerContent>
                {children} 
                </ContainerContent>
            </Row>
        </div>

    )
}

export default PanelContent
