import React from 'react'
import {H5, List, Item, Go} from './styles'


const OurCommunity:React.FC = ()=>{
    return(
<>
                        <H5>NUESTRA COMUNIDAD</H5>
                        <List>
                            <Item>
                                <Go to="#">Facebook</Go>
                            </Item>
                            <Item>
                                <Go to="#">LinkedIn</Go>
                            </Item>
                            <Item>
                                <Go to="#">Twitter</Go>
                            </Item>
                        </List>
</>
)
}

export default OurCommunity
