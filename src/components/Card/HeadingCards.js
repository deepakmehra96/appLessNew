import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import './index.css'

class HeadingCards extends React.Component {
    constructor() {
        super()
        this.state = {
            cardsArray: [
                { image: './people.png', number: '1,073,852', title: 'Impressions', color: '#4bbbce' },
                { image: './book.png', number: '23,401', title: 'Activations', color: '#8862e0' },
                { image: './pointer.png', number: '14,278', title: 'Clickthroughs', color: '#2f8ee0' },
                { image: './time.png', number: '24 Seconds', title: 'Average Time Spent', color: '#f24734' },
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
                                    <Card.Body className="cardMain">
                                        <div className="imageOut">
                                            <img className="imageMain" src={val.image} />
                                        </div>
                                        <Card.Title><h3 style={{ color: val.color }}>{val.number}</h3></Card.Title>
                                        <Card.Subtitle><strong>{val.title}</strong></Card.Subtitle>
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

export default HeadingCards