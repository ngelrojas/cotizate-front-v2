import React, {useState, useEffect} from 'react'
import {List,Section} from './styles'
import Projectdetails from './Projectdetails'
import * as Action from '../../../redux/actions/homeAction';

const Projects: React.FC = () => {
    const [content, setContent] = useState('')
    useEffect(() => {
        setContent('titulo more longer the now more here please')
    }, [])

    return (
        <>
            {/* <List> */}
                {/* <li> */}
                   <Projectdetails title={'titulo 1'}/>                           

                {/* </li>    */}
                      
                              
            {/* </List>             */}
            
        </>
    )
}

export default Projects

