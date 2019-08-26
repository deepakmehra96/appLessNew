import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import './index.css'

class ClickThroughCards extends React.Component {
    render() {
        let dataArray = this.props && this.props.reducer && this.props.reducer.data && this.props.reducer.data.clickCardsArray || []
        return (
            <Row className="cardsPositioning">
                {
                    dataArray.map((val, index) => {
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

export default connect(state => state)(ClickThroughCards)