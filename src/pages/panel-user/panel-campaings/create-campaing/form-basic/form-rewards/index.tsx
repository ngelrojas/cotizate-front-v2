import React from 'react'
import {useForm} from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'
import {Row, Col} from 'react-styled-flexboxgrid'
// import TableReward from './table-reward'
import {CampaingHeader} from '../../../../../../userCampaings'
import {Cities} from '../../../../../../userCities'
import {Reward} from '../../../../../../userReward'
import {
    Input,
    BtnAdd,
    Form,
    MsgError,
    MsgSuccess,
    WrapperBoxRD,
    BoxTitle,
    H4,
    TextConf,
    WrapBtnAdd,
    SpaceB,
    WrappBoxInput,
    BoxInput,
    BS,
    TableCities,
    ItemCity,
    SecondItem,
    BoxCity
} from '../../styles'

type FormData = {
    title: string,
    amount: number,
    descript: string,
    expected_delivery: string,
    header: number,
    user: number,
    cities:[],
    all_cities: boolean,
    pick_up_locally: boolean

}


const FormRewards: React.FC = () => {
    let token = window.sessionStorage.getItem('token')
    let CamHeader = new CampaingHeader(token)
    let Rewards = new Reward(token)
    let City = new Cities(token)
    const [datach, setDatach] = React.useState<number>(0)
    const [msg, Setmsg] = React.useState('')
    const [description, Setdescription] = React.useState()
    const [selected, Setselected] = React.useState<number[]>([])
    const [MsgErrorF, setMsgErrorF] = React.useState()
    //const [sendData, SetsendData] = React.useState<FormData[]>([])
    const [cities, setCities] = React.useState()
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })
    
    const listCities = () => {
        City.listCities()
            .then(resp => {
                console.info(resp.data)
                setCities(resp.data)
            }).catch(err => {
                console.info(err)
            })
    }

    const getLast = () => {
        CamHeader.getLastCampaingHeader()
            .then(resp => {
                setDatach(resp.data.data.id)
            }).catch(err =>{
                console.error(err)
            })
    }

    const onSubmit = handleSubmit(({title, amount, descript, expected_delivery, all_cities, pick_up_locally}) => {
        if(validate()){
            let data_format = expected_delivery + " 00:00:00"
            let data_reward = { 
                title: title,
                amount: amount,
                description: description,
                expected_delivery: data_format,
                header: datach,
                user: 0,
                cities:selected,
                all_cities: all_cities,
                pick_up_locally: pick_up_locally
            }

            Rewards.createReward(data_reward)
                .then(resp => {
                    console.info(resp.data)
                    Setmsg('recompensa agregada.')
                    setMsgErrorF('')
                }).catch(err => {
                    console.info(err)
                })         
        }

    })

    const handleCities = (e:React.FormEvent<HTMLInputElement> ) => {
        const id: number = +e.currentTarget.value
        const {checked} = e.currentTarget
        if(checked){
            Setselected(prev=>[...prev, id])
        }else{
            Setselected(prev=>prev.filter(item=>item !== id))
        } 
    }

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
        listCities()
        
    },[])

    return (
        <>

        <H4>3- RECOMPENSAS </H4>
        <TextConf>Antes de ofrecer una recompensa, es importante tener mapeados todos los procesos de producción y entrega.</TextConf>
        
        <Form onSubmit={onSubmit}>

        <WrapperBoxRD>
                <BoxTitle>* Titulo</BoxTitle>
                    <SpaceB />
                     <Input
                        type="text"
                        name="title"
                        ref={register({required: true})}
                        placeholder="titulo de la recompensa"
                    />
                <MsgError>
                    {errors.title && 'este campo es requerido'}
                </MsgError>
            
                <SpaceB />
                <BoxTitle>* Monto</BoxTitle>
                <SpaceB />
                <WrappBoxInput>
                    <BoxInput
                        type="number"
                        name="amount"
                        ref={register({required: true})}
                        placeholder="15000"
                    />
                    <BS>BS</BS>
                </WrappBoxInput>

                <MsgError>{errors.amount && 'este campo es requerido'}</MsgError>
                <SpaceB />
                <BoxTitle>* Entrega prevista</BoxTitle>
                <SpaceB />
                <WrappBoxInput>
                    <Input
                        type="date"
                        name="expected_delivery"
                        ref={register({required: true})}
                    />
                </WrappBoxInput>
            <SpaceB />
            <BoxTitle>* Descripcion de la recompensa</BoxTitle>
            <SpaceB />
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
                <SpaceB />
                <BoxTitle>Alcanse de entrega a : </BoxTitle>
                <SpaceB />
                <BoxCity>
                    <Row between="xs">

                    <Col xs={12}>
                        <TableCities>
                            <Row between="xs">
                                {
                                    cities && cities.map((ct: any)=>(
                                            <Col xs={4} key={ct.id} > 
                                            <ItemCity>
                                            <input 
                                                defaultChecked={selected.includes(ct.id)}
                                                type="checkbox" 
                                                name="cities[]" 
                                                value={ct.id}
                                                onClick={handleCities} 
                                                />{ct.name} 
                                            </ItemCity>
                                            </Col>
                                    )) 
                                }
                            </Row>

                        </TableCities>
                        <SecondItem>

                            <Row>
                                    <Col xs={6} > 
                                    <ItemCity>
                                        <input 
                                            type="checkbox" 
                                            name="all_cities" 
                                            value="1"
                                            ref={register({required: false})}
                                        /> Toda Bolivia
                                    </ItemCity>
                                    </Col>
                                    <Col xs={6} > 
                                    <ItemCity>
                                        <input 
                                            type="checkbox" 
                                            name="pick_up_locally" 
                                            value="1"
                                            ref={register({required: false})}
                                        /> Retirar en le local
                                    </ItemCity>
                                    </Col>
                            </Row>
                        </SecondItem>
                    </Col>
                    </Row>
                </BoxCity>


                <MsgSuccess>{msg}</MsgSuccess>
                
                <MsgError>{MsgErrorF}</MsgError>

                <WrapBtnAdd>
                    <BtnAdd>adicionar</BtnAdd>
                </WrapBtnAdd>

            </WrapperBoxRD>

        </Form>       
        
        </>

    )
}

export default FormRewards
