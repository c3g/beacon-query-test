import React from 'react';
import BarChart from './BarChart';
import { headerColour, borderColour } from '../constants';
import styled from 'styled-components';

const BarChartContainer = ({
  title,
  data,
  chartWidth,
  chartContainerWidth,
}) => {
  return (
    <ChartWrapper width={chartContainerWidth}>
      <Title>{title}</Title>
      <BarChart data={data} width={chartWidth} />
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
export default BarChartContainer;
