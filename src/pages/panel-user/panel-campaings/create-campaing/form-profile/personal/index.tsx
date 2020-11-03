import React from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {Row, Col} from 'react-styled-flexboxgrid'
import DefaultImg from '../../form-basic/public/default.png'
import {PersonalProfile} from '../../../../../../userProfile'
import {City} from '../../../../../../userCountryCities'
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
        SpanPhoto
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
    countries:  Icountries
    cities: Icities 
    address: string
    neighborhood: string
    neighborhood_number: number
    photo: string
}

type userType = {
    first_name: string
    last_name: string
    email: string
    id: number
}

interface IprofileType {
    cinit: string
    cellphone: string
    telephone: string
    countries:Icountries 
    cities: Icities
    address: string
    neighborhood: string
    neighborhood_number: number
    photo: string
}

interface IPersonalSN {
    name: string
    url: string
    snet: userType 
}

interface Iauth {
    authenticated: boolean
    currentUser: userType
}
// TODO: send to save and CHECK IF WOKING
const Personal: React.FC<Iauth> = ({authenticated, currentUser})=>{

    let token = window.sessionStorage.getItem('token')
    let currentPersonal = new PersonalProfile(token)
    let CityUser = new City(token)

    const [personalData, SetpersonalData] = React.useState<IprofileType>()
    const [loadcity, setLoadcity] = React.useState<Icities[]>()
    const [isLoading, setIsLoading] = React.useState(true)
    const [showImg, SetShowImg] = React.useState()
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const _onChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        let file: any = event.currentTarget.files 
        let reader = new FileReader()

        reader.onloadend = () => {
            SetShowImg(reader.result)
        }

        reader.readAsDataURL(file[0])
    }

    const LoadPersonalData = () => {
        currentPersonal.currentPersonalProfile()
            .then(resp=>{
                console.info(resp.data.data)
                SetpersonalData(resp.data.data)
                //console.info(myData)
            }).catch(err => {
                console.info(err)
            }).then(()=>{
                setIsLoading(false)
            })
    }

    const LoadCities = () => {
        CityUser.listCities()
            .then(resp=>{
                console.info(resp.data)
                setLoadcity(resp.data)
            }).catch(err=>{
                console.info(err)
            }).then(()=>{
                setIsLoading(false)
            })
    }

    React.useEffect(()=>{
        LoadPersonalData()
        LoadCities()
    },[])

    return(
        <>
        <div>
            <form encType="multipart/form-data">
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
                                        <Span>* Nombre: </Span>
                                        <Input type="text"
                                               name="first_name"
                                               ref={register({required: true})}
                                               defaultValue={currentUser.first_name}
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
                                        <Span>* Apellido: </Span>
                                        <Input type="text"
                                               name="last_name"
                                               ref={register({required: true})}
                                               defaultValue={currentUser.last_name}
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
                                        {!isLoading && personalData ?(
                                            <Input type="text"
                                               name="cinit"
                                               ref={register({required: true})}
                                               defaultValue={personalData.cinit}
                                            /> 
                                        ):(<Input type="text"
                                               name="cinit"
                                               ref={register({required: true})}
                                            /> )}
                                        
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
                                        {!isLoading && personalData ?(
                                            <Input type="text"
                                               name="cell_phone"
                                               ref={register({required: true})}
                                               defaultValue={personalData.cellphone}
                                               />
                                        ):(<Input type="text"
                                               name="cell_phone"
                                               ref={register({required: true})}
                                               />)}
                                        
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
                                        {!isLoading && personalData ? (
                                            <Input type="text"
                                                name="phone"
                                                ref={register({required: false})}
                                                defaultValue={personalData.telephone}
                                                />
                                        ):(<Input type="text"
                                                name="phone"
                                                ref={register({required: false})}
                                                />)}
                                        
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
                                        <Span>* Email: </Span>
                                        <Input type="text"
                                               name="email"
                                               ref={register({required: true})}
                                               defaultValue={currentUser.email}
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
                                        <SelectInput ref={register({required: true})} name="country">
                                            
                                                {!isLoading && personalData ? (
                                                    <option value={!isLoading && personalData ? (personalData.countries.id): ''}>
                                                    {!isLoading && personalData ? (personalData.countries.name):''}</option>
                                                ):(<option value="">SELECIONAR</option>)}
                                            
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
                                        <SelectInput ref={register({required: true})} name="city"> 
                                            {!isLoading && loadcity && personalData ? (
                                                loadcity.map((city:any)=>{

                                                    if(personalData.cities.id === city.id){
                                                        return <option key={city.id} defaultValue={city.id}>{city.name}</option>
                                                    }
                                                    return <option key={city.id} value={city.id}>{city.name}</option>
                                                }
                                            ) 
                                            ):('')}
                                        </SelectInput>
                                    </label>
                                    <ErrorInput>{errors.cities && 'este campo es requerido'}</ErrorInput>
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
                                        {!isLoading && personalData ? (
                                            <TextArea 
                                               rows={5}
                                               name="address"
                                               ref={register({required: true})}
                                               defaultValue={personalData.address}/>
                                            ):(<TextArea 
                                               rows={5}
                                               name="address"
                                               ref={register({required: true})}/>
                                            )}
                                        
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
                                            {!isLoading && personalData ? (
                                            <TextArea 
                                               rows={5}
                                               name="neighborhood"
                                                ref={register({required: true})}
                                                defaultValue={personalData.neighborhood}/>
                                            ):(<TextArea 
                                               rows={5}
                                               name="neighborhood"
                                               ref={register({required: true})}/>)}
                                        
                                    </label>
                                    <ErrorInput>{errors.neighborhood && 'este campo es requerido'}</ErrorInput>
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
                                            {!isLoading && personalData ? (
                                            <Input type="number"
                                               name="neighborhood_number"
                                                ref={register({required: true})}
                                                defaultValue={personalData.neighborhood_number}/>
                                                
                                            ):(<Input type="number"
                                               name="neighborhood_number"
                                                ref={register({required: true})}/>)}
                                        
                                    </label>
                                    <ErrorInput>{errors.neighborhood_number && 'este campo es requerido'}</ErrorInput>
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
                                            name="photo_perfil"
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
                                            name="social_network-f"
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
                                        <Span>Twitter: </Span>
                                        <Input type="text"
                                            name="social_network-t"
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
                                        <Span>Otra red social: </Span>
                                        <Input type="text"
                                            name="social_network-a"
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
                                <WrapperBoxLast>
                                    <label>
                                        <SpanDescription>Description de perfil: </SpanDescription>
                                            <SecondSpan> Habla sobre ti y trata de proporcionar la 
                                                información más relevante para que los visitantes 
                                                puedan conocerte mejor.
                                            </SecondSpan>
                                        <TextArea rows={6} name="description_social_network"/>
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
    authenticated: state.user.authenticated,
    currentUser: state.user,
    currentProfile: state.profile
})

/*const mapActionToProps = {*/
    //LoadPersonalData   
/*}*/

export default connect(mapStateToProps)(Personal)

//export default connect(mapStateToProps)(Personal)
