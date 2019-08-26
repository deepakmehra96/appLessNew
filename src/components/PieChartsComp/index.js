import React from 'react'
import { connect } from 'react-redux'
import { PieChart, Pie, ResponsiveContainer, Sector } from 'recharts';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, Legend } from 'recharts';
import './index.css'

const data = [
  { name: 'Group A', value: 400, fill: "rgb(47, 142, 224)" },
  { name: 'Group B', value: 300, fill: "rgb(75, 187, 206)" },
  { name: 'Group C', value: 300, fill: "rgb(255, 140, 0)" },
  { name: 'Group D', value: 200, fill: "rgb(240, 241, 244)" }
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy - 12} dy={8} fontSize={40} fontWeight={'bold'} textAnchor="middle" fill={"Black"}>{payload.value}</text>
      <text x={cx} y={cy + 12} dy={8} fontSize={18} fontWeight={'600'} textAnchor="middle" fill={"Black"}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 4}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={innerRadius - 5}
        outerRadius={innerRadius - 3}
        fill={fill}
      />
    </g>
  );
};


class PieChartComp extends React.Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <div className="graphCon">
        <div className="question">
          <div className="question-container">
            <PieChart width={300} height={400} >
              <Pie
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape}
                data={this.props.chartData.data}
                cx={130}
                cy={150}
                innerRadius={80}
                outerRadius={110}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={this.onPieEnter}
              />
            </PieChart>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    dispatch: state.dispatch
  })
)(PieChartComp)