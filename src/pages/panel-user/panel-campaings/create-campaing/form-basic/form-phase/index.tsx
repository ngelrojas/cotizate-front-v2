import React from 'react'
import {useForm} from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'
import {CampaingHeader} from '../../../../../../userCampaings'
import {Phases} from '../../../../../../userPhases'
// import {Row} from 'react-styled-flexboxgrid'
//import PhaseContext from '../../../../../../context/phases'
//import TablePhase from './table-phase'
import {
    WrapBtnAdd,
    BtnAdd,
    FormR,
    MsgError,
    MsgSuccess,
    WrapperBoxRD,
    WrapperBox,
    //WrapperBoxTableP,
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

const FormPhase: React.FC = () => {

    let token = window.sessionStorage.getItem('token')
    let CamHeader = new CampaingHeader(token)
    let Phase = new Phases(token)
    const [datach, setDatach] = React.useState<number>(0)
    const [msg, Setmsg] = React.useState('')
    const [description, Setdescription] = React.useState()
    const [MsgErrorF, setMsgErrorF] = React.useState()
    const {register, handleSubmit, errors} = useForm<FormData>({
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
                    Setmsg('Fase Agregada.')
                    setMsgErrorF('')
                }).catch(err =>{    
                    setMsgErrorF('no debe exceder mas 150 palabras')
                })
        }
    })

    const handleEditorReward = (content: any, editor: any) => {
        Setdescription(content)
    }

    const validate = () => { 
        if(!description){
            setMsgErrorF('este campo es requerido')
            return false
        }
        return true
    }
    
    React.useEffect(()=>{ 
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
                            placeholder="Fase 1"
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

            <MsgSuccess>{msg}</MsgSuccess>
            
            <MsgError>{MsgErrorF}</MsgError>

            <WrapBtnAdd>
                <BtnAdd>adicionar</BtnAdd>
            </WrapBtnAdd>

        </FormR>

        </WrapperBoxRD> 

        </>

    )
}

export default FormPhase
