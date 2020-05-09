import React from 'react'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {
    Section,
    Title,
    Excerpt,
    Foot,
    Btn,
    Bar,
    Wrap,
    Mpoint,
    Picture,
    Place,
    Author
} from './styles'

interface Ibullentin {
    title: string
}
const Bulletin: React.FC<Ibullentin> = props => {
    return (
        <Section>
            <article>
                <Picture>
                    <img
                        src="https://picsum.photos/id/1/280/200"
                        alt="cotizate"
                    />
                </Picture>
                <Place>La Paz</Place>
                <Author>NextFlix</Author>
                <Title>{props.title}</Title>
                <Excerpt>
                    <p>
                        excerpt this post more than more thsn flawe therll core
                        more listke ai tingin fifudnsk is dthdaaldkg porflekams
                    </p>
                </Excerpt>
                <Wrap>
                    <Bar />
                    <Mpoint>58%</Mpoint>
                </Wrap>
                <Foot>
                    <Btn type="button">leer...</Btn>
                </Foot>
            </article>
        </Section>
    )
}
export default Bulletin
