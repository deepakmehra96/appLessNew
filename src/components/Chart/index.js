import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, Legend } from 'recharts';
import './index.css'

const data = [
    { name: 'Aug 11', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Aug 12', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Aug 13', uv: 2000, pv: 800, amt: 2290 },
    { name: 'Aug 14', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Aug 15', uv: 1280, pv: 4800, amt: 2181 },
    { name: 'Aug 16', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Aug 17', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Aug 18', uv: 3490, pv: 2400, amt: 3908 },
    { name: 'Aug 19', uv: 3490, pv: 4300, amt: 4300 },
    { name: 'Aug 20', uv: 3490, pv: 3800, amt: 3800 },
    { name: 'Aug 21', uv: 3490, pv: 4300, amt: 2100 },

];

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
        console.log(e.payload)
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
        return (
            <div className="mainChart">
                <div className="container-chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart width={1500} height={170} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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

export default connect(
    state => ({
        dispatch: state.dispatch
    })
)(ChartMain)