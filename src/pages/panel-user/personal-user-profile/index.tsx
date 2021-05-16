import React from 'react'
import PanelGeneral from '../panels-general'
import UserProfile from '../user-profile'

const PersonalUserProfile:React.FC = () => {
    return(
        <PanelGeneral>
            <UserProfile />
        </PanelGeneral>
        
    )
}

export default PersonalUserProfile