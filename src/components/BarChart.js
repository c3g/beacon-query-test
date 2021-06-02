import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory';

// default data format is: [{x: someXVal, y: someYVal}, ... ]

const BarChart = ({ data, width }) => {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      padding={50}
      domainPadding={20}
      width={width}
      height={width}
      standalone={true}
    >
      <VictoryAxis
        label="Age (years)"
        tickValues={[20, 40, 60, 80]}
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
        style={{
          axisLabel: { padding: 33 },
        }}
      />

      <VictoryBar
        style={{ data: { fill: '#c43a31', stroke: '#000000', strokeWidth: 1 } }}
        data={data}
        barRatio={1}
        alignment="start"
      />
    </VictoryChart>
  );
};

export default BarChart;
