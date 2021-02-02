import React from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {store} from 'react-notifications-component'
import {Editor} from '@tinymce/tinymce-react'
import DefaultImg from '../public/default.png'
import {CampaingHeader, Campaings} from '../../../../../../userCampaings'
import {Row, Col} from 'react-styled-flexboxgrid'
import {next, back} from '../../../../../../redux/actions/next_back.actions'
import Slide from 'react-reveal/Slide'

import {
    Input,
    WrapBtnSave,
    WrapperSave,
    BtnSaveProject,
    Form,
    MsgError,
    H4,
    TextConf,
    WrapperBox,
    BoxTitle,
    BoxText,
    BoxTextPhase,
    BoxTextPD,
    BoxTextPR,
    Img,
    ImgText,
    WrapperBoxRD,
    BoxTitleContent,
} from '../../styles'

type FormData = {
    title: string
    video_main: string
    imagen_main: any 
    excerpt: string
    description: string
    public_at: string
    header: number
    currency: string
    short_url: string
    slogan_campaing: string
    profile_ca: number
}

interface Icounter {
    counter: any 
}

interface Ihandlers {
    handleNext: typeof next; 
    handleBack: typeof back; 
}

type AllProps = Icounter & Ihandlers

const FormDescription: React.FC<AllProps> = ({counter, handleNext, handleBack}) => {

    let token = window.sessionStorage.getItem('token')
    let CamHeader = new CampaingHeader(token)
    let CamBody = new Campaings(token)
    const [description, setDescripction] = React.useState('')
    const [excerpt, setExcerpt] = React.useState('')
    const [msgExcerpt, setMsgExcerpt] = React.useState('')
    const [msgdescription, setMsgdescription] = React.useState('')
    const [datach, setDatach] = React.useState()
    const [showImg, SetShowImg] = React.useState()
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

    const handleEditorChange = (content: any, editor: any) => {
        setDescripction(content)
    }

    const handleEditorExcerptChange = (content: any, editor: any) => {
        setExcerpt(content)
    }
    // TODO: HERE PROBLEM TO SEND IMAGES
    const onSubmit = handleSubmit(({title, video_main, imagen_main, public_at, short_url, slogan_campaing}) => {
        
        if (validate()) {
            let send_data = {
                title: title,
                video_main: video_main,
                imagen_main: imagen_main[0],
                excerpt: excerpt,
                description: description, 
                public_at: "2020-03-19 00:00:00", 
                header: datach,
                currency: 1, 
                short_url: short_url ? short_url: '', 
                slogan_campaing: slogan_campaing ? slogan_campaing: ''
            }
            console.info(send_data)
            CamBody.createCampaing(send_data)
                .then(resp =>{
                    //Notifications('Datos de Descripcion de proyecto guardados', 'success')
                    //setMsgExcerpt('')
                    //setMsgdescription('')
                    //reset()
                    //handleNext()
                }).catch(err => {
                    console.error(err)
                    //Notifications('Porfavor debe revisar los datos a ser llenados.', 'danger')
                })

        }

    })

    const validate = () => {
        if (excerpt.length === 0) {
            Notifications('El Resumen de tu proyecto es requerido','danger')
            setMsgExcerpt('este campo es requerido')
            return false
        }

        if (excerpt.length >= 249) {
            setMsgExcerpt('asegurate de no tener letras resaltadas o con negritas.')
            Notifications('El Resumen no debe superar las 44 palabras','danger')
            return false
        }

        if (description.length === 0) {
            setMsgdescription('este campo es requerido')
            Notifications('Es obligatorio detallar tu proyecto','danger')
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

    const _onChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        let file: any = event.currentTarget.files 
        let reader = new FileReader()

        reader.onloadend = () => {
            SetShowImg(reader.result)
        }

        reader.readAsDataURL(file[0])
    }

    React.useEffect(()=>{
        const input: any = document.querySelector('input[name="title"]')
        input.focus()
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
        getLast()
    },[])

    return (
        <>
        <Slide top>
        <H4>2.- DESCRIPCmeIÓN DEL PROYECTO </H4>
        <TextConf>Describe tu proyecto en forma clara, cuando llegues a las faces detente y piensa en cuanto nesecitas para cada  face de tu proyecto y cuanto será el costo para este item  
        </TextConf>
        <Form onSubmit={onSubmit} encType="multipart/form-data">
        <Row>
            <Col xs={6}>
                    <BoxTitle>* Titulo</BoxTitle>
                    <BoxText>¿Cuál es el título del proyecto? </BoxText>
                    <Input
                        type="text"
                        name="title"
                        ref={register({required: true})}
                    />
                    <MsgError>
                        {errors.title && 'este campo es requerido'}
                    </MsgError>
            </Col>
            <Col xs={6}>
                <BoxTitle>Lema de la campaña del proyecto</BoxTitle>
                    <BoxText>Elija una frase que permite resumir el espíritu o la idea de tu campaña</BoxText>
                    <Input
                        type="text"
                        name="slogan_campaing"
                        ref={register({required: false})}
                    />
            </Col>
        </Row>
        <Row>
            <Col xs={6}>
                <BoxTitle>Url corto del proyecto</BoxTitle>
                    <BoxTextPhase>Puede adicionar una url corta para que su proyecto, sea compartido de manera mas fasil.</BoxTextPhase>
                    <Input
                        type="text"
                        name="short_url"
                        ref={register({required: false})}
                    />
            </Col>
            <Col xs={6}>
                    <BoxTitle>* Video</BoxTitle>
                    <BoxTextPhase>As tu mejor video, Un buen video marca la diferencia y es en gran parte responsable del éxito de tu proyecto.</BoxTextPhase>
                    <Input
                        type="text"
                        name="video_main"
                        ref={register({required: true})}
                    />
                    <MsgError>
                        {errors.video_main && 'este campo es requerido'}
                    </MsgError>
            </Col>
        </Row>

        <WrapperBox>
                <BoxTitle>* Imagen</BoxTitle>
                <Row>
                    <Col xs={6}>
                        <ImgText>
                            Esta imagen se utilizará como miniatura de su proyecto (PNG, JPG tamaño 305 x 161 pixeles tamanho minimo 220 x 220 px.
                        </ImgText>
                        <input
                            type="file"
                            name="imagen_main"
                            ref={register({required: true})}
                            accept="image/png, image/jpeg"
                            onChange={_onChange}
                        />
                    </Col>
                    
                        <Col xs={5}>

                        <Img src={ showImg ? showImg : DefaultImg } alt="cotizate" />
                        
                        </Col>
                    
                <MsgError>
                    {errors.imagen_main && 'este campo es requerido'}
                </MsgError>
                </Row>
        </WrapperBox>
     
            <WrapperBoxRD>
                <BoxTitleContent> * Resumen descripción </BoxTitleContent>
                <BoxTextPR> 
                Este es el resumen de  descripción del post utiliza max. 244 caracteres o 44 palabras
                </BoxTextPR>
                <Editor
                    initialValue=''
                    init={{
                        height: 200,
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
                    onEditorChange={handleEditorExcerptChange}
                />
                <MsgError>{msgExcerpt}</MsgError>
            </WrapperBoxRD>

            <WrapperBoxRD>
                <BoxTitleContent>* Descripción de tu campaña </BoxTitleContent>
                <BoxTextPD> 
                Habla con claridad sobre lo que quieres lograr. Aclara posibles dudas sobre cómo se utilizará el dinero, quién está detrás del proyecto, La transparencia atrae a más seguidores. Recuerde: su proyecto será accedido por personas comunes que decidirán si quieren o no apoyar su proyecto.
                </BoxTextPD>
                <Editor
                    initialValue=''
                    init={{
                        height: 500,
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
                                    console.log(blobInfo)
                                    blobCache.add(blobInfo)
                                    cb(blobInfo.blobUri(), {title: file.name})
                                }
                                reader.readAsDataURL(file)
                            }
                            input.click()
                        }
                    }}
                    onEditorChange={handleEditorChange}
                />
                <MsgError>{msgdescription}</MsgError>
            </WrapperBoxRD>
            <Row>
                <WrapperSave>
                    <WrapBtnSave>
                        <BtnSaveProject>guardar</BtnSaveProject>
                    </WrapBtnSave>
                </WrapperSave>
            </Row>
        </Form>
        </Slide>
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

export default connect(mapStateToProps,mapDispatchToProps)(FormDescription)
