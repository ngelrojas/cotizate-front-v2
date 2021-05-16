import React from 'react'
import PanelGeneral from '../panels-general'
import Profile from '../panel-profile'

const PersonalUser: React.FC = () => {
    return(
        
        <PanelGeneral>
            <Profile />
        </PanelGeneral>
    )
}

export default PersonalUser

