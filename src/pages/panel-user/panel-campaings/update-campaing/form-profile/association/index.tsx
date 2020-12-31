import React from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {store} from 'react-notifications-component'
import {Row, Col} from 'react-styled-flexboxgrid'
import DefaultImg from '../../form-basic/public/default.png'
import {City} from '../../../../../../userCountryCities'
import {CompanyProfile} from '../../../../../../userProfile'
import {ContentProfile,
        Input, 
        WrapperBox,
        Span,
        ErrorInput,
        TextArea,
        InfoText,
        SaveProfile,
        SpanAssiaction,
        SelectInput,
        SpanAE,
        WrapperBoxLast,
        SpanPhoto,
        ProfileImg,
        SpanDescription,
        SecondSpan,
} from './styles' 

const InstitutionType = [
    {"id": 1, "name": "EMPRESA"},
    {"id": 2, "name": "ASOCIACION"},
    {"id": 3, "name": "OTROS"}
]

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
    heading: string
    company_name: string
    company_email: string
    typeIns: number
    institution_type: number
}

interface Iprofileca {
    id: number
    profiles: Iprofile
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
    heading: string
    company_name: string
    company_email: string
    typeIns: number
    institution_type: number
}

interface Icampaing {
    campaing: FormData
}

// TODO: the problem is not loading data PROFILE-CA
const Association: React.FC<Icampaing> = ({campaing})=>{

    let token = window.sessionStorage.getItem('token')
    let CityUser = new City(token)
    let companyProfile = new CompanyProfile(token)
    const [loadcity, setLoadcity] = React.useState<Icities[]>()
    const [isLoading, setIsLoading] = React.useState(true)
    const [showImg, SetShowImg] = React.useState()
    const [displayMsg, setDisplayMsg] = React.useState('')
    const [ProfileCA, setProfileCA] = React.useState<Iprofileca>()
    const {register, handleSubmit, reset, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(({cinit, cellphone, telephone, countries, cities, heading,
                                   company_name, address, neightbordhood, number_address, company_email, 
                                   photo, rs_facebook, rs_twitter, rs_linkedin, rs_another,
                                   description, country_id, city_id, typeIns}) => {

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
            heading: heading,
            company_name: company_name,
            email_company: company_email,
            rs_facebook: rs_facebook,
            rs_twitter: rs_twitter,
            rs_linkedin: rs_linkedin,
            rs_another: rs_another,
            description: description,
            type_institution: typeIns
        }

        //companyProfile.createCP(data_profile)
            //.then(resp => {
                ////console.info(resp.data)
                //Notifications('Perfil Institucional guardada', 'success')
                //reset()
            //}).catch(err=>{
                
                //Notifications('Existe problemas de red, intentelo mas tarde porfavor.', 'danger')
            //})

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
            title: 'Guardando Datos',
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

    const LoadCompanyProfileCA = () =>{
        let pf_id: any = campaing.profile ? campaing.profile.id: ''
        let pc_id: any = campaing.profile_ca
        if(pc_id){
            companyProfile.retrieveCompany(pf_id, pc_id)
                .then(resp => {
                    console.info(resp.data.data)
                    setProfileCA(resp.data.data)
                }).catch(err =>{
                    console.error(err)
                }).then(()=>{
                    setIsLoading(false)
                })
        }
    }

    React.useEffect(()=>{
        LoadCities()
        LoadCompanyProfileCA()
        console.info("PROFILE CA")
        console.info(ProfileCA)
    },[campaing])

    return(
        <>
        <div>
            <form onSubmit={onSubmit} encType="multipart/form-data">
            <ContentProfile>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>       
                            <InfoText>DATOS EMPRESA/ASSOCIACION/OTROS </InfoText>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                    <SpanAE>* Assiciacion/Empresa/Otros: </SpanAE>
                                        <SelectInput ref={register({required: true})} name="typeIns" autoFocus> 
                                        {
                                            !isLoading && ProfileCA ? InstitutionType.map((inst: any) => {
                                                if(ProfileCA.institution_type === inst.id){
                                                    return <option value={inst.id} selected>{inst.name}</option>
                                                }
                                                return <option value={inst.id}>{inst.name}</option>
                                            }):('')
                                        }
                                        </SelectInput>
                                    </label>
                                    <ErrorInput>{errors.typeIns && 'este campo es requerido'}</ErrorInput>
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
                                        <Span>* Nombre Asociación: </Span>
                                        <Input type="text"
                                               name="company_name"
                                            ref={register({required: true})}
                                            defaultValue={!isLoading && ProfileCA ? ProfileCA.company_name : 'company default'}/>
                                    </label>
                                    <ErrorInput>{errors.company_name && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Numero de NIT: </Span>
                                        <Input type="text"
                                               name="cinit"
                                            ref={register({required: true})}
                                        defaultValue={!isLoading && ProfileCA ? ProfileCA.cinit : '0'}/>
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
                                        <Span>* Rubro: </Span>
                                        <Input type="text"
                                               name="heading"
                                               ref={register({required: true})}/>
                                    </label>
                                    <ErrorInput>{errors.heading && 'este campo es requerido'}</ErrorInput>
                                </WrapperBox>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <WrapperBox>
                                    <label>
                                        <Span>* Email: </Span>
                                        <Input type="text"
                                               name="company_email"
                                               ref={register({required: true})}
                                        />
                                    </label>
                                    <ErrorInput>{errors.company_email && 'este campo es requerido'}</ErrorInput>
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
                                               ref={register({required: true})}/>
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
                                        <Span>* Numero de Telefono: </Span>
                                        <Input type="text"
                                               name="telephone"
                                               ref={register({required: true})}/>
                                    </label>
                                    <ErrorInput>{errors.telephone && 'este campo es requerido'}</ErrorInput>
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
                                        <SpanAssiaction>* Direccion (calle, avenida): </SpanAssiaction>
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
                                <WrapperBoxLast>
                                    <label>
                                        <Span>* Numero: </Span>
                                        <Input type="number"
                                               name="number_address"
                                               ref={register({required: true})}/>
                                    </label>
                                    <ErrorInput>{errors.number_address && 'este campo es requerido'}</ErrorInput>
                                </WrapperBoxLast>
                            </Col>
                        </Row>
                    </Col>

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
                                            <SecondSpan> 
                                                Habla sobre empresa/associacion y trata de proporcionar la 
                                                información más relevante para que los visitantes 
                                                puedan conocerte mejor a tu institucion a la que representas.
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
    campaing: state.campaing 
})

export default connect(mapStateToProps)(Association)
