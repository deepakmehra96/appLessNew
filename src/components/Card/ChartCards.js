import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import './index.css'
import { connect } from 'react-redux'
import PieChartsComp from '../PieChartsComp';

class ChartCards extends React.Component {  
  render() {
        let dataArray = this.props && this.props.reducer && this.props.reducer.data && this.props.reducer.data.cardChartArray || []
        return (
            <Row className="cardsPositioning">
                {
                    dataArray.map((val, index) => {
                        return (
                            <Col xs={12} sm={12} md={6} xl={3} key={index} className="cardWidth">
                                <Card>

                                <Card.Title className="chartTitle"><p>{val.title}</p></Card.Title>

                                    <Card.Body className="chartCardMain">
                                        <Row className="alignInRow">
                                            {
                                                val.data.map((value, index) => {
                                                    return (
                                                        <Col  key={index} md={6} className="dataOut">
                                                            <h3>{value.value}%</h3>
                                                            <p>{value.name}</p>
                                                        </Col>

                                                    )
                                                })
                                            }
                                        </Row>
                                        <PieChartsComp chartData={val}/>
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

export default connect(state => state)(ChartCards)