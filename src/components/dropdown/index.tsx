import React from 'react'
import {SubNav, Item, Go, Span, Title} from './styles'

const DropDown: React.FC = () => {
    return (
        <div>
            <Span>
                <Title>CATEGORIAS</Title>
                <SubNav>
                    <Item>
                        <Go to="#">category one</Go>
                    </Item>
                    <Item>
                        <Go to="#">category one</Go>
                    </Item>
                    <Item>
                        <Go to="#">category one</Go>
                    </Item>
                </SubNav>
            </Span>
        </div>
    )
}
export default DropDown
