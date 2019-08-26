import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import './index.css'

class HeadingCards extends React.Component {
    render() {
        let dataArray = this.props && this.props.reducer && this.props.reducer.data && this.props.reducer.data.titleCardsArray || []
        const API_URL = 'http://209.97.142.219:3061';               
        return (
            <Row className="cardsPositioning">
                {
                    dataArray.map((val, index) => {
                        return (
                            <Col xs={12} sm={12} md={6} xl={3} key={index} className="cardWidth">
                                <Card>
                                    <Card.Body className="cardMain">
                                        <div className="imageOut">
                                            <img className="imageMain" src={API_URL+val.image} />
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

export default connect(state => state)(HeadingCards)