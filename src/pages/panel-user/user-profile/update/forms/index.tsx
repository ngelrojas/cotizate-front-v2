import React from 'react'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import {store} from 'react-notifications-component'

interface Icountry{
    code_name: string
    description: string
    id: number
    name: string
    short_name: string
    slug: string
}

interface Icities{
    code_name: string
    description: string
    id: number
    name: string
    short_name: string
    slug: string
}

interface Iuser{
    email: string
    first_name: string
    id: number
    last_name: string
}

type FormData = {
    address: string
    birthdate: string
    cellphone: string
    cinit: string
    cities: Icities
    complete: boolean
    countries: Icountry
    current_position: string
    description: string
    header: number
    headline: string
    id: number
    neightbordhood: string
    number_address: string
    photo: string
    rs_another: string
    rs_facebook: string
    rs_linkedin: string
    rs_twitter: string
    telephone: string
    user: Iuser
}

type AllProps = {
    profiles: FormData
}

const FormUpdate:React.FC<AllProps> = ({profiles}) => {
    return(
        <h1>here updateing form....{profiles.cinit}</h1>
    )
}

const mapStateToProps = (state: any) => ({
    profiles: state.profile
})

export default connect(mapStateToProps, '')(FormUpdate)