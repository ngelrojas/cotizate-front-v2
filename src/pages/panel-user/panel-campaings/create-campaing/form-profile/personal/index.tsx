import React from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {Row, Col} from 'react-styled-flexboxgrid'
import DefaultImg from '../../form-basic/public/default.png'
import {PersonalProfile} from '../../../../../../userProfile'
import {User} from '../../../../../../user'
import {City} from '../../../../../../userCountryCities'
import {UploadFiles} from '../../../../../../userImg'
import {ContentProfile,
        Input, 
        WrapperBox,
        Span,
        ErrorInput,
        SelectInput,
        TextArea,
        InfoText,
        ProfileImg,
        SpanDescription,
        SecondSpan,
        SaveProfile,
        WrapperBoxLast,
        SpanPhoto,
        MsgSuccess
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

type FormData = {
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
    description: string
}

type userType = {
    id: number
    email: string
    first_name: string
    last_name: string

}

interface IprofileType {
    cinit: string
    cellphone: string
    telephone: string
    country_id: number
    countries: Icountries 
    cities: Icities
    city_id: number
    address: string
    photo: any 
    neightbordhood: string
    number_address: number
    rs_facebook: string
    rs_twitter: string
    rs_linkedin: string
    rs_another: string
    description: string
}

interface Iauth {
    authenticated: boolean
    currentUser: userType
}

const Personal: React.FC<Iauth> = ({authenticated, currentUser})=>{

    let token = window.sessionStorage.getItem('token')
    let currentPersonal = new PersonalProfile(token)
    let DataUser = new User(token)
    let CityUser = new City(token)
    let UploadImages = new UploadFiles()

    const [personalData, SetpersonalData] = React.useState<IprofileType>()
    const [loadcity, setLoadcity] = React.useState<Icities[]>()
    const [isLoading, setIsLoading] = React.useState(true)
    const [showImg, SetShowImg] = React.useState()
    const [displayMsg, setDisplayMsg] = React.useState('')
    const {register, handleSubmit, reset, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(({cinit, cellphone, telephone, countries, cities,
                                   address, neightbordhood, number_address, photo,
                                   rs_facebook, rs_twitter, rs_linkedin, rs_another,
                                   description, country_id, city_id}) => {

        let data_profile = {
            cinit: cinit,
            cellphone: cellphone, 
            telephone: telephone, 
            countries: country_id, 
            cities: city_id,
            address: address, 
            neightbordhood: neightbordhood,
            number_address: number_address,
            photo: 'my profile photo here',
            rs_facebook: rs_facebook,
            rs_twitter: rs_twitter,
            rs_linkedin: rs_linkedin,
            rs_another: rs_another,
            description: description
        }

        /*let data_img = {*/
            //file_uploaded: photo[0] 
        //}

        //console.info(photo)

        //UploadImages.uploadImg(photo)
            //.then(resp => {
                //console.info(resp.data)
            //}).catch(err=>{
                //console.error(err)
            /*})*/

        currentPersonal.createPP(data_profile)
            .then(resp => {
                console.info(resp.data)
                setDisplayMsg('Perfil Creado.')
                reset()
            }).catch(err=>{
                console.error(err)
                setDisplayMsg('Hubo un error en la conexion, intentelo mas tarde porfavor.')
            })

    })
 

    const _onChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        let file: any = event.currentTarget.files 
        let reader = new FileReader()

        reader.onloadend = () => {
            SetShowImg(reader.result)
        }

        reader.readAsDataURL(file[0])
    }

    const LoadCities = () => {
        CityUser.listCities()
            .then(resp=>{
                //console.info(resp.data)
                setLoadcity(resp.data)
            }).catch(err=>{
                console.info(err)
            }).then(()=>{
                setIsLoading(false)
            })
    }

    React.useEffect(()=>{
        LoadCities()
    },[])

    return(
        <>
        <div>
            <form onSubmit={onSubmit} encType="multipart/form-data">
            <ContentProfile>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>       
                            <InfoText>DATOS PERSONALES</InfoText>
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
                                               defaultValue={currentUser.first_name}
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
                                               defaultValue={currentUser.last_name}
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
                                               defaultValue={currentUser.email}
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
                                            {!isLoading && loadcity ? (
                                                loadcity.map((city:any)=>{

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
                                               ref={register({required: true})}/>
                                            
                                        
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
                                               ref={register({required: true})}/>
                                        
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
                                                ref={register({required: true})}/>
                                        
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
                                <InfoText>Esta será la información pública que aparecerá en tu perfil del proyecto.</InfoText>
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
                                        <input
                                            type="file"
                                            name="photo"
                                            ref={register({required: false})}
                                            accept="image/png, image/jpeg"
                                            onChange={_onChange}
                                        />
                                    </label>

                                    <ProfileImg src={ showImg ? showImg : DefaultImg } alt="cotizate-" />
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
                                                ref={register({required: false})} /> 
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
                                                ref={register({required: false})} />
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
                                                ref={register({required: false})} />
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
                                                ref={register({required: false})} />
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
                                    <MsgSuccess>
                                    {displayMsg} 
                                    </MsgSuccess>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                   <SaveProfile>guardar</SaveProfile>
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

const mapStateToProps = (state: any) => ({
    authenticated: state.user.authenticated,
    currentUser: state.user,
    currentProfile: state.profile
})

export default connect(mapStateToProps)(Personal)
