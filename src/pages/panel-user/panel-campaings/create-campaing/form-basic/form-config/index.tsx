import React from 'react'
import {connect} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {store} from 'react-notifications-component'
import {CategoriesCampaing} from '../../../../../../userCategories'
import {City} from '../../../../../../userCountryCities'
import {CampaingHeader} from '../../../../../../userCampaings'
import {Row, Col} from 'react-styled-flexboxgrid'
import {next, back} from '../../../../../../redux/actions/next_back.actions'
import {
    WrapBtnSave,
    WrapperSaveConfig,
    BtnSaveProject,
    FormConf,
    MsgError,
    BoxTitle,
    BoxText,
    BoxSelect,
    H4,
    TextConf,
    TextMain,
    BoxInput,
    WrappBoxInput,
    BS,
} from '../../styles'

type FormData = {
    category: number
    qty_day: number
    amount: number
    city: number
    role: number
}

interface Icounter {
    counter: any 
}

interface Ihandlers {
    handleNext: typeof next; 
    handleBack: typeof back; 
}

type AllProps = Icounter & Ihandlers

const FormConfig: React.FC<AllProps> = ({counter, handleNext}) => {

    let match = useRouteMatch('/panel-de-usuario/:campania')
    let token = window.sessionStorage.getItem('token')
    let CatCamp = new CategoriesCampaing(token)
    let GetCities = new City(token)
    let SaveCampaing = new CampaingHeader(token)
    const [cate, SetCate] = React.useState()
    const [cities, SetCities] = React.useState()
    let matchUrl: any = match
    let type_campaing = matchUrl.params.campania   

    const {register, handleSubmit, reset, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(({category, city, qty_day, amount}) => {
        let campaing_type:number = type_campaing === 'crear-emprendimiento' ? 2 : 1 
        let send_amount: number = +amount
        let send_data = {
            category: +category,
            city: +city,
            qty_day: +qty_day,
            amount: send_amount.toFixed(2),
            role: campaing_type
        }
        console.log("IN CONFIG")
        console.log(send_data)
        SaveCampaing.createCampaingHeader(send_data)
            .then(resp=>{
                Notifications('Datos de configuracion guardados', 'success')
                reset()
                handleNext()
            })
            .catch(err => {
                console.error(err)
                Notifications(`${err}`, 'danger')
            })
    })

    const LoadCategories = () => {
        CatCamp.getCategoryCampaing()
            .then(resp => {
                SetCate(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const LoadListCities = () => {
        GetCities.listCities()
            .then(resp => {
                SetCities(resp.data)
            })
            .catch(err => {
                console.error(err)
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

    React.useEffect(()=>{
        LoadCategories()
        LoadListCities()
    },[])

    return (
        <>
        <div>
            <TextMain>
        Cotizate es una plataforma donde diferentes tipos de personas pueden expresarse libremente. Y sabemos
        que, de vez en cuando, expresarse es sinónimo de provocar reflexión e instigar. Nuestro rol es mantener 
        un ambiente acogedor para todo tipo de público y es por eso que tenemos algunas reglas para proyectos 
        de contenido para adultos. Sepa lo que puede y lo que no puede.
            </TextMain>
        </div>
        <H4>1.- CONFIGURACION</H4>
        <TextConf>Vamos a configuar tu proyecto selecciona siguientes opciones</TextConf>

        <FormConf onSubmit={onSubmit}>
        <Row>
        <Col xs={6}>
                <BoxTitle>* Categoria</BoxTitle>
                <BoxText>Seleccione la categoría que mejor represente su proyecto </BoxText>
                <BoxSelect ref={register({required: true})} name="category">
                    <option value="">SELECCIONAR</option>
                    {cate &&
                        (cate as any).map((category: any) => (
                            <option value={category.id} key={category.id}>
                                {category.name}
                            </option>
                        ))}
                </BoxSelect>
                <MsgError>
                    {errors.category && 'este campo es requerido'}
                </MsgError>
        </Col>
        <Col xs={6}>
                <BoxTitle>* Ubicacion</BoxTitle>
                <BoxText>Donde esta ubicado tu proyecto, Elija la ubicación de donde esta ubicado tu proyecto</BoxText>
                <BoxSelect ref={register({required: true})} name="city">
                    <option value="">SELECCIONAR</option>
                    {cities &&
                        (cities as any).map((city: any) => (
                            <option value={city.id} key={city.id}>
                                {city.name}
                            </option>
                        ))}
                </BoxSelect>
                <MsgError>
                    {errors.city && 'este campo es requerido'}
                </MsgError>
        </Col>
        </Row>
        <Row>
        <Col xs={6}>
                <BoxTitle>* Duracion del proyecto</BoxTitle>
                <BoxText>Cuanto tiempo vaa durar tu campaña, lo mas recomendable es de 90 dias </BoxText>
                <BoxInput
                    name="qty_day"
                    placeholder="cantidad de dias"
                    ref={register({required: true})}
                />
                <MsgError>
                    {errors.qty_day && 'este campo es requerido'}
                </MsgError>
        </Col>
        <Col xs={6}>
                <BoxTitle>* Meta</BoxTitle>
                <BoxText>¿Cuánto necesitas recaudar? Fíjate una meta coherente con lo que propone tu proyecto. No 
olvide incluir las tarifas administrativas en su cálculo. </BoxText>
                <WrappBoxInput>
                    <BoxInput
                        name="amount"
                        ref={register({required: true})}
                        placeholder="000.000,000"
                    />
                    <BS>BS</BS>
                </WrappBoxInput>

                <MsgError>
                    {errors.amount && 'este campo es requerido'}
                </MsgError>
        </Col>
        </Row>
            <Row>
                <WrapperSaveConfig>
                    <WrapBtnSave>
                        <BtnSaveProject>guardar</BtnSaveProject>
                    </WrapBtnSave>
                </WrapperSaveConfig>
            </Row>
            
        </FormConf>
        </>

    )
}

const mapStateToProps = (counter:number) => ({
    counter,
})

const mapDispatchToProps = {
    handleNext: next,
    handleBack: back,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormConfig)
