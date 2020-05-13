import React, {useState, useEffect} from 'react'
import Bulletin from '../bulletin'
import {List} from './styles'

const ListBulletin: React.FC = () => {
    const [content, setContent] = useState('')
    useEffect(() => {
        setContent('titulo more longer the now more here please')
    }, [])

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
