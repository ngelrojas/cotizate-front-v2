import React from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {Row, Col} from 'react-styled-flexboxgrid'
import DefaultImg from '../../form-basic/public/default.png'
import {CheckAuthentication} from '../../../../../../redux/auth'
//import {PersonalProfile} from '../../../../../../userProfile'
//import {LoadPersonalData} from '../../../../../../redux/actions/profile.actions'
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

type FormData = {
    first_name: string
    last_name: string
    email: string
    cinit: string
    cellphone: string
    telephone: string
    country: string
    city: string
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

type profileType = {
    cinit: string
    cellphone: string
    telephone: string
    country: string
    city: string
    address: string
    neighborhood: string
    neighborhood_number: number
    photo: string
}

interface Iauth {
    authenticated: boolean
    currentUser: userType
    currentProfile: profileType
}

const Personal: React.FC<Iauth> = ({authenticated, currentUser, currentProfile})=>{

/*    let token = window.sessionStorage.getItem('token')*/
    //let currentPersonal = new PersonalProfile(token)

    /*const [personalData, SetpersonalData] = React.useState()*/

    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

/*    const LoadPersonalData = () => {*/
        //currentPersonal.currentPersonalProfile()
            //.then(resp=>{
                ////console.info(resp.data.data)
                ////myData = resp.data.data
                //SetpersonalData((prevState: any) => resp.data.data)
                ////console.info(myData)
            //}).catch(err => {
                //console.info(err)
            //})
        ////SetpersonalData('come here working..!')
    /*}*/

    React.useEffect(()=>{
        //LoadPersonalData()
        //LoadPersonalData()
        if(CheckAuthentication()){
            console.info("authenticated")
        }
        console.info(currentProfile)
        //setPersonalData(LoadPersonalData(2))
    },[])

    return(
        <>
        <div>
            <form>
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
                                               name="cell_phone"
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
                                                name="phone"
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
                                            <option value="">SELECIONAR</option>
                                            <option value="1">Bolivia</option>
                                        </SelectInput>
                                    </label>
                                    <ErrorInput>{errors.country && 'este campo es requerido'}</ErrorInput>
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
                                            <option value="">SELECIONAR</option>
                                            <option value="1">La Paz</option>
                                            <option value="1">Santa Cruz</option>
                                            <option value="1">Cochabamba</option>
                                            <option value="1">Oruro</option>
                                            <option value="1">Pando</option>
                                            <option value="1">Beni</option>
                                            <option value="1">Chuquisaca</option>
                                            <option value="1">Tarija</option>
                                        </SelectInput>
                                    </label>
                                    <ErrorInput>{errors.city && 'este campo es requerido'}</ErrorInput>
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
                                               name="neighborhood"
                                               ref={register({required: true})}/>
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
                                        <Input type="number"
                                               name="neighborhood_number"
                                               ref={register({required: true})}/>
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
                                        <input type="file"
                                               name="photo_perfil"
                                               />
                                    </label>
                                    <ProfileImg src={DefaultImg} alt="cotizate-" />
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
                                               name="social_network-f"/>
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
                                               name="social_network-t"/>
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
                                               name="social_network-a"/>
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
