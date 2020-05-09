import React, {useState, useEffect} from 'react'
import {Grid} from 'react-styled-flexboxgrid'
import {Content} from './styles'
import Bulletin from '../../components/bulletin'
import API from '../../api'

const Home: React.FC = () => {
    const [content, setContent] = useState(
        'titulo more longer the now more here please'
    )

    return (
        <Content>
            <Grid fluid>
                <h1>home page</h1>
                <Bulletin title={content} />
            </Grid>
        </Content>
    )
}

export default Home
