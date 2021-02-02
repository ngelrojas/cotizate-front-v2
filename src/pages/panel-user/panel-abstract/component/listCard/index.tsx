import React from 'react'
import {CampaingBody} from '../../../../../userCampaings'
import {Row, Col} from 'react-styled-flexboxgrid'
import CardCreated from '../cardCreated'
import Loading from '../../../../../components/loading'

interface IstatusCamp {
    status: number
}

const ListCard: React.FC<IstatusCamp> = (props) => {
    let token = window.sessionStorage.getItem('token')
    let CampaingCard = new CampaingBody(token)
    const [Cards, setCards] = React.useState()
    const [isLoading, setIsLoading] = React.useState(true)

    const LoadCards = () => {
        CampaingCard.listCampaingBody(props.status)
            .then(resp => {
                setCards(resp.data.data)
            })
            .catch(err => {
                console.error(err)
            })
            .then(()=>{
                setIsLoading(false)
            })
    }
    React.useEffect(()=>{
       LoadCards() 
    },[])

    return(
        <Row>
            {
                !isLoading && Cards ? (
                    Cards.map((data: any) => {
                        return  <Col xs={6}>
                                    <CardCreated {...data} />
                                </Col>
                    })

                ):(<Col xs={12}> 
                    <Loading message="cargando campañas" />                 
                    </Col>)
            }

        </Row>
    )
}

export default ListCard

