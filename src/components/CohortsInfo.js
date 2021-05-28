import React from 'react';
import styled from 'styled-components';
import ChartContainer from './ChartContainer';
import VictoryDonutChart from './VictoryDonutChart';

const CohortsInfo = ({ cohortsInfo }) => {
  // display dashboard for cohorts... name and a few charts
  // pie charts for sex, locations, ethnicities
  //  int tuple for age range
  // string for cohort name

  //   fixed chart size for now
  const chartWidth = 180;
  const chartContainerWidth = 200;

  //   show name, size, age range
  return (
    <Wrapper>
      {/* <Name>{cohorts}</Name> */}
      <ChartContainer
        title={'Sexes'}
        data={cohortsInfo.sexes}
        chartWidth={chartWidth}
        containerWidth={chartContainerWidth}
      />
      <ChartContainer
        title={'Ethnicities'}
        data={cohortsInfo.ethnicities}
        chartWidth={chartWidth}
        containerWidth={chartContainerWidth}
      />
      <ChartContainer
        title={'Locations'}
        data={cohortsInfo.eventLocations}
        chartWidth={chartWidth}
        containerWidth={chartContainerWidth}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default CohortsInfo;
