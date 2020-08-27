import React from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {PersonalProfile} from '../../../../../userProfile'
import {Campaings} from '../../../../../userCampaings'
import {Reward} from '../../../../../userReward'

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
    complete: boolean
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
    let reward = new Reward(token)
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

           let campID: number = 0

           let send_data = {
                title: basic_form_parse.title,
                excerpt: descr_form_parse.excerpt,
                description: descr_form_parse.description,
                qty_day: parseInt(basic_form_parse.qty_day),
                amount: parseFloat(basic_form_parse.amount),
                currencies: 1,
                video_img: basic_form_parse.video_img,
                public_at: descr_form_parse.public_at,
                categories: parseInt(categ_form_parse.category),
                tags: 1
           }
           console.info(send_data)
           campaing.createCampaing(send_data).then(resp=>{
            console.log(resp)

           }).catch(error => {
            console.log(error)
           })

        }

    })

/*    const saveReward = (campid: number) =>{*/

        //let send_data_reward = {} 
        //rewar_form_parse.map((rew:any) => {

            //send_data_reward = {
                //title: rew.title,
                //description: rew.descript,
                //amount: rew.cant_reward,
                //campaings: campid 
            //}

            //reward.createReward(send_data_reward).then(resp_re=>{
               //console.log(resp_re) 
            //}).catch(err=>{
                //console.log(err)
            //})

        //})

    /*}*/

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
        resp.getPersonalProfile().then(res => {
            setCurrentProfile(res.data.data)
            console.log(res.data.data)

        }).catch(err =>{
            console.error(err)
        })

    },[])

    return (
        <Form onSubmit={onSubmit}>
            <Label>
                <FormSubTitle>complete su perfil: {currentUser.first_name} - {currentUser.last_name}</FormSubTitle>     
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