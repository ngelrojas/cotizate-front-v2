import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {WrapMenu, Go, Item, List} from './styles'
import {Menu2Outline} from '@styled-icons/evaicons-outline/Menu2Outline'

const ResponsiveMenu: React.FC = () => {
    const [isopen, SetIsopen] = useState(false)

    return (
        <WrapMenu>
            <Menu2Outline onClick={() => SetIsopen(!isopen)} size="40" />
            {isopen ? (
                <List>
                    <Item>
                        <Go to="sub">subcategory 1</Go>
                    </Item>
                    <Item>
                        <Go to="sub">subcategory 2</Go>
                    </Item>
                    <Item>
                        <Go to="sub">subcategory 3</Go>
                    </Item>
                </List>
            ) : null}
        </WrapMenu>
    )
}

export default ResponsiveMenu
