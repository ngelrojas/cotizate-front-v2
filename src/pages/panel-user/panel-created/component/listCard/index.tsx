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
        CampaingCard.listCampaingBody(5)
            .then(resp => {
                console.info(resp.data.data)
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
                    Cards.map((data: any, index: number) => {
                        return  <Col xs={6}>
                                    <CardCreated key={index} {...data} />
                                </Col>
                    })

                ):("<div>No Data</div>")
            }

        </Row>
    )
}

export default ListCard

