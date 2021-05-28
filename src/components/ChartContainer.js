import React from 'react';
import styled from 'styled-components';
import VictoryDonutChart from './VictoryDonutChart';

const ChartContainer = ({ title, data, chartWidth, containerWidth }) => {
  return (
    <ChartWrapper width={containerWidth}>
      <Title>{title}</Title>
      <VictoryDonutChart data={data} width={chartWidth} />
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width}px;
  max-height: 200px;
  justify-content: center;
  margin: 0;
  padding: 0;
  /* background-color: hotpink; */
`;

const Title = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export default ChartContainer;
