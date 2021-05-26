import React from 'react'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import {Row, Col, Grid} from 'react-styled-flexboxgrid'
import {store} from 'react-notifications-component'
import {
    Input,
    LabelTitle
} from '../styles'

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

    const {register, handleSubmit, reset, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    // const onSubmit = handleSubmit (({profiles}) => {
    //     return true
    // })

    return(
        <Grid>
            <form>
                <Row>
                    <Col xs={12}>
                        <h4>Datos Personales</h4>
                    </Col>

                    <Col xs={6}>
                        <label htmlFor="cinit">
                            <LabelTitle>Carnet de Identidad</LabelTitle>
                            <Input 
                                type="number"
                                name="cinit"
                                ref={register({required: true})}
                                placeholder="Carnet de Identidad"
                                defaultValue={profiles.cinit ? profiles.cinit: ''}/>
                        </label>
                    </Col>
                    <Col xs={6}>
                        <label htmlFor="cellphone">
                            <LabelTitle>Numero de Celular</LabelTitle>
                            <Input 
                                type="number"
                                name="cellphone"
                                ref={register({required: true})}
                                placeholder="Numero de Celular"
                                defaultValue={profiles.cellphone ? profiles.cellphone: ''}/>
                        </label>
                    </Col>
                    <Col xs={6}>
                        <label htmlFor="telephone">
                            <LabelTitle>Telefono</LabelTitle>
                            <Input 
                                type="number"
                                name="telephone"
                                ref={register({required: true})}
                                placeholder="Telefono"
                                defaultValue={profiles.telephone ? profiles.telephone: ''}/>
                        </label>
                    </Col>
                    <Col xs={6}>
                        <label htmlFor="cities">
                            <LabelTitle>Ciudad</LabelTitle>
                            <select ref={register({required: true})} name="cities">
                                
                                <option 
                                    key={profiles.cities ? profiles.cities.id: ''}
                                    value={profiles.cities ? profiles.cities.id: ''}>
                                        {profiles.cities ? profiles.cities.name: ''}
                                </option>

                            </select>

                        </label>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <h4>Direcciones</h4>
                    </Col>
                    <Col xs={6}>
                        <label htmlFor="address">
                            <LabelTitle>Direccion</LabelTitle>
                            <Input 
                                type="text"
                                name="address"
                                ref={register({required: true})}
                                placeholder="Direccion"
                                defaultValue={profiles.address ? profiles.address: ''}/>
                        </label>
                    </Col>
                    <Col xs={6}>
                        <label htmlFor="number_address">
                            <LabelTitle>Numero de direccion </LabelTitle>
                            <Input 
                                type="text"
                                name="number_address"
                                ref={register({required: true})}
                                placeholder="Numero de direccion"
                                defaultValue={profiles.number_address ? profiles.number_address: ''}/>
                        </label>
                    </Col>
                    <Col xs={6}>
                        <label htmlFor="neightbordhood">
                            <LabelTitle>Zona/Barrio</LabelTitle>
                            <Input 
                                type="text"
                                name="neightbordhood"
                                ref={register({required: true})}
                                placeholder="Zona/Barrio"
                                defaultValue={profiles.neightbordhood ? profiles.neightbordhood: ''}/>
                        </label>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <h4>Descripcion Personal</h4>
                    </Col>
                    <Col xs={12}>
                        <textarea
                            rows={10}
                            cols={100}
                            name="description" 
                            value={profiles.description ? profiles.description: ''}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <h4>Redes Sociales</h4>
                    </Col>
                    <Col xs={6}>
                        <label htmlFor="rs_facebook">
                            <LabelTitle>Facebook </LabelTitle>
                            <Input 
                                type="text"
                                name="rs_facebook"
                                ref={register({required: false})}
                                placeholder="Facebook"
                                defaultValue={profiles.rs_facebook ? profiles.rs_facebook: ''}/>
                        </label>
                    </Col>
                    <Col xs={6}>
                        <label htmlFor="rs_twitter">
                            <LabelTitle>Twitter</LabelTitle>
                            <Input 
                                type="text"
                                name="rs_twitter"
                                ref={register({required: false})}
                                placeholder="Facebook"
                                defaultValue={profiles.rs_twitter ? profiles.rs_twitter: ''}/>
                        </label>
                    </Col>
                    <Col xs={6}>
                        <label htmlFor="rs_linkedin">
                            <LabelTitle>LinkedIn</LabelTitle>
                            <Input 
                                type="text"
                                name="rs_linkedin"
                                ref={register({required: false})}
                                placeholder="LinkedIn"
                                defaultValue={profiles.rs_linkedin ? profiles.rs_linkedin: ''}/>
                        </label>
                    </Col>
                </Row>
            </form>
        </Grid>

    )
}

const mapStateToProps = (state: any) => ({
    profiles: state.profile
})

export default connect(mapStateToProps, '')(FormUpdate)