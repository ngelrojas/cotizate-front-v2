import React from 'react'
import {connect} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {CategoriesCampaing} from '../../../../../../userCategories'
import {City} from '../../../../../../userCountryCities'
import {CampaingHeader} from '../../../../../../userCampaings'
import {Row} from 'react-styled-flexboxgrid'
import {CreateCampaingHeader} from '../../../../../../redux/actions/campaing.actions'

import {
    WrapBtnSave,
    WrapperSave,
    BtnSaveProject,
    Form,
    MsgError,
    MsgSuccess,
    WrapperBox,
    BoxTitle,
    BoxText,
    BoxSelect,
    H4,
    TextConf,
    TextMain,
    BoxInput,
    BoxInputDuration,
    WrappBoxInput,
    BS
} from '../../styles'


type FormData = {
    id: number
    category: string
    qty_day: number
    amount: number
    city: string
    role: number
}


const FormConfig: React.FC = (props: any) => {

    let match = useRouteMatch('/panel-de-usuario/:campania')
    let history = useHistory()
    let token = window.sessionStorage.getItem('token')
    let CatCamp = new CategoriesCampaing(token)
    let GetCities = new City(token)
    let SaveCampaing = new CampaingHeader(token)
    const [cate, SetCate] = React.useState()
    const [msg, Setmsg] = React.useState('')
    const [formbasic, Setformbasic] = React.useState()
    const [cities, SetCities] = React.useState()
    const [typeCmp, SetTypeCmp] = React.useState()
    let matchUrl: any = match
    let type_campaing = matchUrl.params.campania   

    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(({category, city, qty_day, amount}) => {
        let campaing_type:number = type_campaing === 'crear-emprendimiento' ? 2 : 1 
        let data_camp: any
        let send_data = {
            category: category,
            city: city,
            qty_day: qty_day,
            amount: amount,
            role: campaing_type
        }

        data_camp = props.CreateCampaingHeader(send_data) 
        console.info(data_camp)
        Setmsg("DATOS GUARDADOS")
        /*SaveCampaing.createCampaingHeader(send_data)*/
            //.then(resp=>{
                //Setmsg("DATOS GUARDADOS")
                //console.info(resp.data.data)
                //props.shareCampaing(resp.data.data)
            //})
            //.catch(err => {
                //console.error(err)
            /*})*/
        //window.localStorage.setItem('formBasic', JSON.stringify(send_data))
        /*Setmsg('datos basicos guardados')*/
        //history.push(`/panel-de-usuario/${type_campaing}/descripcion`)

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

    React.useEffect(()=>{
        let _formbasic: any = window.localStorage.getItem('formBasic')
        Setformbasic(JSON.parse(_formbasic))
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

        <Form onSubmit={onSubmit}>
        <WrapperBox>
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
        </WrapperBox>

        <WrapperBox>
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
        </WrapperBox>

        <WrapperBox>
                <BoxTitle>* Duracion del proyecto</BoxTitle>
                <BoxText>Cuanto tiempo vaa durar tu campaña, lo mas recomendable es de 90 dias </BoxText>
                <BoxInputDuration
                    type="number"
                    name="qty_day"
                    ref={register({required: true})}
                    placeholder="cantidad de dias"
                    defaultValue={formbasic?.qty_day}
                />
                <MsgError>
                    {errors.qty_day && 'este campo es requerido'}
                </MsgError>
        </WrapperBox>

        <WrapperBox>
                <BoxTitle>* Meta</BoxTitle>
                <BoxText>¿Cuánto necesitas recaudar? Fíjate una meta coherente con lo que propone tu proyecto. No 
olvide incluir las tarifas administrativas en su cálculo. </BoxText>
                <WrappBoxInput>
                    <BoxInput
                        type="number"
                        name="amount"
                        ref={register({required: true})}
                        placeholder="Bs 15.000"
                        defaultValue={formbasic?.amount}
                    />
                    <BS>BS</BS>
                </WrappBoxInput>

                <MsgError>
                    {errors.amount && 'este campo es requerido'}
                </MsgError>
        </WrapperBox>
            <MsgSuccess>{msg}</MsgSuccess>
            <Row>
                <WrapperSave>
                    <WrapBtnSave>
                        <BtnSaveProject>guardar</BtnSaveProject>
                    </WrapBtnSave>
                </WrapperSave>
            </Row>
            

        </Form>
        </>

    )
}

const mapActionToProps = {
    CreateCampaingHeader
}

export default connect(null, mapActionToProps)(FormConfig)
