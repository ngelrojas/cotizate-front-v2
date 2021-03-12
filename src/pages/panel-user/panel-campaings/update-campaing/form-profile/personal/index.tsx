import React from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {store} from 'react-notifications-component'
import {Row, Col} from 'react-styled-flexboxgrid'
import {Editor} from '@tinymce/tinymce-react'
import Modal from '@material-ui/core/Modal'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
// import DefaultImg from '../../form-basic/public/default.png'
import {PersonalProfile} from '../../../../../../userProfile'
import {City} from '../../../../../../userCountryCities'
import {RetrieveCompany} from '../../../../../../redux/actions/profileca.actions'
import Loading from '../../../../../../components/loading'
import {ContentProfile,
        Input, 
        WrapperBox,
        Span,
        ErrorInput,
        SelectInput,
        TextArea,
        InfoText,
        SpanDescription,
        SecondSpan,
        SaveProfile,
        WrapperBoxLast,
        SpanPhoto,
} from './styles' 

interface Icountries {
    id: number,
    short_name: string,
    code_name: string,
    description: string,
    name: string
}

interface Icities {
    id: number,
    shortname: string,
    codename: string,
    description: string,
    countries:number, 
    name: string
}

interface Iuser {
    id: number
    email: string
    first_name: string
    last_name: string
}

interface Icurrency {
    id: number
    name: string
    symbol: string
}

interface Iheader {
    id: number
    category: number
    city: number
    qty_day: number
    qty_day_left: number
    role: number
    user: number
}

interface Iprofile {
    id: number
    cinit: string
    cellphone: string
    telephone: string
    country_id: number
    countries: Icountries
    cities: Icities 
    city_id: number
    address: string
    neightbordhood: string
    number_address: number
    photo: any 
    rs_facebook: string
    rs_twitter: string
    rs_linkedin: string
    rs_another: string
    description: string
    current_position: string
    headline: string
    title: string
    user: Iuser
}

type FormData = {
    created_at: Date
    currency: Icurrency
    description: string
    ended_at: Date
    excerpt: string
    header: Iheader
    id: number
    imagen_main: any
    profile: Iprofile
    profile_ca: number
    public_at: Date
    short_url: string
    slog_campaing: string
    slug: string
    status: number
    title: string
    updated_at: Date
    video_main: string
    first_name: string
    last_name: string
    email: string
    cinit: string
    cellphone: string
    telephone: string
    country_id: number
    countries: Icountries
    cities: Icities 
    city_id: number
    address: string
    neightbordhood: string
    number_address: number
    photo: any 
    rs_facebook: string
    rs_twitter: string
    rs_linkedin: string
    rs_another: string
    current_position: string
    headline: string
}

interface Icampaing {
    campaing: FormData
}

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
)

const Personal: React.FC<Icampaing> = ({campaing}) => {

    let token = window.sessionStorage.getItem('token')
    let currentPersonal = new PersonalProfile(token)
    let CityUser = new City(token)
    const [loadcity, setLoadcity] = React.useState<Icities[]>()
    const [isLoading, setIsLoading] = React.useState(true)
    const classes = useStyles()
    const [modalStyle] = React.useState(getModalStyle)
    const [open, setOpen] = React.useState(true)
    const [saveImg, setsaveImg] = React.useState('')
    // const input = document.querySelector("cinit")
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })
    
    const handleEditorImgChange = (content: any, editor: any) => {
        setsaveImg(content)
    }

    const onSubmit = handleSubmit(({cinit, cellphone, telephone, countries, cities,
                                   address, neightbordhood, number_address, photo,
                                   rs_facebook, rs_twitter, rs_linkedin, rs_another,
                                   description, country_id, city_id, current_position,
                                    headline}) => {

        let current_img: string = saveImg && campaing.profile && campaing.profile.photo ? saveImg : campaing.profile.photo 

        let data_profile = {
            cinit: cinit,
            cellphone: cellphone, 
            telephone: telephone, 
            countries: country_id, 
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

        currentPersonal.updateProfilePersonal(data_profile, campaing.profile.id)
            .then(resp => {
                Notifications('Su perfil se ha actualizado.', 'success')
            }).catch(err=>{
                Notifications('Hubo un error en la conexion, intentelo mas tarde porfavor.', 'danger')
            })

        ScrollTop()

    })
    
    const ScrollTop = () => {
        window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth'
        })
    }

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

    const LoadCities = () => {
        CityUser.listCities()
            .then(resp=>{
                //console.info(resp.data)
                setOpen(true)
                setLoadcity(resp.data)
            }).catch(err=>{
                setOpen(true)
                console.info(err)
            }).then(()=>{
                setIsLoading(false)
                setOpen(false)
            })
    }

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <Loading message='cargando sus datos' />
    </div>
  )

    React.useEffect(()=>{
        LoadCities()
        const input: any = document.querySelector('input[name="cinit"]')
        input.focus()
        console.info(campaing)
    },[campaing])

    return(
        <>
        <div>
        
      <Modal
        open={open}
        aria-labelledby="loader-background-cotizate"
        aria-describedby="loader-background-cotizate">
        {body}
      </Modal>

            <form onSubmit={onSubmit} encType="multipart/form-data">
            <ContentProfile>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>       
                            <InfoText>DATOS PERSONALES </InfoText>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>Nombre: </Span>
                                            <Input type="text"
                                                   name="first_name"
                                                   ref={register({required: true})}
                                                   defaultValue={campaing.profile ? campaing.profile.user.first_name: ''}
                                                   disabled
                                            />

                                    </label>
                                    <ErrorInput>{errors.first_name && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>Apellido: </Span>
                                            <Input type="text"
                                               name="last_name"
                                               ref={register({required: true})}
                                               defaultValue={campaing.profile ? campaing.profile.user.last_name: ''}
                                               disabled
                                            />
                                        
                                    </label>
                                    <ErrorInput>{errors.last_name && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* CI: </Span>
                                        <Input type="text"
                                               name="cinit"
                                               ref={register({required: true})}
                                               defaultValue={campaing.profile ? campaing.profile.cinit: ''}
                                               autoFocus
                                            />
                                        
                                    </label>
                                    <ErrorInput>{errors.cinit && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Numero de celular: </Span>
                                        <Input type="text"
                                               name="cellphone"
                                               ref={register({required: true})}
                                               defaultValue={campaing.profile ? campaing.profile.cellphone : '' }
                                               />
                                        
                                    </label>
                                    <ErrorInput>{errors.cellphone && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>
                    
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>Numero de Telefono: </Span>
                                        <Input type="text"
                                                name="telephone"
                                                ref={register({required: false})}
                                                defaultValue={campaing.profile ? campaing.profile.telephone : '' }
                                                />
                                        
                                    </label>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>Email: </Span>
                                            <Input type="text"
                                                   name="email"
                                                   ref={register({required: true})}
                                                   defaultValue={campaing.profile ? campaing.profile.user.email : '' }
                                                   disabled
                                            />

                                    </label>
                                    <ErrorInput>{errors.email && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                     <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>Profesion: </Span>
                                        <Input type="text"
                                                name="headline"
                                                placeholder="ej. ARQUITECTO, INGENIERO, etc."
                                                ref={register({required: false})}
                                                defaultValue={campaing.profile ? campaing.profile.current_position : '' }
                                                />
                                        
                                    </label>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>                   

                     <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>Posicion Actual: </Span>
                                        <Input type="text"
                                                name="current_position"
                                                placeholder="ej. CEO, EMPRESARIO, etc."
                                                ref={register({required: false})}
                                                defaultValue={campaing.profile ? campaing.profile.headline : '' }
                                                />
                                        
                                    </label>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Pais: </Span>
                                        <SelectInput ref={register({required: true})} name="country_id"> 
                                                <option value="1">Bolivia</option>
                                        </SelectInput>
                                    </label>
                                    <ErrorInput>{errors.countries && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Ciudad: </Span>
                                        <SelectInput ref={register({required: true})} name="city_id"> 
                                                <option value="">SELECIONAR</option>
                                            {!isLoading && loadcity && campaing.profile ? (
                                                loadcity.map((city:any)=>{
                                                    if(campaing.profile.cities.id === city.id){
                                                        return <option key={city.id} value={city.id} selected>{city.name}</option>
                                                    }
                                                    return <option key={city.id} value={city.id}>{city.name}</option>
                                                }
                                            ) 
                                            ):('')}
                                        </SelectInput>
                                    </label>
                                    <ErrorInput>{errors.city_id && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Direccion (calle, avenida): </Span>
                                        <TextArea 
                                               rows={5}
                                               name="address"
                                               ref={register({required: true})}
                                               defaultValue={campaing.profile ? campaing.profile.address : ''}
                                        />
                                            
                                        
                                    </label>
                                    <ErrorInput>{errors.address && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Barrio: </Span>
                                            <TextArea 
                                               rows={5}
                                               name="neightbordhood"
                                               ref={register({required: true})}
                                               defaultValue={campaing.profile ? campaing.profile.neightbordhood : ''}
                                            />
                                        
                                    </label>
                                    <ErrorInput>{errors.neightbordhood && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Numero: </Span>
                                            <Input type="number"
                                               name="number_address"
                                                ref={register({required: true})}
                                               defaultValue={campaing.profile ? campaing.profile.number_address : ''}
                                            />
                                        
                                    </label>
                                    <ErrorInput>{errors.number_address && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                </Row>

                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>       
                                <InfoText>Esta será la imagen que aparecerá en tu perfil personal de proyecto.</InfoText>
                                <p>el tamano para esta imagen debe ser 271 ancho  X 279 alto, formatos permitidos PNG, JPEG, JPG </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <SpanPhoto>Foto de Perfil: </SpanPhoto>
                                        <Editor
                                            initialValue={campaing.profile && campaing.profile.photo ? campaing.profile.photo : ''}
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
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>Facebook: </Span>
                                            <Input type="text"
                                                name="rs_facebook"
                                                ref={register({required: false})} 
                                               defaultValue={campaing.profile ? campaing.profile.rs_facebook : ''}
                                            /> 
                                    </label>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>Twitter: </Span>
                                        <Input type="text"
                                                name="rs_twitter"
                                            ref={register({required: false})} 
                                            defaultValue={campaing.profile ? campaing.profile.rs_twitter : ''}
                                        />
                                    </label>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>LinkedIn: </Span>
                                        <Input type="text"
                                                name="rs_linkedin"
                                            ref={register({required: false})}
                                            defaultValue={campaing.profile ? campaing.profile.rs_linkedin : ''}
                                        />
                                    </label>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>Otra red social: </Span>
                                        <Input type="text"
                                                name="rs_another"
                                            ref={register({required: false})}
                                            defaultValue={campaing.profile ? campaing.profile.rs_another : ''}
                                        />
                                    </label>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBoxLast>
                                    <label>
                                        <SpanDescription>Description de perfil: </SpanDescription>
                                            <SecondSpan> Habla sobre ti y trata de proporcionar la 
                                                información más relevante para que los visitantes 
                                                puedan conocerte mejor.
                                            </SecondSpan>
                                            
                                            <TextArea rows={6}
                                                name="description"
                                                ref={register({required: false})}
                                            defaultValue={campaing.profile ? campaing.profile.description : ''}
                                                 />
                                        
                                    </label>
                                </WrapperBoxLast>
                            </Col>
                        </Row>
                    </Col>

                </Row>

            </ContentProfile>

                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                   <SaveProfile>actualizar</SaveProfile>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </form>
  
        </div>
        </>
    ) 
} 

const mapStateToProps = (state: any) =>({
    campaing: state.campaing
})

const mapActionToProps = {
    RetrieveCompany
} 

//const mapDispatchToProps = (dispatch: any) => ({
    //RetrieveCompany: (pfId: number, pcId: number) => dispatch(RetrieveCompany(pfId, pcId))
//})

export default connect(mapStateToProps, mapActionToProps)(Personal)
