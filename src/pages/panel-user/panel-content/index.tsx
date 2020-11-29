import React from 'react'
import {Row} from 'react-styled-flexboxgrid'
import {useRouteMatch} from 'react-router-dom'
import {CardPanels, ContainerContent} from '../styles'
import Created from './created'
import ContentPrincipal from './content-principal'


const PanelContent: React.FC = () => {
    let match = useRouteMatch('/panel-de-usuario/proyectos/:name_content')
    let matchUrl: any = match
    let type_content = matchUrl !== null ? matchUrl.params.campania : '' 
    const [NameContent, setNameContent] = React.useState()

    const ContentMain = (name_content: string) => {
        switch(name_content){
            case 'creados':
                return <Created /> 
            default:
                return <ContentPrincipal />
        }
    }

    React.useEffect(()=>{
        setNameContent(type_content)

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
                    {ContentMain(NameContent)} 
                </ContainerContent>
            </Row>
        </div>

    )
}

export default PanelContent
