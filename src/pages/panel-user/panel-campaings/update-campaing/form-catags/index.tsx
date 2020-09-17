import React from 'react'
import {useForm} from 'react-hook-form'
import MultiSelect from 'react-multi-select-component'
import {CategoriesCampaing} from '../../../../../userCategories'
import {TagCampaing} from '../../../../../userTags'
import {Campaings} from '../../../../../userCampaings'
import SelectedField from '../../../../../components/selected-field'
import {
    Label,
    FormSubTitle,
    WrapBtn,
    BtnNext,
    Form,
    MsgError,
    MsgSuccess,
    SelectCat,
    TagLabel
} from '../styles'

type FormData = {
    category: string
    tags: string
    qty_day: number
    amount: number
}

interface listTag{
    label: string
    value: number
}

type propsCamp = {
    id: number,
    categories: number,
    tags: any
}

const FormCatTag: React.FC<propsCamp> = (propsCamp) => {
    const [msg, Setmsg] = React.useState('')
    const [cate, SetCate] = React.useState()
    const [tagcp, Settagcp] = React.useState()
    const [selected, Setselected] = React.useState<number[]>([])
    // const [selected, Setselected] = React.useState([])
    const [loadTag, SetloadTag] = React.useState()
    let token = window.sessionStorage.getItem('token')
    let dataCampaing = new Campaings(token)
    let CatCamp = new CategoriesCampaing(token)
    let TabCamp = new TagCampaing(token)
    let idTag:number

    let arrayTag: listTag[] = Array()
    const [chargeTag, setChargeTag] = React.useState()
    //const selectTags = React.useRef<HTMLSelectElement>(null)
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(({category, tags}) => {
        let send_data = {
            categories: category,
            tags:selected 
        }
        console.info(tags)
        /*dataCampaing.updateCampaing(propsCamp.id, send_data).then(res =>{*/
            //console.log(res.data.data)
            //if (res.data.data){
                //Setmsg('datos de resumen y descripcion actualizados.')
            //}
        //}).catch(err =>{
            //console.error(err)
            //Setmsg('existe algun error porfavor intente mas tarde.')
        /*})*/
    })

    const LoadCategories = () => {
        CatCamp.getCategoryCampaing()
            .then(resp => {
                SetCate(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const LoadTags = () => {
        TabCamp.getTagCampaing()
            .then(resp => {
                Settagcp(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    /*const handleTags = (e:React.FormEvent<HTMLInputElement> ) => {*/
        //const id: number = +e.currentTarget.value
        //const {checked} = e.currentTarget
        //if(checked){
            //Setselected(prev=>[...prev, id])
        //}else{
            //Setselected(prev=>prev.filter(item=>item !== id))
        //} 
    /*}*/

    React.useEffect(() => {
        let _formCatag:any = window.localStorage.getItem('formCatag')
        let form_parse = JSON.parse(_formCatag)
        let _tags: any = form_parse
        SetloadTag(_tags?.tags)
        //console.log(_tags?.tags)
        LoadCategories()
        LoadTags()
    }, [])

    // TODO: fix error in categories, use defaultValue in selectcat
    return (
        <Form onSubmit={onSubmit}>
            <Label> 
                <FormSubTitle>category del proyecto</FormSubTitle>
                <SelectCat ref={register({required: true})} name="category">
                    {cate &&
                        (cate as any).map((category: any) => {
                            if(propsCamp.categories === category.id){
                                return (<option defaultValue={category.id} key={category.id}>
                                    {category.name}
                                </option>)
                            }
                            return (<option value={category.id} key={category.id}>
                                {category.name}
                            </option>)

                    } )}
                </SelectCat>

                <MsgError>
                    {errors.category && 'este campo es requerido'}
                </MsgError>
            </Label>

            <Label>
                <SelectedField {...propsCamp.tags} />
            </Label>

            <MsgSuccess>{msg}</MsgSuccess>
            <WrapBtn>
                <BtnNext>guardar</BtnNext>
            </WrapBtn>
        </Form>
    )
}

export default FormCatTag
