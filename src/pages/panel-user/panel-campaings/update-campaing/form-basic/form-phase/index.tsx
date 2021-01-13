import React from 'react'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'
import {useRouteMatch} from 'react-router-dom'
import {Editor} from '@tinymce/tinymce-react'
import {store} from 'react-notifications-component'
import {Row, Col} from 'react-styled-flexboxgrid'
import {Phases} from '../../../../../../userPhases'
import Slide from 'react-reveal/Slide'
import TablePhases from './table-phase'
import {
    FormR,
    MsgErrorPhase,
    MsgError,
    WrapperBoxRD,
    WrapperBox,
    BoxTitleContent,
    BoxText,
    WrappBoxInput,
    BoxInputPhase,
    BoxInput,
    BS,
    WrapperSavePhase,
    WrapBtnSave,
    BtnSaveProject
} from '../../styles'

type FormData = {
    id: number
    title: string
    description: string
    amount: number
    header: number
}

type TypePhase = {
    phases: FormData 
}

type AllProps = TypePhase

const FormPhase: React.FC<AllProps> = ({phases}) => {
    let match = useRouteMatch('/panel-de-usuario/actualizar-proyecto/:campania')
    let matchUrl: any = match
    let campaingId = matchUrl.params.campania
    let token = window.sessionStorage.getItem('token')
    let Phase = new Phases(token)
    const [resumes, Setresumes] = React.useState()
    const [MsgErrorF, setMsgErrorF] = React.useState()
    const {register, handleSubmit, reset, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(({title, amount}) => {
        if(validate()){
            let data_phase = {
                title: title,
                amount: amount,
                description: resumes,
                header: campaingId 
            }

            let headerId = phases.header
            let phaseId = phases.id

            Phase.updatePhases(phaseId, headerId, data_phase)
                .then(resp => {
                    Notifications('Fase actualizada.', 'success')
                    reset() 
                    setMsgErrorF('')
                }).catch(err =>{    
                    setMsgErrorF('no debe exceder mas 150 palabras')
                    Notifications('La descripcion de la Fase no debe exceder mas 870 caracteres o 150 palabras.', 'danger')
                })
        }
    })

    const handleEditorReward = (content: any, editor: any) => {
        Setresumes(content)
    }

    const validate = () => { 
        if(!resumes){
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
        const input: any = document.querySelector('input[name="title"]')
        input.focus()
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        
    },[phases])

    return (
        <>
        <Slide top>

        <WrapperBoxRD>
        <Row>
                <TablePhases />
        </Row>
            <WrapperBox>
                <BoxTitleContent> *Fases del proyecto</BoxTitleContent>
                <BoxText> 
                 ¿Cómo se utilizará su dinero? Cuanta más transparencia, mejor. Muestre qué pasos seguira y cuanto de dinero invertira en cada fase del proyecto.
                </BoxText>
            </WrapperBox>

        <FormR onSubmit={onSubmit}>
<Row>
        <Col xs={6}>
                    <BoxTitleContent>* Titulo de la Fase </BoxTitleContent>
                    <WrappBoxInput>
                        <BoxInputPhase
                            type="text"
                            name="title"
                            ref={register({required: true})}
                            placeholder="Fase"
                            defaultValue={phases.title ? phases.title: ''}
                        />
                    </WrappBoxInput>

                    <MsgError>
                        {errors.title && 'este campo es requerido'}
                    </MsgError>
        </Col>
        <Col xs={6}>
                    <BoxTitleContent>* Cuanto de dinero necesitaras para esta fase del proyecto </BoxTitleContent>
                    <WrappBoxInput>
                        <BoxInput
                            name="amount"
                            ref={register({required: true})}
                            placeholder="000.000.000"
                            defaultValue={phases.amount ? phases.amount: ''}
                        />
                        <BS>BS</BS>
                    </WrappBoxInput>
                    <MsgError>
                        {errors.amount && 'este campo es requerido'}
                    </MsgError>
        </Col>
</Row>
                <BoxTitleContent>* Descripcion</BoxTitleContent>
                <BoxText> 
                Descripción de la fase no debe exceder mas de  870 caracteres o 150 palabras
                </BoxText>
                <Editor
                    value={phases.description}
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

            <Row>
                <WrapperSavePhase>
                    <WrapBtnSave>
                        <BtnSaveProject>actualizar</BtnSaveProject>
                    </WrapBtnSave>
                </WrapperSavePhase>
            </Row>

        </FormR>

        </WrapperBoxRD> 
        </Slide>
        </>

    )
}

const mapStateToProps = (state: any) => ({
    phases: state.phase
})

export default connect(mapStateToProps, '')(FormPhase)
