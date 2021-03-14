import React from 'react'
import {connect} from 'react-redux'
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

interface Iheader {
    id: number
    category: string
    qty_day: number
    amount: number
    city: string
    role: number
}

type FormData = {
    category: string
    qty_day: number
    amount: number
    city: string
    role: number
    header: Iheader
}

interface Icounter {
    counter: any 
}

interface Ihandlers {
    handleNext: typeof next; 
    handleBack: typeof back; 
}

interface Icampaing {
    campaing: FormData
}

type AllProps = Icounter & Ihandlers & Icampaing

const FormConfig: React.FC<AllProps> = ({counter, handleNext, campaing}) => {

    let token = window.sessionStorage.getItem('token')
    let CatCamp = new CategoriesCampaing(token)
    let GetCities = new City(token)
    let SaveCampaing = new CampaingHeader(token)
    const [cate, SetCate] = React.useState()
    const [cities, SetCities] = React.useState()

    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(({category, city, qty_day, amount}) => {
        let send_data = {
            category: category,
            city: city,
            qty_day: qty_day,
            amount: amount,
        }

        let camphId:number = campaing.header ? campaing.header.id : 0

        SaveCampaing.updateCampaingHeader(send_data, camphId)
            .then(resp=>{
                Notifications('Datos de configuracion Actualizados', 'success')
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
    },[campaing])

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
                    {cate && campaing.header &&
                        (cate as any).map((category: any) => {
                            if(campaing.header.category === category.id){
                                return <option value={category.id} key={category.id} selected>
                                            {category.name}
                                        </option>
                            }
                            return <option value={category.id} key={category.id}>
                                            {category.name}
                                        </option>
                    }
                            
                            
                        )}
                </BoxSelect>
                <MsgError>
                    {errors.category && 'este campo es requerido'}
                </MsgError>
        </Col>
        <Col xs={6}>
                <BoxTitle>* Ubicacion</BoxTitle>
                <BoxText>Donde esta ubicado tu proyecto, Elija la ubicación de donde esta ubicado tu proyecto</BoxText>
                <BoxSelect ref={register({required: true})} name="city">
                    {cities && campaing.header &&
                        (cities as any).map((city: any) => {
                            if(campaing.header.city === city.id){
                                return <option value={city.id} key={city.id} selected>
                                    {city.name}
                                </option>
                         }
                         return <option value={city.id} key={city.id}>
                                    {city.name}
                                </option>
                        }
                            
                            
                        )}
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
                    defaultValue={campaing.header ? campaing.header.qty_day: ''}
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
                        defaultValue={campaing.header ? campaing.header.amount : ''}
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
                        <BtnSaveProject>actualizar</BtnSaveProject>
                    </WrapBtnSave>
                </WrapperSaveConfig>
            </Row>
            
        </FormConf>
        </>

    )
}

const mapStateToProps = (state:any) => ({
    counter: state.counter,
    campaing: state.campaing
})

const mapDispatchToProps = {
    handleNext: next,
    handleBack: back,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormConfig)
