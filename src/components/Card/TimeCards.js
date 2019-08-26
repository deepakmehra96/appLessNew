import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import './index.css'

class TimeCards extends React.Component {
    render() {
        let dataArray = this.props && this.props.reducer && this.props.reducer.data && this.props.reducer.data.timeCardsArray || []
        const API_URL = 'http://209.97.142.219:3061';        
        return (
            <Row className="cardsPositioning">
                {
                    dataArray.map((val, index) => {
                        return (
                            <Col xs={12} sm={12} md={6} xl={3} key={index} className="cardWidth">
                                <Card>
                                    <Card.Body className="timeCardsMain">
                                        <Card.Title><h3>{val.title}</h3></Card.Title>
                                        <Card.Subtitle><p>{val.number}</p></Card.Subtitle>
                                        <div className="imageOut">
                                            <img className="imageMain" src={API_URL + val.image} />
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

export default connect(state => state)(TimeCards)