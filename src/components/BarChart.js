import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory';

// default data format is: [{x: someXVal, y: someYVal}, ... ]

const BarChart = ({ data, width }) => {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      padding={{ top: 20, bottom: 60, left: 50, right: 50 }}
      domainPadding={20}
      width={width}
      height={width}
      standalone={true}
    >
      <VictoryAxis
        label="Age (years)"
        tickFormat={(x) => {
          return x % 30 == 0 ? `${x}` : ``;
        }}
        style={{
          axisLabel: { padding: 28 },
        }}
      />
      <VictoryAxis
        dependentAxis
        label="Count"
        tickFormat={(y) => {
          return Number.isInteger(y) ? `${y}` : ``;
        }}
        style={{
          axisLabel: { padding: 33 },
        }}
      />

      <VictoryBar
        style={{ data: { fill: '#4b9b79', stroke: '#000000', strokeWidth: 1 } }}
        data={data}
        barRatio={1}
        alignment="start"
      />
    </VictoryChart>
  );
};

export default BarChart;
