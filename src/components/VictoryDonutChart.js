import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

const COLOURS = ['#1b9e77', '#c72540', '#2986e2', '#0da650', '#9d176a'];

const VictoryDonutChart = ({ data, width }) => {
  return (
    <svg viewBox="0 0 400 400">
      <VictoryPie
        colorScale={COLOURS}
        standalone={false}
        width={width}
        height={width}
        data={data}
        x="name"
        y="value"
        innerRadius={10}
        labelRadius={width / 3}
        style={{ labels: { fontSize: 16, fill: 'black' } }}
      />
      {/* <VictoryLabel
        textAnchor='middle'
        style={{ fontSize: 10 }}
        x={100}
        y={100}
        text='Pie!'
      /> */}
    </svg>
  );
};

export default VictoryDonutChart;
