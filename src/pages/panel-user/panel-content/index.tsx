import React from 'react'
import {Route, useRouteMatch} from 'react-router-dom'
import {Row} from 'react-styled-flexboxgrid'
import Created from './created'
import {CardPanels, ContainerContent} from '../styles'

const PanelContent: React.FC= () => {
    let match = useRouteMatch('/panel-de-usuario/')
    console.info(match)

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
                    <Route exact path={`${match ? match.url: ''}/creado`} component={Created} />
                </ContainerContent>
            </Row>
        </div>

    )
}

export default PanelContent
