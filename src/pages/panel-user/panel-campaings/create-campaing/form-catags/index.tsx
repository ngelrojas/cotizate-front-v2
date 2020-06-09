import React from 'react'
import {useForm} from 'react-hook-form'
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

const FormCatTag: React.FC = () => {
    const [msg, Setmsg] = React.useState('')
    const [cate, SetCate] = React.useState()
    const [tagcp, Settagcp] = React.useState()
    const [selected, Setselected] = React.useState<number[]>([])
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
            tags: selected
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
        TabCamp.getTagCampaing()
            .then(resp => {
                Settagcp(resp.data)
                console.log(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleTags = (e:React.FormEvent<HTMLInputElement> ) => {
        //Setselected()
        const id: number = +e.currentTarget.value
        const {checked} = e.currentTarget
        if(checked){
            Setselected(prev=>[...prev, id])
        }else{
            Setselected(prev=>prev.filter(item=>item !== id))
        } 
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
                    {tagcp &&
                        (tagcp as any).map((tag: any) => (
                        <TagLabel key={tag.id}>
                            <span>{tag.name}</span>
                                <input 
                                    defaultChecked={selected.includes(tag.id)}
                                    type="checkbox" 
                                    value={tag.id} 
                                    onClick={handleTags} />
                        </TagLabel>
                        ))}
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
