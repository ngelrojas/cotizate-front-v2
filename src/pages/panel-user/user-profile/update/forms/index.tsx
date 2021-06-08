import React from 'react'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import {Row, Col, Grid} from 'react-styled-flexboxgrid'
import {Editor} from '@tinymce/tinymce-react'
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
    city_id: number
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
    profiles: FormData,
    currentUser: Iuser
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

const FormUpdate:React.FC<AllProps> = ({profiles, currentUser}) => {
    const classes = useStyles();
    let token = window.sessionStorage.getItem('token')
    let cities = new Cities(token)
    let personalProfile = new PersonalProfile(token)
    let current_city: any
    const [getCities, setCities] = React.useState([])
    const [getLoading, setLoading] = React.useState(true)
    const [saveImg, setsaveImg] = React.useState('')
    const {register, handleSubmit, errors} = useForm<FormData>({
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

    const onSubmit = handleSubmit (({cinit, cellphone, telephone, city_id,
        address, number_address, neightbordhood, description, rs_facebook, 
        rs_twitter, rs_linkedin, rs_another, current_position, headline
    }) => {
        let current_img: string = saveImg && profiles && profiles.photo ? saveImg : profiles.photo
        let send_data: any = {
            cinit: cinit,
            cellphone: cellphone, 
            telephone: telephone, 
            countries: profiles.countries.id, 
            cities: city_id,
            address: address, 
            neightbordhood: neightbordhood,
            number_address: number_address,
            photo: current_img,
            rs_facebook: rs_facebook,
            rs_twitter: rs_twitter,
            rs_linkedin: rs_linkedin,
            rs_another: rs_another,
            description: description,
            current_position: current_position,
            headline: headline
        }
        let current_user_id:number = profiles.id
        console.log(send_data)
        personalProfile.updateProfilePersonal(send_data, current_user_id)
            .then(resp => {
                console.log(resp)
                if(resp.status === 200){
                    Notifications('Su perfil se ha actualizado.', 'success')
                }

            })
            .catch(err =>{
                console.error(err)
                Notifications('Su perfil no se ha actualizado, por favor intentelo mas tarde.', 'danger')
            })

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
    
    const handleEditorImgChange = (content: any, editor: any) => {
        setsaveImg(content)
    }

    React.useEffect(()=>{
        loadCities()
    },[])

    return(
        <Grid>
            <form onSubmit={onSubmit}>
                <Row>
                    <Col xs={12}>
                        <h4>Foto Principal</h4>
                    </Col>
                    <Col xs={6}>
                                <div>
                                    <label>
                                        <Editor
                                            initialValue={profiles && profiles.photo ? profiles.photo : ''}
                                            init={{
                                                branding: false,
                                                statusbar: false,
                                                height: 400,
                                                width: 400,
                                                menubar: false,
                                                plugins: [
                                                    'advlist autolink lists link image charmap print preview anchor image',
                                                    'imagetools searchreplace visualblocks code fullscreen',
                                                    'insertdatetime media table paste code help wordcount'
                                                ],
                                                toolbar:
                                                    ' image | imagetools',
                                                automatic_uploads: true,
                                                file_picker_types: 'image',
                                                file_picker_callback: function(
                                                    cb: any,
                                                    value: any,
                                                    meta: any
                                                ) {
                                                    let input = document.createElement('input')
                                                    input.setAttribute('type', 'file')
                                                    input.setAttribute('accept', 'image/*')
                                                    input.onchange = function(files: any) {
                                                        let file: any = (input as any).files[0]
                                                        let reader: any = new FileReader()
                                                        reader.onload = function() {
                                                            let id = 'blobid' + new Date().getTime()
                                                            let blobCache = (window as any).tinymce
                                                                .activeEditor.editorUpload.blobCache
                                                            let base64 = reader.result.split(',')[1]
                                                            let blobInfo: any = blobCache.create(
                                                                id,
                                                                file,
                                                                base64
                                                            )
                                                            blobCache.add(blobInfo)
                                                            cb(blobInfo.blobUri(), {title: file.name})
                                                        }
                                                        reader.readAsDataURL(file)
                                                    }
                                                    input.click()
                                                }
                                            }}
                                            onEditorChange={handleEditorImgChange}
                                        />
                                    </label>
                                </div>
                    </Col>
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
                            <select ref={register({required: true})} name="city_id">
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
                        <h4>Datos Profesionales</h4>
                    </Col>
                    <Col xs={6}>
                        <label htmlFor="current_position">
                            <LabelTitle>Posicion Actual</LabelTitle>
                            <Input 
                                type="text"
                                name="current_position"
                                ref={register({required: true})}
                                placeholder="Posicion Actual"
                                defaultValue={profiles.current_position ? profiles.current_position: ''}/>
                        </label>
                    </Col>
                    <Col xs={6}>
                        <label htmlFor="headline">
                            <LabelTitle>Profesion</LabelTitle>
                            <Input 
                                type="text"
                                name="headline"
                                ref={register({required: true})}
                                placeholder="Profesion"
                                defaultValue={profiles.headline ? profiles.headline: ''}/>
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
                            ref={register({required: false})}
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