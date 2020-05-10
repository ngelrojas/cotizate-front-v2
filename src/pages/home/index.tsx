import React from 'react'
import {Grid} from 'react-styled-flexboxgrid'
import {Content} from './styles'
import ListBulletin from '../../components/list-bulletin'

const Home: React.FC = () => {
    return (
        <Content>
            <Grid fluid>
                <h1>home page</h1>
                <ListBulletin />
            </Grid>
        </Content>
    )
}

export default Home
