import React from 'react'
import {TagCampaing} from '../../userTags'

interface tagcom {
    id: number
    name: string
}
type propsCamp = {
    id: number
}

const SelectedField: React.FC = (propsCamp)=>{
    const [tagcp, Settagcp] = React.useState()
    const [selected, Setselected] = React.useState<number[]>([])
    const [tagselect, Setagselect] = React.useState<tagcom[]>([])
    let token = window.sessionStorage.getItem('token')
    let TabCamp = new TagCampaing(token)

    const LoadTags = () => {
        TabCamp.getTagCampaing()
            .then(resp => {
                Settagcp(resp.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleTags = (e:React.FormEvent<HTMLInputElement> ) => {
        let tag_coll: tagcom
        let idn: number = +e.currentTarget.value
        let label: string = e.currentTarget.name
        const {checked} = e.currentTarget
        tag_coll = {
            id: idn,
            name: label 
        }

        if(checked){
            Setagselect(nextData=>[...nextData, tag_coll])
        }else{
            Setagselect(prev=>prev.filter(item=>item.id !== tag_coll.id))
        }
        
        console.info(tagselect)
    }

    React.useEffect(()=>{
        LoadTags()
        console.info(propsCamp)
    },[])
    //
    return(
        <div>
            <div>
                {
                    tagcp && tagcp.map((tag:any)=>{
                        return (
                            <label key={tag.id}>
                                <input 
                                    defaultChecked={selected.includes(tag.id)}
                                    type="checkbox" 
                                    value={tag.id}
                                    onClick={handleTags}
                                    name={tag.name}
                                />
                                {tag.name}
                            </label>                        
                        )
                    })
                }
            </div>

            <br />
            <div>
                {
                    tagselect && tagselect.map((tag:any)=>{
                        return (
                            <label key={tag.id}>
                                <input 
                                    defaultChecked={tag.id ? tag.id:selected.includes(tag.id)}
                                    type="checkbox" 
                                    value={tag.id}
                                    onClick={handleTags}
                                    name={tag.name}
                                />
                                {tag.name}
                            </label>                        
                        )
                    })
                }
            </div>
        </div>
    ) 
}

export default SelectedField
