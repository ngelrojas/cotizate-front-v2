import React from 'react'
import {useForm} from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'
import {Campaings} from '../../../../../userCampaings'
import {
    Label,
    Input,
    FormSubTitle,
    WrapBtn,
    BtnNext,
    Form,
    MsgError,
    MsgSuccess
} from '../styles'

type FormData = {
    public_at: string
    excerpt: string
    description: number
}

type propsCamp = {
    id: number,
    public_at: any,
    excerpt: string,
    description: string 
}

const FormDescription: React.FC<propsCamp> = (propsCamp) => {
    const [msg, Setmsg] = React.useState('')
    const [description, setDescripction] = React.useState('')
    const [excerpt, setExcerpt] = React.useState('')
    const [msgExcerpt, setMsgExcerpt] = React.useState('')
    const [msgdescription, setMsgdescription] = React.useState('')
    let token = window.sessionStorage.getItem('token')
    let dataCampaing = new Campaings(token)
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

            let dformat = new Date(public_at)
            let send_data = {
                public_at: dformat.toISOString(),
                excerpt: excerpt,
                description: description
            }
            dataCampaing.updateCampaing(propsCamp.id, send_data).then(res =>{
                console.log(res.data.data)
                if (res.data.data){
                    Setmsg('datos de resumen y descripcion actualizados.')
                    setMsgExcerpt('')
                    setMsgdescription('')
                }
            }).catch(err =>{
                console.error(err)
                Setmsg('existe algun error porfavor intente mas tarde.')
            })

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

    const formattDate = (date_in_parse:Date)=>{
        var date_parse = new Date(date_in_parse)
        var day = date_parse.getDate()
        var month = date_parse.getMonth()
        var year = date_parse.getFullYear()
        var complete_date = year +'/'+month+'/'+day 
        return complete_date 

    }

    return (
        <Form onSubmit={onSubmit}>
            <Label>
                <FormSubTitle>fecha en al que se publicara</FormSubTitle>
                <Input
                    type="text"
                    name="public_at"
                    ref={register({required: true})}
                    defaultValue={formattDate(propsCamp.public_at)}
                />
                <MsgError>
                    {errors.public_at && 'este campo es requerido'}
                </MsgError>
            </Label>
            <Label>
                <FormSubTitle>resumen del proyecto</FormSubTitle>
                <Editor
                    initialValue={propsCamp.excerpt}
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
            </Label>
            <Label>
                <FormSubTitle>descripcion completa campaña</FormSubTitle>
                <Editor
                    initialValue={propsCamp.description}
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
            </Label>
            <MsgSuccess>{msg}</MsgSuccess>
            <WrapBtn>
                <BtnNext>guardar</BtnNext>
            </WrapBtn>
        </Form>
    )
}

export default FormDescription
