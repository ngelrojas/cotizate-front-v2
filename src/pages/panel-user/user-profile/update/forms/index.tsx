import React from 'react'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import {Row, Col, Grid} from 'react-styled-flexboxgrid'
import Button from '@material-ui/core/Button'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Cities} from '../../../../../userCities'
import {store} from 'react-notifications-component'
import {PersonalProfile} from '../../../../../userProfile'

import {
    Input,
    LabelTitle,
    DivBtn
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
)

const FormUpdate:React.FC<AllProps> = ({profiles}) => {
    const classes = useStyles();
    let token = window.sessionStorage.getItem('token')
    let cities = new Cities(token)
    let personalProfile = new PersonalProfile(token)
    let current_city: any
    const [getCities, setCities] = React.useState([])
    const [getLoading, setLoading] = React.useState(true)
    const {register, handleSubmit, reset, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const loadCities = () => {
        cities.listCities()
            .then(resp => {
                setCities(resp.data)
            })
            .catch(error => {
                console.error(error)
            })
            .then(()=>{
                setLoading(false)
            })
    }

    const onSubmit = handleSubmit (({cinit, cellphone, telephone, cities,
        address, number_address, neightbordhood, description, rs_facebook, rs_twitter, rs_linkedin, rs_another
    }) => {

        let send_data: any = {
            cinit: cinit,
            cellphone: cellphone,
            telephone: telephone,
            cities: cities,
            address: address,
            number_address: number_address,
            neightbordhood: neightbordhood,
            description: description,
            rs_facebook: rs_facebook,
            rs_twitter: rs_twitter,
            rs_linkedin: rs_linkedin,
            rs_another: rs_another 
        }
        // personalProfile.updateProfilePersonal(send_data)
        //     .then(resp => {

        //     })
        Notifications('Su perfil se ha actualizado.', 'success')
    })

    const Notifications = (set_messages: string, set_type: any) => {
        store.addNotification({
            title: 'Actualizando Datos',
            message: set_messages,
            type: set_type,
            insert: 'top',
            container: 'top-right',
            animationIn: ['animate__animated', 'animate__fadeIn'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        })
    }

    React.useEffect(()=>{
        loadCities()
        console.log(profiles.user ? profiles.user.id: 'no data')
    },[])

    return(
        <Grid>
            <form onSubmit={onSubmit}>
                <Row>
                    <Col xs={12}>
                        <h4>Datos Personales</h4>
                    </Col>

                    <Col xs={6}>
                        <label htmlFor="cinit">
                            <LabelTitle>Carnet de Identidad</LabelTitle>
                            <Input 
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                {
                                    !getLoading && getCities ? (getCities.map((city:any)=>{
                                        current_city = profiles.cities ? profiles.cities : ''
                                        if(current_city.id === city.id){
                                            return <option key={city.id} value={city.id} selected>{city.name}</option>
                                        }
                                        return <option key={city.id} value={city.id}>{city.name}</option>
                                    })):('no data')
                                }

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
                                ref={register({required: false})}
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
                            defaultValue={profiles.description ? profiles.description: ''}
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
                    <Col xs={6}>
                        <label htmlFor="rs_another">
                            <LabelTitle>Otra red social</LabelTitle>
                            <Input 
                                type="text"
                                name="rs_another"
                                ref={register({required: false})}
                                placeholder="Otra red social"
                                defaultValue={profiles.rs_another ? profiles.rs_another : ''}/>
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <DivBtn className={classes.root}>
                            <Button type="submit" variant="contained" color="primary">
                                ACTUALIZAR
                            </Button>
                        </DivBtn>

                    </Col>
                </Row>
            </form>
        </Grid>

    )
}

const mapStateToProps = (state: any) => ({
    profiles: state.profile,
    currentUser: state.user
})

export default connect(mapStateToProps)(FormUpdate)