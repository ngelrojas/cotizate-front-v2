import React from 'react'
import {useForm} from 'react-hook-form'
import Select from 'react-select'
import {CategoriesCampaing} from '../../../../../userCategories'
import {TagCampaing} from '../../../../../userTags'
import {
    Label,
    Input,
    FormSubTitle,
    WrapBtn,
    BtnNext,
    Form,
    MsgError,
    MsgSuccess,
    SelectCat
} from '../styles'

type FormData = {
    category: string
    tags: string
    qty_day: number
    amount: number
}

const FormCatTag: React.FC = () => {
    const [msg, Setmsg] = React.useState('')
    const [cate, SetCate] = React.useState()
    const [tagcp, Settagcp] = React.useState()
    const [selected, Setselected] = React.useState()
    let token = window.sessionStorage.getItem('token')
    let CatCamp = new CategoriesCampaing(token)
    let TabCamp = new TagCampaing(token)
    //const selectTags = React.useRef<HTMLSelectElement>(null)
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(({category, tags}) => {
        let send_data = {
            category: category,
            tags: tags
        }

        window.localStorage.setItem('formCatag', JSON.stringify(send_data))
        Setmsg('datos basicos guardados')
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
                console.log(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleTagChange = (selected:any) => {
        Setselected(selected)
        console.log(selected)
    }
    React.useEffect(() => {
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
                <select name="tag"  multiple={true}>
                    <option value="">SELECCIONAR</option>
                    {tagcp &&
                        (tagcp as any).map((tag: any) => (
                            <option value={tag.id} key={tag.id}>
                                {tag.name}
                            </option>
                        ))}
                </select>
                    <Select
                        multiple={true}
                    value={selected}
                    onChange={handleTagChange}
                    options={tagcp} 
                />
                <MsgError>{errors.tags && 'este campo es requerido'}</MsgError>
            </Label>
            <Label>
                <FormSubTitle>cuantos dias durara tu campaña</FormSubTitle>
                <Input
                    type="number"
                    name="qty_day"
                    ref={register({required: true})}
                    placeholder="cantidad de dias"
                />
                <MsgError>
                    {errors.qty_day && 'este campo es requerido'}
                </MsgError>
            </Label>
            <Label>
                <FormSubTitle>cantidad de dinero a recaudar</FormSubTitle>
                <Input
                    type="number"
                    name="amount"
                    ref={register({required: true})}
                    placeholder="$Bs 15.000"
                />
                <MsgError>
                    {errors.amount && 'este campo es requerido'}
                </MsgError>
            </Label>
            <MsgSuccess>{msg}</MsgSuccess>
            <WrapBtn>
                <BtnNext>guardar</BtnNext>
            </WrapBtn>
        </Form>
    )
}

export default FormCatTag
