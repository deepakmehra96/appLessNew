import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import './index.css'

class TimeCards extends React.Component {
    constructor() {
        super()
        this.state = {
            cardsArray: [
                { image: './card.ico', number: 'Card 1', title: '7 Seconds' },
                { image: './card.ico', number: 'Card 2', title: '27 Seconds' },
                { image: './card.ico', number: 'Card 3', title: '17 Seconds' },
                { image: './card.ico', number: 'Card 4', title: '47 Seconds' },
                { image: './card.ico', number: 'Card 5', title: '7 Seconds' },

            ]
        }
    }

    render() {
        let { cardsArray } = this.state
        return (
            <Row className="cardsPositioning">
                {
                    cardsArray.map((val, index) => {
                        return (
                            <Col xs={12} sm={12} md={6} xl={3} key={index} className="cardWidth">
                                <Card>
                                    <Card.Body className="timeCardsMain">
                                        <Card.Title><h3>{val.title}</h3></Card.Title>
                                        <Card.Subtitle><p>{val.number}</p></Card.Subtitle>
                                        <div className="imageOut">
                                            <img className="imageMain" src={val.image} />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        )
    }
}

export default TimeCards