import React from 'react'
import {useRouteMatch} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {CategoriesCampaing} from '../../../../../userCategories'
import FormConfig from './form-config' 
import FormDescription from './form-description'
import FormPhase from './form-phase'
import FormReward from './form-rewards'
import {WrapBtn, BtnBack, BtnNext} from '../styles'

type FormData = {
    category: string
    tags: string
    qty_day: number
    amount: number
    locations: string
}

const FormBasic: React.FC = () => {

    let match = useRouteMatch('/panel-de-usuario/:campania')
    let history = useHistory()
    let token = window.sessionStorage.getItem('token')
    let CatCamp = new CategoriesCampaing(token)
    const [cate, SetCate] = React.useState()
    const [msg, Setmsg] = React.useState('')
    const [formbasic, Setformbasic] = React.useState()
    const [menu, setMenu] = React.useState(1)
    let matchUrl: any = match
    let type_campaing = matchUrl.params.campania   

    const [datai, setDatai] = React.useState()

    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onChange'
    })

    const onSubmit = handleSubmit(({category, locations, qty_day, amount}) => {
        /*let send_data = {*/
            //category: category,
            //localtions: locations,
            //qty_day: qty_day,
            //amount: amount
        //}

        //window.localStorage.setItem('formBasic', JSON.stringify(send_data))
        /*Setmsg('datos basicos guardados')*/
        //history.push(`/panel-de-usuario/${type_campaing}/descripcion`)
        let menu_length:number = 4 
        let increment:number = menu + 1
        
        if(increment === menu_length){
            increment = 1
            setMenu(increment)
        }
        setDatai(1)
        setMenu(increment)
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

    const handleBack=()=>{
        let rest:number = 0 
        if(menu > 1){
            rest = menu - 1 
            setMenu(rest)
        }
    }

    const handleNext = ()=>{
        
        let menu_length:number = 5 
        let increment:number = menu + 1
        
        if(increment === menu_length){
            increment = 1
            setMenu(increment)
        }
        setDatai(1)
        setMenu(increment)
    }

    const stepForm = (index: number) => {
        switch(index){
            case 1: 
                return <FormConfig />
            case 2: 
                return <FormDescription />
            case 3: 
                return <FormPhase />
            case 4: 
                return <FormReward />
            default: 
                return <FormConfig />
        }
    }

    React.useEffect(()=>{
        let _formbasic: any = window.localStorage.getItem('formBasic')
        Setformbasic(JSON.parse(_formbasic))
        LoadCategories()
        console.info(menu)
    },[])

    return (
        <>
            {
               stepForm(menu) 
            }
            <div>           
            <WrapBtn>
                <BtnBack onClick={handleBack}>volver</BtnBack>
            </WrapBtn>
            <WrapBtn>
                <BtnNext  onClick={handleNext}>siguiente</BtnNext>
            </WrapBtn>
            </div>

        </>

    )
}

export default FormBasic
