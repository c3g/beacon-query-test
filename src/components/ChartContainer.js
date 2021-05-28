import React from 'react';
import styled from 'styled-components';
import VictoryDonutChart from './VictoryDonutChart';
import { headerColour, borderColour } from '../constants';

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
  margin: 5px;
  padding: 0;
  border: 1px solid ${borderColour};
`;

const Title = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${borderColour};
  background-color: ${headerColour};
`;

export default ChartContainer;
