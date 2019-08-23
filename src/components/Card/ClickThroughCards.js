import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import './index.css'

class ClickThroughCards extends React.Component {
    constructor() {
        super()
        this.state = {
            cardsArray: [
                { number: '4,692 Clicks', title: 'Sharp Cheddar w/ Bacon' },
                { number: '3,786 Clicks', title: 'Creamy Alfredo w/ Bacon' },
                { number: '2,951 Clicks', title: 'Nacho Mac' },
                { number: '2,849 Clicks', title: 'Boxed Dinners' },

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
                                    <Card.Body className="ClickCardsMain">
                                        <Card.Title><h3>{val.number}</h3></Card.Title>
                                        <Card.Subtitle><p>{val.title}</p></Card.Subtitle>
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

export default ClickThroughCards