import React from 'react'
import {H5S, ListOC, Item, Go, FormS, Input, IconNext,
Button} from './styles'


const OurCommunity:React.FC = ()=>{
    return(
        <>
            <H5S>SUSCRIBETE</H5S>
            <ListOC>
                <Item>
                    <FormS action="">
                        <Input type="text" placeholder="EMAIL" name="subscribe" />
                        <Button><IconNext /></Button>
                    </FormS>
                </Item>
            </ListOC>
        </>
)
}

export default OurCommunity
