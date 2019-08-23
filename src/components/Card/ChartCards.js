import React from 'react'
import { Row, Card, Col } from 'react-bootstrap';
import './index.css'
import Chart from 'react-google-charts'
import PieChartsComp from '../PieChartsComp';

class ChartCards extends React.Component {
    constructor() {
        super()
        this.state = {
            cardsArray: [
                {
                    title: 'AGE GROUPS',
                    data: [
                        { value: 38, name: '20-44', fill: "rgb(47, 142, 224)" },
                        { value: 24, name: '45-54', fill: "rgb(75, 187, 206)" },
                        { value: 23, name: '55-64', fill: "rgb(255, 140, 0)" },
                        { value: 15, name: '65+', fill: "rgb(240, 241, 244)"  }
                    ]
                },
                {
                    title: 'GENDER',
                    data: [
                        { value: 38, name: 'Male', fill: "rgb(47, 142, 224)" },
                        { value: 24, name: 'Female' , fill: "rgb(240, 241, 244)" },
                    ]
                },
                {
                    title: 'HOUSEHOLD INCOME', data: [
                        { value: 38, name: '20-44', fill:"rgb(47, 142, 224)" },
                        { value: 24, name: '45-54',fill: "rgb(75, 187, 206)" },
                        { value: 23, name: '55-64' ,fill:  "rgb(255, 140, 0)"},
                        { value: 15, name: '65+' ,  fill:"rgb(240, 241, 244)" }
                    ]
                },
                {
                    title: 'GEOGRAPHY', data: [
                        { value: 38, name: '20-44', fill:"rgb(47, 142, 224)" },
                        { value: 24, name: '45-54',fill: "rgb(75, 187, 206)" },
                        { value: 23, name: '55-64',fill:  "rgb(255, 140, 0)" },
                        { value: 15, name: '65+' ,fill:"rgb(240, 241, 244)" }
                    ]
                },
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

export default ChartCards