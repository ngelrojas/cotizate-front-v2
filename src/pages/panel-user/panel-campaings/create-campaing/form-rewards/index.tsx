import React from 'react'
import {useForm} from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'
import {
    Label,
    Input,
    FormSubTitle,
    WrapBtn,
    BtnNext,
    Form,
    MsgError,
    MsgSuccess,
    BtnCreateCampaing
} from '../styles'

type FormData = {
    title: string
    cant_reward: number
    description: string
}


const FormRewards: React.FC = () => {
    const [msg, Setmsg] = React.useState('')
    const [description, Setdescription] = React.useState()
    let token = window.sessionStorage.getItem('token')
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(({title, cant_reward, description}) => {
        let send_data = {
            title: title,
            cant_reward: cant_reward,
            description: description
        }

        window.localStorage.setItem('formReward', JSON.stringify(send_data))
        Setmsg('recompensa guardada.')
    })

    const handleEditorReward = (content: any, editor: any) => {
        Setdescription(content)
    }

    return (
        <Form onSubmit={onSubmit}>
            <Label>
                <FormSubTitle>Titulo</FormSubTitle>
                <Input
                    type="text"
                    name="title"
                    ref={register({required: true})}
                    placeholder="titulo de la recompensa"
                />

                <MsgError>
                    {errors.title && 'este campo es requerido'}
                </MsgError>
            </Label>
            <Label>
                <FormSubTitle>Monto</FormSubTitle>
                <Input
                    type="number"
                    name="cant_reward"
                    ref={register({required: true})}
                    placeholder="cantidad de la recompensa"
                />
                <MsgError>{errors.cant_reward && 'este campo es requerido'}</MsgError>
            </Label>
            <FormSubTitle>descripcion de la recompensa</FormSubTitle>
                <Editor
                    initialValue=""
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
                    onEditorChange={handleEditorReward}
                />
            <MsgSuccess>{msg}</MsgSuccess>
            <WrapBtn>
                <BtnNext>adicionar</BtnNext>
            </WrapBtn>
            <WrapBtn>
                <BtnCreateCampaing>gravar campaña</BtnCreateCampaing>
            </WrapBtn>
        </Form>
    )
}

export default FormRewards
