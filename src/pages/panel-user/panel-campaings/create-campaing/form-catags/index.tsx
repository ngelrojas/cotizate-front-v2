import React from 'react'
import {useForm} from 'react-hook-form'
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
    Select
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
    let token = window.sessionStorage.getItem('token')
    let CatCamp = new CategoriesCampaing(token)
    let TabCamp = new TagCampaing(token)
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
                console.log(resp)
                SetCate(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const LoadTags = () => {
        TabCamp.getTagCampaing()
            .then(resp => {
                console.log(resp)
            })
            .catch(err => {
                console.log(err)
            })
    }

    React.useEffect(() => {
        LoadCategories()
        LoadTags()
    }, [])

    return (
        <Form onSubmit={onSubmit}>
            <Label>
                <FormSubTitle>category del proyecto</FormSubTitle>
                <Select ref={register({required: true})} name="category">
                    <option value="">SELECCIONAR</option>
                    {cate &&
                        (cate as any).map((category: any) => (
                            <option value={category.id} key={category.id}>
                                {category.name}
                            </option>
                        ))}
                </Select>

                <MsgError>
                    {errors.category && 'este campo es requerido'}
                </MsgError>
            </Label>
            <Label>
                <FormSubTitle>Tags</FormSubTitle>
                <select name="tag">
                    <option value="">one</option>
                    <option>two</option>
                </select>
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
