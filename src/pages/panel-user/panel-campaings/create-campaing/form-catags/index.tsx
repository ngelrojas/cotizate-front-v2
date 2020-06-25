import React from 'react'
import {useForm} from 'react-hook-form'
import MultiSelect from 'react-multi-select-component'
import {CategoriesCampaing} from '../../../../../userCategories'
import {TagCampaing} from '../../../../../userTags'
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

const FormCatTag: React.FC = () => {
    const [msg, Setmsg] = React.useState('')
    const [cate, SetCate] = React.useState()
    const [tagcp, Settagcp] = React.useState()
    //const [selected, Setselected] = React.useState<number[]>([])
    const [selected, Setselected] = React.useState([])
    const [loadTag, SetloadTag] = React.useState()
    let token = window.sessionStorage.getItem('token')
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
            category: category,
            tags:selected 
        }

        window.localStorage.setItem('formCatag', JSON.stringify(send_data))
        Setmsg('categoria y tags guardados.')
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
        let tagjson: any 
        let chtag: any
        TabCamp.getTagCampaing()
            .then(resp => {
                Settagcp(resp.data)
                //console.log(resp.data)
                tagjson = resp.data
                tagjson.map( (tagj: any) =>(
                    arrayTag.push({label: tagj.name, value: tagj.id}) 
                ))
                setChargeTag(arrayTag)
                chtag = arrayTag
            })
            .catch(err => {
                console.log(err)
            })

                console.log(chtag)
    }

/*    const handleTags = (e:React.FormEvent<HTMLInputElement> ) => {*/
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

    return (
        <Form onSubmit={onSubmit}>
            <Label>
                <FormSubTitle>category del proyecto</FormSubTitle>
                <SelectCat ref={register({required: true})} name="category">
                    <option value="">SELECCIONAR</option>
                    {cate &&
                        (cate as any).map((category: any) => (
                            <option value={category.id} key={category.id}>
                                {category.name}
                            </option>
                        ))}
                </SelectCat>

                <MsgError>
                    {errors.category && 'este campo es requerido'}
                </MsgError>
            </Label>
            <Label>
                <FormSubTitle>Tags</FormSubTitle>
                
                <MsgError>{errors.tags && 'este campo es requerido'}</MsgError>

            </Label>
            <Label>
                <FormSubTitle>Tags</FormSubTitle>

                <MsgError>{errors.tags && 'este campo es requerido'}</MsgError>

            </Label>

            <MsgSuccess>{msg}</MsgSuccess>
            <WrapBtn>
                <BtnNext>guardar</BtnNext>
            </WrapBtn>
        </Form>
    )
}

export default FormCatTag
