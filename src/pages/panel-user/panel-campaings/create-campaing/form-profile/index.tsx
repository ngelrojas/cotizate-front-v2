import React from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
// import API from '../../../../../api'
import {PersonalProfile} from '../../../../../userProfile'
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
    const {handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(() => {
        let formBasic = window.localStorage.getItem('formBasic')
        let formDescription = window.localStorage.getItem('formDescription')
        let formCatag = window.localStorage.getItem('formCatag')
        let formReward = window.localStorage.getItem('formReward')

        let errorFB = validateForm(formBasic, 'formBasic', 'INFORMACION BASICA')
        let errorFD = validateForm(formDescription, 'formDescription', 'RESUMEN Y DESCRIPCION')
        let errorFC = validateForm(formCatag, 'formCatag', 'CATEGORIA Y TAGS')
        let errorFR = validateForm(formReward, 'formReward', 'RECOMPONENSAS') 

        if(errorFB){
            setErrorsFB(errorFB[0].error+' '+errorFB[0].description)
        }

        if(errorFD){
            setErrorsFD(errorFD[0].error+' '+errorFD[0].description)
        }

        if(errorFC){
            setErrorsFC(errorFC[0].error+' '+errorFC[0].description)
        }

        if(errorFR){
            setErrorsFR(errorFR[0].error+' '+errorFR[0].description)
        }

    })

    const validateForm=(form: any, nameForm:string, nameDesc: string)=>{
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
