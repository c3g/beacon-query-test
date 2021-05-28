import React from 'react';
import { VictoryPie, VictoryLabel, VictoryTooltip } from 'victory';

const COLOURS = ['#1b9e77', '#9d176a', '#c72540', '#2986e2'];

const chartStyle = { labels: { fontSize: 14, fill: 'black' } };

// reposition chart inside container
const yDisplacement = 35;

const VictoryDonutChart = ({ data, width }) => {
  return (
    <svg viewBox={`0 ${yDisplacement} ${width} ${width - 50}`}>
      <VictoryPie
        colorScale={COLOURS}
        standalone={false}
        width={width}
        height={width}
        data={data}
        x="name"
        y="value"
        innerRadius={18}
        labelRadius={width / 4}
        style={chartStyle}
      />
    </svg>
  );
};

export default VictoryDonutChart;
