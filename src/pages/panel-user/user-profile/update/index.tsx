import React from 'react'
import {useRouteMatch} from 'react-router'
import PanelGeneral from '../../panels-general'
import {PersonalProfile} from '../../../../userProfile'

const UpdateProfile:React.FC = () => {
    let match_id = useRouteMatch('/dashboard-de-usuario/perfiles-de-usuario/actualizar-perfil/:id')
    let matchUrl: any = match_id
    let profile_id:number = matchUrl.params.id
    let token = window.sessionStorage.getItem('token')
    let profilePersonal = new PersonalProfile(token)

    const [getProfilePersonal, setProfilePersonal] = React.useState([])
    const [getIsloading, setIsloading] = React.useState(true)

    const loadProfilePersonal = () => {
        profilePersonal.currentPersonalProfile(profile_id)
            .then(resp => {
                setProfilePersonal(resp.data.data)
            }).catch(err=>{
                console.error(err)
            }).then(()=>{
                setIsloading(false)
            })
    }

    React.useEffect(()=>{
        loadProfilePersonal()
    },[])

    return (
        <PanelGeneral>
            {!getIsloading && getProfilePersonal ? (
                getProfilePersonal.map((field:any) =>{
                    return <input type="text" value={field.cinit} />
                })
            ):('loading')

            }
        </PanelGeneral>
    )
}

export default UpdateProfile