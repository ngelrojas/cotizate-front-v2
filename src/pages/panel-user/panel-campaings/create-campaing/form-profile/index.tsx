import React from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
// import API from '../../../../../api'
import {PersonalProfile} from '../../../../../userProfile'
import {Campaings} from '../../../../../userCampaings'

import {
    Label,
    FormSubTitle,
    WrapBtn,
    BtnSaveProject,
    Form,
    MsgErrorForm,
    MsgSuccess
} from '../styles'

type FormData = {
    title: string
    video_img: string
    qty_day: number
    amount: number
}
type userType = {
    first_name: string
    last_name: string
    id: number
}

interface Iauth {
    authenticated: boolean
    currentUser: userType
}

const FormProfile: React.FC<Iauth> = ({authenticated, currentUser}) => {

    const [errorsFB, setErrorsFB] = React.useState('')
    const [errorsFD, setErrorsFD] = React.useState('')
    const [errorsFC, setErrorsFC] = React.useState('')
    const [errorsFR, setErrorsFR] = React.useState('')
    const [currentProfile, setCurrentProfile] = React.useState()
    let token = window.sessionStorage.getItem('token')
    let errorType: Array<{name:string, error:string, description:string}>
    const resp = new PersonalProfile(token)
    let campaing = new Campaings(token)
    let formBasic:any = window.localStorage.getItem('formBasic')
    let formDescription:any = window.localStorage.getItem('formDescription')
    let formCatag:any = window.localStorage.getItem('formCatag')
    let formReward:any = window.localStorage.getItem('formReward')
    let basic_form_parse = JSON.parse(formBasic) 
    let descr_form_parse = JSON.parse(formDescription)
    let categ_form_parse = JSON.parse(formCatag)
    let rewar_form_parse = JSON.parse(formReward)
    const {handleSubmit} = useForm<FormData>({
        mode: 'onChange'
    })
    // TODO: continue here and complete send campaing to the endpoint
    const onSubmit = handleSubmit(() => {

        if (msgError()){
           console.log(basic_form_parse) 
           let send_data = {
                title: basic_form_parse.title,
                excerpt: descr_form_parse.excerpt,
                description: descr_form_parse.description,
                public_at: descr_form_parse.public_at,
                qty_day: basic_form_parse.qty_day,
                video_img: basic_form_parse.video_img,
                amount: basic_form_parse.amount,
                category: categ_form_parse.category,
                tags: categ_form_parse.tags
           }
           campaing.createCampaing(send_data).then(resp=>{
            console.log(resp)
           }).catch(error => {
            console.log(error)
           })
        }

    })

    const msgError = () => {


        let errorFB = validateForm(formBasic, 'formBasic', 'INFORMACION BASICA')
        let errorFD = validateForm(formDescription, 'formDescription', 'RESUMEN Y DESCRIPCION')
        let errorFC = validateForm(formCatag, 'formCatag', 'CATEGORIA Y TAGS')
        let errorFR = validateForm(formReward, 'formReward', 'RECOMPONENSAS') 

        if(errorFB){
            setErrorsFB(`${errorFB[0].error} ${errorFB[0].description}`)
            return false
        }

        if(errorFD){
            setErrorsFD(`${errorFD[0].error} ${errorFD[0].description}`)
            return false
        }

        if(errorFC){
            setErrorsFC(`${errorFC[0].error} ${errorFC[0].description}`)
            return false
        }

        if(errorFR){
            setErrorsFR(`${errorFR[0].error} ${errorFR[0].description}`)
            return false
        }

        return true
    }

    const validateForm = (form: any, nameForm:string, nameDesc: string)=>{
        if(form === null){
            errorType = Array({
                name: nameForm,
                error: 'debe completar el formulario: ',
                description: nameDesc
            })
            return errorType 
        }
        return false
        
    }
    //TODO: not return complete field, add end-point to backend to return complete field
    React.useEffect(()=>{
        // console.log('ID USER', currentUser.id) 
        resp.getPersonalProfile().then(res => {
            setCurrentProfile(res.data.data)
            console.log(res.data.data)

        })

    },[])

    return (
        <Form onSubmit={onSubmit}>
            <Label>
                <FormSubTitle>complete su perfil: {currentUser.first_name}</FormSubTitle>     
            </Label>
            <MsgErrorForm>{errorsFB}</MsgErrorForm>
            <MsgErrorForm>{errorsFD}</MsgErrorForm>
            <MsgErrorForm>{errorsFC}</MsgErrorForm>
            <MsgErrorForm>{errorsFR}</MsgErrorForm>
            <WrapBtn>
                <BtnSaveProject>guardar proyecto</BtnSaveProject>
            </WrapBtn>
        </Form>
    )
}
const mapStateToProps = (state: any) => ({
    authenticated: state.user.authenticated,
    currentUser: state.user
})
export default connect(mapStateToProps)(FormProfile)
