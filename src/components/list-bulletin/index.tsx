import React, {useState} from 'react'
import Bulletin from '../bulletin'
import {List} from './styles'

const ListBulletin: React.FC = () => {
    const [content, setContent] = useState(
        'titulo more longer the now more here please'
    )
    return (
        <List>
            <li>
                <Bulletin title={content} />
            </li>
            <li>
                <Bulletin title={content} />
            </li>
            <li>
                <Bulletin title={content} />
            </li>
        </List>
    )
}

export default ListBulletin
