import React from 'react'
import {useForm} from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'
import Default from '../public/default.png'
import {Row, Col} from 'react-styled-flexboxgrid'

import {
    Input,
    WrapBtnSave,
    WrapperSave,
    BtnSaveProject,
    Form,
    MsgError,
    MsgSuccess,
    H4,
    TextConf,
    WrapperBox,
    BoxTitle,
    BoxText,
    Img,
    ImgText,
    WrapperBoxRD,
} from '../../styles'

type FormData = {
    title: string
    slogan_campaing: string
    imagen_campaing: string
    video: string
    public_at: string
    excerpt: string
    description: number
}

const FormDescription: React.FC = () => {
    const [msg, Setmsg] = React.useState('')
    const [description, setDescripction] = React.useState('')
    const [excerpt, setExcerpt] = React.useState('')
    const [msgExcerpt, setMsgExcerpt] = React.useState('')
    const [msgdescription, setMsgdescription] = React.useState('')
    const [formDesc, SetformDesc] = React.useState()
    const [showImg, SetShowImg] = React.useState()
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const handleEditorChange = (content: any, editor: any) => {
        setDescripction(content)
    }

    const handleEditorExcerptChange = (content: any, editor: any) => {
        setExcerpt(content)
    }

    const onSubmit = handleSubmit(({public_at}) => {
        if (validate()) {
            let send_data = {
                public_at: public_at,
                excerpt: excerpt,
                description: description
            }
            window.localStorage.setItem(
                'formDescription',
                JSON.stringify(send_data)
            )
            Setmsg('datos de resumen y descripcion guardados.')
            setMsgExcerpt('')
            setMsgdescription('')
        }
    })
    const validate = () => {
        if (excerpt.length === 0) {
            setMsgExcerpt('este campo es requerido')
            return false
        }

        if (description.length === 0) {
            setMsgdescription('este campo es requerido')
            return false
        }
        return true
    }

    const _onChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        let file: any = event.currentTarget.files 
        let reader = new FileReader()
        var url = reader.readAsDataURL(file)

        reader.onloadend = function(e){ 
            SetShowImg(url)
        }
        console.info(file)
    }

    React.useEffect(()=>{
        let _formDescription: any = window.localStorage.getItem('formDescription')
        let form_parse = JSON.parse(_formDescription)
        SetformDesc(form_parse)
        let _excerpt:any = form_parse
        setExcerpt(_excerpt?.excerpt)
        let _description: any = form_parse
        setDescripction(_description?.description)
    },[])

    return (
        <>
        <H4>2.- DESCRIPCIÓN DEL PROYECTO</H4>
        <TextConf>Describe tu proyecto en forma clara, cuando llegues a las faces detente y piensa en cuanto nesecitas para cada  face de tu proyecto y cuanto será el costo para este item  
        </TextConf>
        <Form onSubmit={onSubmit}>
        <WrapperBox>
                <BoxTitle>* Titulo</BoxTitle>
                <BoxText>¿Cuál es el título del proyecto? </BoxText>
                <Input
                    type="text"
                    name="title"
                    ref={register({required: true})}
                    defaultValue={formDesc?.title}
                />
        </WrapperBox>
        <WrapperBox>
                <BoxTitle>Lema de la campaña del proyecto</BoxTitle>
                <BoxText>Elija una frase que permite resumir el espíritu o la idea de tu campaña</BoxText>
                <Input
                    type="text"
                    name="slogan_campaing"
                    defaultValue={formDesc?.slogan_campaing}
                />
        </WrapperBox>
        <WrapperBox>
                <BoxTitle>* Imagen</BoxTitle>
                <Row>
                <Col xs={6}>
                    <ImgText>
                        Esta imagen se utilizará como miniatura de su proyecto (PNG, JPG tamaño 305 x 161 pixeles tamanho minimo 220 x 220 px.
                    </ImgText>
                </Col>
                <Col xs={5}>

                    <Img src={Default} alt="cotizate" />
                    <Input
                        type="file"
                        name="imagen_campaing"
                        ref={register({required: true})}
                        defaultValue={formDesc?.imagen_campaing}
                        accept="image/png, image/jpeg"
                        onChange={_onChange}
                    />
                </Col>
                </Row>
        </WrapperBox>
         <WrapperBox>
                <BoxTitle>* Video</BoxTitle>
                <BoxText>As tu mejor video, Un buen video marca la diferencia y es en gran parte responsable del éxito de tu proyecto.</BoxText>
                <Input
                    type="text"
                    name="video_campaing"
                    defaultValue={formDesc?.video_campaing}
                />
        </WrapperBox>       
            <WrapperBoxRD>
                <BoxTitle> * Resumen descripción </BoxTitle>
                <BoxText> 
                Este es el resumen de  descripción del post utiliza max. 200 caracteres
                </BoxText>
                <Editor
                    initialValue={formDesc?.excerpt}
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
                                    console.log(blobInfo)
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
                <BoxTitle>* Descripción de tu campaña </BoxTitle>
                <BoxText> 
                Habla con claridad sobre lo que quieres lograr. Aclara posibles dudas sobre cómo se utilizará el dinero, quién está detrás del proyecto, La transparencia atrae a más seguidores. Recuerde: su proyecto será accedido por personas comunes que decidirán si quieren o no apoyar su proyecto.
                </BoxText>
                <Editor
                    initialValue={formDesc?.description}
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

export default FormDescription
