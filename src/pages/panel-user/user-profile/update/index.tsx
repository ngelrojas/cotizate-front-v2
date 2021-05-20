import React from 'react'
import {connect} from 'react-redux'
import {useRouteMatch} from 'react-router'
import PanelGeneral from '../../panels-general'
import {loadPersonalData} from '../../../../redux/actions/profile.actions'
import {PersonalProfile} from '../../../../userProfile'

const UpdateProfile:React.FC = (props:any) => {
    let match_id = useRouteMatch('/dashboard-de-usuario/perfiles-de-usuario/actualizar-perfil/:id')
    let matchUrl: any = match_id
    let profile_id:number = matchUrl.params.id
    let token = window.sessionStorage.getItem('token')
    let profilePersonal = new PersonalProfile(token)

    const [getProfilePersonal, setProfilePersonal] = React.useState([])
    const [getIsloading, setIsloading] = React.useState(true)

    // const loadProfilePersonal = () => {
    //     profilePersonal.currentPersonalProfile(profile_id)
    //         .then(resp => {
    //             setProfilePersonal(resp.data.data)
    //         }).catch(err=>{
    //             console.error(err)
    //         }).then(()=>{
    //             setIsloading(false)
    //         })
    // }

    React.useEffect(()=>{
        // loadProfilePersonal()
        setProfilePersonal(props.loadPersonalData(profile_id))
        
    },[getProfilePersonal])

    React.useEffect(()=>{
        console.info("SECOND CALLED")
        console.log(getProfilePersonal)   
    },[getProfilePersonal])

    return (
        <PanelGeneral>
            panel update
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