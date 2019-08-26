import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import ChartMain from '../../components/Chart/index'
import './index.css'
import HeadingCards from '../../components/Card/HeadingCards';
import Heading from '../../components/Headings';
import TimeCards from '../../components/Card/TimeCards';
import ClickThroughCards from '../../components/Card/ClickThroughCards'
import ChartCards from '../../components/Card/ChartCards';
import Spinner from '../../components/Spinner';
import { getData } from '../../redux/actions';

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false
        };
    }
    componentDidMount(){
        this.setState({ loading: true })
        this.props.dispatch(getData()).then(res => {
            if (res.status == 200) {
                this.setState({ loading: false })
            }else{
                this.setState({ loading: false })
                alert('Some Error Occurs')
            }
        }).catch((err) => {
            this.setState({ loading: false })
            alert('Some Error Occurs')
        })
    }

    LoadingMessage = () => {
        return (
            <Spinner />
        );
    }
        
    render() {
        let { errors, loading } = this.state
        if (loading) return this.LoadingMessage();
        return (
            <div>
                <div className="backgroundColorMain">
                    <Container fluid className="containeNoMargin">
                        <div className="backgroundGradient">
                            <div className="dashBoardCon">
                                <div className="textCon">
                                    <h1 className="mainHeading">APP LESS</h1>
                                    <div className="titleText">
                                        <h4>Devour Gaming | August 5, 2019 - September 9, 2019</h4>
                                    </div>
                                </div>
                                <Col md={12} xs={12} sm={12} xl={12} >
                                    <ChartMain />
                                    <Row className="buttonOut">
                                        <button className="buttonWhite">
                                            August
                                        </button>
                                        <button className="buttonBlue">
                                            September
                                        </button>
                                    </Row>
                                </Col>
                            </div>
                        </div>
                    </Container>
                    <div className="wrapper">
                        <Container fluid className="containeNoMargin">
                            <div className="secondContainer">
                                <HeadingCards />
                                <Heading text="Time Spent Breakdown" />
                                <TimeCards />
                                <Heading text="Clickthrough Breakdown" />
                                <ClickThroughCards />
                                <Heading text="Demographics" />
                                <ChartCards />
                            </div>
                        </Container>
                    </div>

                </div>
                <div>
                    <Container fluid className="containeNoMargin">
                        <div className="bootomTextOut">
                           <p>© 2019 DRM Digital</p>
                        </div>
                    </Container>
                </div>
            </div>

        )
    }
}

export default connect(state => state)(Dashboard)