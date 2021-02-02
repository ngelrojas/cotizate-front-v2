import React from 'react'
import {useForm} from 'react-hook-form'
import {useRouteMatch} from 'react-router-dom'
import {connect} from 'react-redux'
import {Editor} from '@tinymce/tinymce-react'
import {Row, Col} from 'react-styled-flexboxgrid'
import {store} from 'react-notifications-component'
import {Cities} from '../../../../../../userCities'
import {Reward} from '../../../../../../userReward'
import TableReward from './table-reward'
import Moment from 'react-moment'
import {
    InputReward,
    Form,
    MsgError,
    MsgErrorPhase,
    WrapperBoxRD,
    BoxTitle,
    BoxTitleContent,
    H4,
    TextConf,
    SpaceB,
    WrappBoxInput,
    BoxInputReward,
    BoxText,
    BSRE,
    TableCities,
    ItemCity,
    SecondItem,
    BoxCity,
    WrapperSavePhases,
    WrapBtnSaves,
    BtnSP,
    BtnUP
} from '../../styles'

type FormData = {
    id: number
    title: string,
    amount: number,
    description: string,
    expected_delivery: string,
    header: number,
    user: number,
    cities:[],
    all_cities: boolean,
    pick_up_locally: boolean

}

type TypeReward = {
    rewards: FormData
}

type AllProps = TypeReward

const FormRewards: React.FC<AllProps>= ({rewards}) => {
    let match = useRouteMatch('/panel-de-usuario/actualizar-proyecto/:campania')
    let matchUrl: any = match
    let token = window.sessionStorage.getItem('token')
    let Rewards = new Reward(token)
    let City = new Cities(token)
    let campaingId = matchUrl.params.campania
    const [resumes, Setresumes] = React.useState()
    const [selected, Setselected] = React.useState<number[]>([])
    const [MsgErrorF, setMsgErrorF] = React.useState()
    const [cities, setCities] = React.useState()
    const [AddOption, setAddOption] = React.useState()
    const {register, handleSubmit, reset, errors} = useForm<FormData>({
        mode: 'onChange'
    })
    
    const listCities = () => {
        City.listCities()
            .then(resp => {
                setCities(resp.data)
            }).catch(err => {
                console.info(err)
            })
    }

    const onSubmit = handleSubmit(({title, amount, expected_delivery, all_cities, pick_up_locally}) => {
        
        if(AddOption === "add"){
            CreateRewards(title, amount, expected_delivery, all_cities, pick_up_locally)
        }else{
            UpdateRewards(title, amount, expected_delivery, all_cities, pick_up_locally)
        } 

    })

    const UpdateRewards = (title: string, amount:number, expected_delivery: string, all_cities: any, pick_up_locally:any) => {
        if(validate()){
            let new_date: any = expected_delivery ? expected_delivery + " 00:00:00": expected_delivery 
            let data_format = new_date ? new_date : rewards.expected_delivery
            let rewardId = rewards.id

            let data_reward = { 
                title: title,
                amount: amount,
                description: resumes,
                expected_delivery: data_format,
                header: rewards.header,
                user: 0,
                cities: selected,
                all_cities: all_cities,
                pick_up_locally: pick_up_locally
            }

            Rewards.updateReward(rewardId, data_reward)
                .then(resp => {
                    Notifications('Recompensa actualizada.', 'success')
                    reset() 
                    setMsgErrorF('')
                }).catch(err => {
                    Notifications('La descripcion de la Recompensa no debe exceder mas 900 caracteres o 159 palabras.', 'danger')
                })         
        }
    }

    const CreateRewards = (title: string, amount:number, expected_delivery: string, all_cities: any, pick_up_locally:any) => {
        if(validate()){
            let data_format = expected_delivery + " 00:00:00"
            let data_reward = { 
                title: title,
                amount: amount,
                description: resumes,
                expected_delivery: data_format,
                header: campaingId,
                user: 0,
                cities:selected,
                all_cities: all_cities,
                pick_up_locally: pick_up_locally
            }

            Rewards.createReward(data_reward)
                .then(resp => {
                    Notifications('Recompensa agregada.', 'success')
                    reset() 
                    setMsgErrorF('')
                }).catch(err => {
                    Notifications('La descripcion de la Recompensa no debe exceder mas 900 caracteres o 159 palabras.', 'danger')
                })         
        }
    }

    const handleAdd = (e:any) => {
        let options: any = e.target.id
        setAddOption(options)
    }

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
        Setresumes(content)
    }

    const validate = () => { 
        if(resumes.length === 0){

            Notifications('La Descripcion de la recompensa es requerida', 'danger')
            setMsgErrorF('este campo es requerido')
            return false
        }
        if(resumes.length >= 940){
            Notifications('La descripcion de la Recompensa no debe exceder mas 900 caracteres o 159 palabras.', 'danger')
            setMsgErrorF('no debe exceder mas de 900 caracteres o 159 palabras')
            Setresumes(0)
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
        listCities()
    },[])

    return (
        <>
        <Row>                                                                                                                            
            <H4>4- RECOMPENSAS </H4> 
        </Row>
        <Row> 
            <TextConf>Antes de ofrecer una recompensa, es importante tener mapeados todos los procesos de producción y entrega.</TextConf>
        </Row>

        <Row>
            <Col xs={5}>
                <TableReward />
            </Col>
            <Col xs={7}>

   
        <Form onSubmit={onSubmit}>

        <WrapperBoxRD>
                <BoxTitleContent>* Titulo</BoxTitleContent>
                     <InputReward
                        type="text"
                        name="title"
                        ref={register({required: true})}
                        placeholder="titulo de la recompensa"
                        defaultValue={rewards.title}
                    />
                <MsgError>
                    {errors.title && 'este campo es requerido'}
                </MsgError>
            
                <SpaceB />
                <Row>
                <Col xs={6}>
                <WrappBoxInput>
                <BoxTitleContent>* Monto</BoxTitleContent>
                    <BoxInputReward
                        type="number"
                        name="amount"
                        ref={register({required: true})}
                        placeholder="15000"
                        defaultValue={rewards.amount}
                    />
                    <BSRE>BS</BSRE> 
                </WrappBoxInput>
                    <MsgError>{errors.amount && 'este campo es requerido'}</MsgError>
                </Col>
                <Col xs={6}>
                <BoxTitleContent>* Entrega prevista:  <span><Moment format="DD/MM/YYYY">{rewards.expected_delivery}</Moment></span></BoxTitleContent>
                
                <WrappBoxInput>
                    <InputReward
                        type="date"
                        name="expected_delivery"
                        ref={register({required: false})}
                    />
                </WrappBoxInput>
                <MsgError>{errors.expected_delivery && 'este campo es requerido'}</MsgError>
                </Col>
                </Row>

                <SpaceB />
                
            <BoxTitle>* Descripcion de la recompensa</BoxTitle>
            <BoxText> 
            La descripcion de la Recompensa no debe exceder mas de <b> 900</b> caracteres o<b> 159</b> palabras.
            </BoxText>
            <SpaceB />
                <Editor
                    value={rewards.description}
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
                    <Col xs={3}>
                        <BoxTitle>Alcanse de entrega a : </BoxTitle>
                    </Col>
                    <Col xs={9}>
                <BoxCity>
                    <Row between="xs">

                    <Col xs={12}>
                        <TableCities>
                            <Row>
                                {
                                    cities && cities.map((ct: any) =>(
                                        <Col xs={4} key={ct.id}>
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
                                            /> Retirar en el local
                                        </ItemCity>
                                    </Col>
                            </Row>
                        </SecondItem>
                    </Col>
                    </Row>
                </BoxCity>
                    </Col>
                </Row>

            </WrapperBoxRD>
            <Row>
                <WrapperSavePhases>
                    <WrapBtnSaves>
                        <BtnSP>actualizar</BtnSP>
                        <BtnUP id="add" onClick={(e)=>handleAdd(e)}>adicionar</BtnUP>
                    </WrapBtnSaves>
                </WrapperSavePhases>
            </Row>
        </Form>

            </Col>
        </Row>
       
        </>

    )
}

const mapStateToProps = (state: any) => ({
    rewards: state.reward
})

export default connect(mapStateToProps, '')(FormRewards)
