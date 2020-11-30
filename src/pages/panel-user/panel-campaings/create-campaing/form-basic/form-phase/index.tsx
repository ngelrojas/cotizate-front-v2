import React from 'react'
import {useForm} from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'
import {store} from 'react-notifications-component'
import {CampaingHeader} from '../../../../../../userCampaings'
import {Phases} from '../../../../../../userPhases'
import {
    WrapBtnAdd,
    BtnAdd,
    FormR,
    MsgErrorPhase,
    MsgError,
    WrapperBoxRD,
    WrapperBox,
    BoxTitle,
    BoxText,
    WrapperBoxPhase,
    WrappBoxInput,
    BoxInputPhase,
    BoxInput,
    BS
} from '../../styles'

type FormData = {
    title: string
    amount: number
}

const FormPhase: React.FC= () => {

    let token = window.sessionStorage.getItem('token')
    let CamHeader = new CampaingHeader(token)
    let Phase = new Phases(token)
    const [datach, setDatach] = React.useState<number>(0)
    const [description, Setdescription] = React.useState()
    const [MsgErrorF, setMsgErrorF] = React.useState()
    const {register, handleSubmit, reset, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const getLast = () => {
        CamHeader.getLastCampaingHeader()
            .then(resp => {
                setDatach(resp.data.data.id)
            }).catch(err =>{
                console.error(err)
            })
    }

    const onSubmit = handleSubmit(({title, amount}) => {
        if(validate()){
            let data_phase = {
                title: title,
                amount: amount,
                description: description,
                header: datach 
            }

            Phase.createPhase(data_phase)
                .then(resp => {
                    Notifications('Fase Guardada, puede seguir agregando.', 'success')
                    reset() 
                    setMsgErrorF('')
                }).catch(err =>{    
                    setMsgErrorF('no debe exceder mas 150 palabras')
                    Notifications('La descripcion de la Fase no debe exceder mas 870 caracteres o 150 palabras.', 'danger')
                })
        }
    })

    const handleEditorReward = (content: any, editor: any) => {
        Setdescription(content)
    }

    const validate = () => { 
        if(!description){
            setMsgErrorF('este campo es requerido')
            Notifications('La Fase debe contener una descripcion', 'danger')
            return false
        }
        return true
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
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
       getLast()
    },[])

    return (
        <>
            <WrapperBoxRD>
            <WrapperBox>
                <BoxTitle> *Fases del proyecto</BoxTitle>
                <BoxText> 
                 ¿Cómo se utilizará su dinero? Cuanta más transparencia, mejor. Muestre qué pasos seguira y cuanto de dinero invertira en cada fase del proyecto.
                </BoxText>
            </WrapperBox>

        <FormR onSubmit={onSubmit}>
            <WrapperBoxPhase>
                    <BoxText>* Titulo de la Fase </BoxText>
                    <WrappBoxInput>
                        <BoxInputPhase
                            type="text"
                            name="title"
                            ref={register({required: true})}
                            placeholder="Fase"
                        />
                    </WrappBoxInput>

                    <MsgError>
                        {errors.title && 'este campo es requerido'}
                    </MsgError>
            </WrapperBoxPhase>
            <WrapperBoxPhase>
                    <BoxText>* Cuanto de dinero necesitaras para esta fase del proyecto </BoxText>
                    <WrappBoxInput>
                        <BoxInput
                            type="number"
                            name="amount"
                            ref={register({required: true})}
                            placeholder="100"
                        />
                        <BS>BS</BS>
                    </WrappBoxInput>

                    <MsgError>
                        {errors.amount && 'este campo es requerido'}
                    </MsgError>
            </WrapperBoxPhase>
                <BoxText> 
                Descripción de la fase no debe exceder mas de  870 caracteres o 150 palabras
                </BoxText>
                <Editor
                    initialValue=''
                    init={{
                        height: 300,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor image',
                            'imagetools searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | image | imagetools bullist numlist outdent indent | removeformat | help',
                        automatic_uploads: true,
                        file_picker_types: 'image',
                        file_picker_callback: function(
                            cb: any,
                            value: any,
                            meta: any
                        ) {
                            let input = document.createElement('input')
                            input.setAttribute('type', 'file')
                            input.setAttribute('accept', 'image/*')
                            input.onchange = function(files: any) {
                                let file: any = (input as any).files[0]
                                let reader: any = new FileReader()
                                reader.onload = function() {
                                    let id = 'blobid' + new Date().getTime()
                                    let blobCache = (window as any).tinymce
                                        .activeEditor.editorUpload.blobCache
                                    let base64 = reader.result.split(',')[1]
                                    let blobInfo: any = blobCache.create(
                                        id,
                                        file,
                                        base64
                                    )
                                    blobCache.add(blobInfo)
                                    cb(blobInfo.blobUri(), {title: file.name})
                                }
                                reader.readAsDataURL(file)
                            }
                            input.click()
                        }
                    }}
                    onEditorChange={handleEditorReward}
                />
 
            <MsgErrorPhase>{MsgErrorF}</MsgErrorPhase>

            <WrapBtnAdd>
                <BtnAdd>adicionar</BtnAdd>
            </WrapBtnAdd>

        </FormR>

        </WrapperBoxRD> 

        </>

    )
}

export default FormPhase
