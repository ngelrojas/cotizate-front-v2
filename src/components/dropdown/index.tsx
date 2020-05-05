import React from 'react'
import {SubNav, Item, Go, Span, Title} from './styles'

const DropDown: React.FC = () => {
    return (
        <div>
            <Span>
                <Title>CATEGORIAS</Title>
                <SubNav>
                    <Item>
                        <Go to="here">subcategory 1</Go>
                    </Item>
                    <Item>
                        <Go to="here">subcategory 2</Go>
                    </Item>
                    <Item>
                        <Go to="here">subcategory 3</Go>
                    </Item>
                </SubNav>
            </Span>
        </div>
    )
}
export default DropDown
