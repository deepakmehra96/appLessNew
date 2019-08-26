import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, Legend } from 'recharts';
import './index.css'

class ChartMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            barSize: 10
        };
    }

    componentDidMount(event) {
        this.handleResize()
        window.addEventListener('resize', () => {
            this.handleResize()
        });
    }
    handleResize() {
        if (window.innerWidth > 767) {
            this.setState({ barSize: 10 })
        } else if (window.innerWidth < 767 && window.innerWidth > 500) {
            this.setState({ barSize: 5 })
        } else if (window.innerWidth <= 500) {
            this.setState({ barSize: 2 })
        }
    }

    customTooltipOnYourLine(e) {
        if (e.active && e.payload != null && e.payload[0] != null) {
            return (
                <div className="tooTipMain">
                    <div className="headerTooTip">
                        <p>{e.payload[0].payload.name}</p>
                    </div>
                    <div className="tootTipText">
                        <p>Activation : {e.payload[0].payload.pv}</p>
                        <p>Clicks :  {e.payload[0].payload.uv}</p>
                    </div>
                </div>);
        }
        else {
            return "";
        }
    }

    render() {
        let { barSize } = this.state
        let dataArray = this.props && this.props.reducer && this.props.reducer.data && this.props.reducer.data.graphArray || []
        return (
            <div className="mainChart">
                <div className="container-chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart 
                                    width={1500} height={170} 
                                    data={dataArray}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip
                                content={this.customTooltipOnYourLine}
                                cursor={{ fill: 'transparent' }} />
                            <Legend />
                            <Bar dataKey="pv" fill="rgb(47, 142, 224)" barSize={barSize} />
                            <Bar dataKey="uv" fill="rgb(75, 187, 206)" barSize={barSize} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>
        )
    }
}

export default connect(state => state)(ChartMain)
