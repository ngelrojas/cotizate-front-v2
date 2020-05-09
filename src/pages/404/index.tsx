import React from 'react'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import {Content} from './styles'

const PageNotFound: React.FC = () => {
    return (
        <Content>
            <Grid>
                <Row>
                    <Col>
                        <h1>ERROR</h1>
                        <h1>404</h1>
                        <h1>PAGINA NO ECONTRADA</h1>
                    </Col>
                </Row>
            </Grid>
        </Content>
    )
}
export default PageNotFound
