import React from 'react'
import {useForm} from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import TableReward from './table-reward'
import {
    Label,
    Input,
    FormSubTitle,
    WrapBtn,
    BtnNext,
    FormR,
    MsgError,
    MsgSuccess
} from '../styles'

type FormData = {
    title: string
    cant_reward: number
    descript: string
}


const FormRewards: React.FC = () => {
    const [msg, Setmsg] = React.useState('')
    const [description, Setdescription] = React.useState()
    const [MsgErrorF, setMsgErrorF] = React.useState()
    const [sendData, SetsendData] = React.useState<FormData[]>([])
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(({title, cant_reward, descript}) => {
        if(validate()){
            let data_reward = {
                title: title,
                cant_reward: cant_reward,
                descript: description
            }
            const nextState = [...sendData, data_reward]
            SetsendData(nextState)  
            window.localStorage.setItem('formReward', JSON.stringify(nextState))
            Setmsg('recompensa agregada.')
            setMsgErrorF('')
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
        let _formreward: any = window.localStorage.getItem('formReward')  
        if(!_formreward){
            window.localStorage.setItem('formReward', JSON.stringify(sendData))
        }else{
            SetsendData(JSON.parse(_formreward))
        }
    },[])

    return (
        <Grid>
        <Row>
        <Col xs={6}>
        <FormR onSubmit={onSubmit}>
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
            <WrapBtn>
                <BtnNext>adicionar</BtnNext>
            </WrapBtn>
        </FormR>
        </Col>
        
        <TableReward />

        </Row>

        </Grid>

    )
}

export default FormRewards
