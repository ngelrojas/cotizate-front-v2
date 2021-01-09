import React from 'react'
import {CampaingBody} from '../../../../../userCampaings'
import {Row, Col} from 'react-styled-flexboxgrid'
import CardCreated from '../cardCreated'

const ListCard: React.FC = () => {
    let token = window.sessionStorage.getItem('token')
    let CampaingCard = new CampaingBody(token)
    const [Cards, setCards] = React.useState()
    const [isLoading, setIsLoading] = React.useState(true)

    const LoadCards = () => {
        CampaingCard.listCampaingBody(2)
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

                ):(<Col xs={12}><h2>AUN NO TIENES PROYECTOS</h2></Col>)
            }

        </Row>
    )
}

export default ListCard

