import React from 'react'
import {connect} from 'react-redux'
import {useRouteMatch} from 'react-router'
import PanelGeneral from '../../panels-general'
import {loadPersonalData} from '../../../../redux/actions/profile.actions'
// import {PersonalProfile} from '../../../../userProfile'
import FormUpdate from './forms'

const UpdateProfile:React.FC = (props:any) => {
    let match_id = useRouteMatch('/dashboard-de-usuario/perfiles-de-usuario/actualizar-perfil/:id')
    let matchUrl: any = match_id
    let profile_id:number = matchUrl.params.id

    React.useEffect(()=>{
        props.loadPersonalData(profile_id)
    },[])

    return (
        <PanelGeneral>
            <h1>ACTUALIZAR PERFIL</h1>
            <FormUpdate />
        </PanelGeneral>
    )
}
const mapStateToProps = (state: any) => ({
    profile: state.profile
})

const mapActionToProps = {
    loadPersonalData
}

export default connect(mapStateToProps,mapActionToProps)(UpdateProfile)